import React from "react";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export const CardTattoo = ({ tattoo }) => {
  return (
    <div className="card-tattoo">
      <div className="image-tattoo">
        <Image
          className="img-fluid "
          src={tattoo?.UrlImagen}
          alt="tattoobox"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="d-flex align-items-start footer-card row m-0 container">
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-3  d-flex align-items-center justify-content-center">
          <div className="user-image">
            <Image
              className="img-fluid"
              src={tattoo?.UrlImagen}
              alt="tattoobox"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-9 content-user p-0">
          <p className="title">{tattoo?.Cuerpo || tattoo?.UserName}</p>
          <p className="style mb-0">
            {tattoo?.EstiloTatuaje || tattoo?.Estado}
          </p>
        </div>
      </div>
    </div>
  );
};
