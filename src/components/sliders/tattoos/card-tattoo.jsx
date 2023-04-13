import React, { useState } from "react";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export const CardTattoo = ({ tattoo }) => {
  const [imageLoading, setImageLoading] = useState({});

  const handleOnLoad = (url) => {
    setImageLoading({ src: url, loading: true });
  };
  const handleOnLoadingComplete = (url) => {
    setImageLoading({ src: url, loading: false });
  };

  return (
    <div className="card-tattoo">
      <div className="image-tattoo">
        {imageLoading?.loading && (
          <Skeleton
            variant="rectangular"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "20px 20px 0px 0px",
            }}
          />
        )}
        <Image
          className="img-fluid "
          src={tattoo?.UrlImagen}
          alt="tattoobox"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          onLoad={() => handleOnLoad(tattoo?.UrlImagen)}
          onLoadingComplete={() => handleOnLoadingComplete(tattoo?.UrlImagen)}
        />
      </div>
      <div className="d-flex align-items-start footer-card row m-0 container">
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-3  d-flex align-items-center justify-content-center">
          <div className="user-image">
            {imageLoading?.loading &&
              imageLoading?.src === tattoo?.UrlImagen && (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                  }}
                />
              )}
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
