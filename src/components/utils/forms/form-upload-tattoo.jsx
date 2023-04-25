import { useFormik } from "formik";
import React, { useState } from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";
import Select from "react-select";
import { toast } from "react-toastify";
import { useUser } from "../../../hooks/use-user";
import { uploadTattoo } from "../../../utils/validation-schema";
import ErrorMsg from "./error-msg";
import { useTattoBoxFiltros } from "../../../hooks/use-tattobox-filtros";
import useTattoboxMultimediaApi from "../../../hooks/use-tattobox-multimedia-api";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#13212c",
    },
    secondary: {
      main: "#13212c",
    },
  },
});

export const FormUploadTattoo = () => {
  const { dataStyles, dataPrices } = useTattoBoxFiltros();
  const [file, setFile] = useState([]);
  const [priceState, setPriceState] = useState();
  const [styleState, setStyleState] = useState();
  const { user, artist, studie, isLoading } = useUser();

  const [profileId, setProfileId] = useState(user?.idPerfil);

  const handleChangeProfile = (e, profile) => {
    setProfileId(profile);
  };

  const updateFiles = (incommingFiles) => {
    setFile(incommingFiles);
  };
  const { uploadTattooArtist } = useTattoboxMultimediaApi();

  const handleChangePrice = (prices) => {
    setPriceState(prices);
  };

  const handleChangeStyle = (prices) => {
    setStyleState(prices);
  };

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { tattoo: "", description: "" },
      validationSchema: uploadTattoo,
      onSubmit: async ({ tattoo, description }, { resetForm }) => {
        const body = {
          IdPerfil:
            studie.length > 0 && artist.length > 0 ? profileId : user?.idPerfil,
          Titulo: tattoo,
          Cuerpo: description,
          IdPrecio: parseInt(priceState?.value),
          DescripcionPrecio: priceState?.label,
          IdEstilo: parseInt(styleState?.value),
          DescripcionEstilo: styleState?.label,
        };
        await uploadTattooArtist(file[0].file, body);
        toast.success(`Tatuaje publicado`, {
          position: "top-left",
        });
        // resetForm();
      },
    });

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="pb-20">
      <div className="mb-30">
        <Dropzone
          onChange={updateFiles}
          minHeight="195px"
          value={file}
          accept="image/*"
          maxFiles={1}
          maxFileSize={20 * 1024 * 1024}
          label="Arrastra o selecciona tu imagen"
          fakeUpload
          header={true}
          footer={false}
        >
          {file.map((file, i) => (
            <FileMosaic {...file} preview key={i} />
          ))}
        </Dropzone>
      </div>
      <div className="mb-20">
        {isLoading ? (
          <p className="text-black">Cargando</p>
        ) : (
          <>
            {studie.length > 0 && artist.length > 0 && (
              <>
                <p
                  className="text-black"
                  style={{ fontSize: "1rem", padding: 0, margin: 0 }}
                >
                  Selecciona tu perfil
                </p>
                <ThemeProvider theme={theme}>
                  <ToggleButtonGroup
                    color="primary"
                    value={profileId}
                    exclusive
                    onChange={handleChangeProfile}
                    aria-label="Perfil"
                    sx={{ width: "100%" }}
                  >
                    <ToggleButton
                      value={artist[0]?.IdPerfil}
                      sx={{
                        textTransform: "inherit",
                        color: "black",
                        width: "50%",
                        overflowWrap: "anywhere",
                      }}
                    >
                      <div className="d-flex flex-column">
                        <span>{artist[0]?.UserName}</span>
                        <span>{artist[0]?.TipoPerfil}</span>
                      </div>
                    </ToggleButton>
                    <ToggleButton
                      value={studie[0]?.IdPerfil}
                      sx={{
                        textTransform: "inherit",
                        color: "black",
                        width: "50%",
                        overflowWrap: "anywhere",
                      }}
                    >
                      <div className="d-flex flex-column">
                        <span>{studie[0]?.UserName}</span>
                        <span>{studie[0]?.TipoPerfil}</span>
                      </div>
                    </ToggleButton>
                  </ToggleButtonGroup>
                </ThemeProvider>
              </>
            )}
          </>
        )}
      </div>
      <div className="mb-30">
        <input
          className="input-default"
          value={values.tattoo}
          onChange={handleChange}
          onBlur={handleBlur}
          name="tattoo"
          type="text"
          placeholder="Nombre del tatuaje"
        />
        {touched.tattoo && <ErrorMsg error={errors.tattoo} />}
      </div>
      <div className="mb-30">
        <input
          className="input-default"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          name="description"
          type="text"
          placeholder="Descripción del tatuaje"
        />
        {touched.description && <ErrorMsg error={errors.description} />}
      </div>
      <div className="mb-30">
        <Select
          placeholder="Selecciona un rango de precios"
          className="react-select-container-upload"
          classNamePrefix="react-select-upload"
          value={priceState || ""}
          onChange={handleChangePrice}
          options={dataPrices}
          instanceId="priceId"
        />
      </div>
      <div className="mb-30">
        <Select
          placeholder="Selecciona un estilo"
          className="react-select-container-upload"
          classNamePrefix="react-select-upload"
          value={styleState || ""}
          onChange={handleChangeStyle}
          options={dataStyles}
          instanceId="styleId"
        />
      </div>

      <button type="submit" className="btn-md-black">
        Subir tatuaje
      </button>
    </form>
  );
};
