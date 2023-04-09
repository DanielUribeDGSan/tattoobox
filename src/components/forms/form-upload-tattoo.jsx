import { useFormik } from "formik";
import React, { useState } from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";
import Select from "react-select";
import { toast } from "react-toastify";
import { useUser } from "../../hooks/use-user";
import { uploadTattoo } from "../../utils/validation-schema";
import ErrorMsg from "./error-msg";
import { useTattoBoxFiltros } from "../../hooks/use-tattobox-filtros";
import useTattoboxMultimediaApi from "../../hooks/use-tattobox-multimedia-api";

export const FormUploadTattoo = () => {
  const { dataStyles, dataPrices } = useTattoBoxFiltros();
  const [file, setFile] = useState([]);
  const [priceState, setPriceState] = useState();
  const [styleState, setStyleState] = useState();
  const { user } = useUser();

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
          IdPerfil: user?.idPerfil,
          Titulo: tattoo,
          Cuerpo: description,
          IdPrecio: parseInt(priceState?.value),
          DescripcionPrecio: priceState?.label,
          IdEstilo: parseInt(styleState?.value),
          DescripcionEstilo: styleState?.label,
        };
        await uploadTattooArtist(file[0].file, body);
        toast.success(`${values.name} your message sent successfully`, {
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
