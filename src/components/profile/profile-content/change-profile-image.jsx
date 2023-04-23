import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ModalSm from "../../utils/modals/modal-sm";
import { Dropzone, FileMosaic } from "@files-ui/react";
import useTattoboxMultimediaApi from "../../../hooks/use-tattobox-multimedia-api";

export const ChangeProfileImage = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState([]);
  const { uploadImageProfile } = useTattoboxMultimediaApi();

  const handleChangeImage = async (image) => {
    setFile(image);
    if (image[0]?.file) {
      await uploadImageProfile(image[0]?.file, user.idPerfil);
      setOpen(false);
    }
  };

  return (
    <>
      <button
        className="edit-image"
        aria-label="editar imagen de perfil"
        onClick={() => setOpen(true)}
      >
        <EditIcon sx={{ color: "var(--tp-theme-2)" }} />
      </button>
      <ModalSm open={open} setOpen={setOpen} title={"Selecciona tu imagen"}>
        <div className="container py-3">
          <Dropzone
            onChange={handleChangeImage}
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
      </ModalSm>
    </>
  );
};
