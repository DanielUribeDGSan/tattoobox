import React from "react";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const CardTattoo = ({ tattoo }) => {
  return (
    <div className="card-tattoo">
      <img src={tattoo?.UrlImagen} />
      <p className="title">{tattoo?.Cuerpo || tattoo?.UserName}</p>

      <div className="d-flex align-items-center content-price row p-0 mt-2">
        <div className="col-9 m-0 ">
          <p className="style mb-0">
            {tattoo?.EstiloTatuaje || tattoo?.Estado}
          </p>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-end">
          <ArrowForwardIcon sx={{ color: "var(--tp-common-white)" }} />
        </div>
      </div>
    </div>
  );
};
