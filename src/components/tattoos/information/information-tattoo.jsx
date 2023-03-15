import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Divider from "@mui/material/Divider";

export const InformationTattoo = ({ content }) => {
  console.log(content);
  const { UrlImagen, Titulo, Cuerpo, EstiloTatuaje, PerfilArtista } = content;

  return (
    <div className="container">
      <div className="row grid gx-3">
        <div className="col-xl-6 col-lg-6 col-md-6 col-auto d-flex align-items-center">
          <Stack direction="row" spacing={2}>
            <Avatar alt={Titulo} src={UrlImagen} />{" "}
          </Stack>
          <p className="text-black p-0 my-0" style={{ marginLeft: "0.5rem" }}>
            {PerfilArtista?.NombrePerfil}
          </p>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-auto d-flex align-items-center justify-content-end mt-lg-0 mt-md-0 mt-2">
          <Link href="#">
            <a className="btn-small-primary">Agendar cita</a>
          </Link>
        </div>
      </div>
      <Divider sx={{ marginTop: "20px", borderColor: "rgb(0 0 0 / 45%)" }} />
      <div className="row grid gx-3 mt-3">
        <div className="col-6 d-flex align-items-center">
          <p className="text-black">
            <strong>Nombre del diseño:</strong>
          </p>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center">
          <p className="text-black">{Cuerpo}</p>
        </div>
        <div className="col-6 d-flex align-items-center">
          <p className="text-black">
            <strong>Estilo:</strong>
          </p>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center">
          <p className="text-black">{EstiloTatuaje}</p>
        </div>
      </div>
    </div>
  );
};
