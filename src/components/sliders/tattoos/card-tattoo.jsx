import React, { useState } from "react";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export const CardTattoo = ({ tattoo }) => {
  const [loaded, setLoaded] = useState({});

  const handleImageLoad = (src) => {
    setLoaded((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <div className="card-tattoo">
      <div className="image-tattoo">
        <Image
          className="img-fluid"
          src={tattoo?.UrlImagen}
          alt="tattoobox"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          onLoad={() => handleImageLoad(tattoo?.UrlImagen)}
        />
        {!loaded[tattoo?.UrlImagen] && (
          <Skeleton
            variant="rectangular"
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 99,
            }}
          />
        )}
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
              onLoad={() => handleImageLoad(tattoo?.UrlImagen)}
            />
          </div>
          {!loaded[tattoo?.UrlImagen] && (
            <Skeleton
              variant="rectangular"
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                top: 0,
                left: 0,
              }}
            />
          )}
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
