import React from "react";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const InformationTattoo = ({ content }) => {
  const { UrlImagen, Titulo, Cuerpo, EstiloTatuaje, PerfilArtista } = content;

  return (
    <div className="px-2 information-tattoo">
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
      <div className="row grid gx-3 comments">
        <div className="col-12 mt-3 ">
          <h2 className="text-black title">Comentarios (78)</h2>
        </div>
        <div className="col-12 mt-2 mb-3">
          <input
            type="text"
            className="input-comment"
            placeholder="Agregar comentario"
          />
        </div>
        <div className="col-12">
          <div className="row grid gx-3">
            <div className="col-1 p-0 m-0">
              <Avatar alt={Titulo} src={UrlImagen} />
            </div>
            <div className="col-9 p-0 m-0">
              <div className="comment">
                <p className="text-black">
                  <strong>Daniel Uribe</strong>
                  <span>
                    WOW THAT'S AWESOME REALLY""YO EVERYONE CAN DRAW BUT NOT LIKE
                    THIS THAT TAKES TALENT AND A Lot OF APPRECIATE
                  </span>
                </p>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center">
              <MoreVertIcon sx={{ color: "var(--tp-common-black)" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
