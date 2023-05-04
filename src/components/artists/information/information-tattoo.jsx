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
        <div className="col-12">
          <div className="description-tatto">
            <p className="text-black p-0 m-0 fw-bold">
              {Cuerpo} - {EstiloTatuaje}
            </p>
            <p className="text-black p-0 m-0">#Lorem-ipsum #dolorsit</p>
          </div>
        </div>
        <div>
          <Divider
            sx={{ marginTop: "20px", borderColor: "rgb(0 0 0 / 45%)" }}
          />
        </div>
      </div>
    </>
  );
};
