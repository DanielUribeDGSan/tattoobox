import React, { memo } from "react";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CommentsTattoo } from "../comments/comments-tattoo";

export const InformationTattoo = ({ content }) => {
  const { UrlImagen, Titulo, Cuerpo, EstiloTatuaje, PerfilArtista } = content;

  return (
    <>
      <div className="row grid gx-3">
        <div className="col-12 mt-3">
          <div className="description-tatto">
            <p className="text-black p-0 m-0">
              {Cuerpo} - {EstiloTatuaje}
            </p>
            <p className="text-black p-0 m-0">#Lorem-ipsum #dolorsit</p>
          </div>
        </div>
        <div className="col-12 mt-3 ">
          <div className="actions d-flex align-items-center">
            <span>
              <FavoriteBorderIcon
                sx={{ color: "var(--tp-common-black)", fontSize: "1rem" }}
              />
              <span className="text-black" style={{ marginLeft: "10px" }}>
                7000
              </span>
            </span>

            <span className="text-black">Creado el 20 de febrero</span>
          </div>
        </div>
        <div>
          <Divider
            sx={{ marginTop: "20px", borderColor: "rgb(0 0 0 / 45%)" }}
          />
        </div>
      </div>
      <div className="row grid gx-3">
        <div className="col-12 mt-3 d-flex align-items-center justify-content-end">
          <Link href="#">
            <a className="btn-small-primary">Agendar cita</a>
          </Link>
        </div>
      </div>
    </>
  );
};
