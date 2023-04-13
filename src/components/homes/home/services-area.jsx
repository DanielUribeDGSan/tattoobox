import Image from "next/image";
import Link from "next/link";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

const ServicesArea = () => {
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");
  const [imageLoading, setImageLoading] = useState(true);

  const handleOnLoad = () => {
    setImageLoading(true);
  };
  const handleOnLoadingComplete = () => {
    setImageLoading(false);
  };

  return (
    <div className="tp-service-area bg-gray pt-100 pb-100 p-relative fix">
      <div className="container">
        <div className="row">
          {!movilIpadaScreen && (
            <div className="col-lg-6 col-md-12 col-12 d-none-movil">
              <div className="image-content">
                {imageLoading && (
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
                  className="img-fluid image-content"
                  src="/assets/img/trash/how_it_works.webp"
                  alt="tattoobox"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  onLoad={handleOnLoad}
                  onLoadingComplete={handleOnLoadingComplete}
                />
              </div>
            </div>
          )}
          <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center justify-content-center">
            <div className="container-steps">
              <article>
                <h2 className="text-black title">Cómo funciona</h2>
                <ul>
                  <li className="d-flex">
                    <div className="icon">
                      <Image
                        className="img-fluid"
                        src="/assets/img/service/lluvia-de-ideas.png"
                        layout="fill"
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="sub-title">
                      <p className="text-black">Describe tu idea de tatuaje</p>
                      <p className="text-black">
                        Proporcione algunos detalles sobre el tamaño, la
                        colocación y el presupuesto de su tatuaje.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="icon">
                      <Image
                        className="img-fluid"
                        src="/assets/img/service/alrededor-del-mundo.png"
                        layout="fill"
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="sub-title">
                      <p className="text-black">Conecta con tu artista</p>
                      <p className="text-black">
                        Elije a tu tatuador preferido entre nuestras
                        sugerencias.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="icon">
                      <Image
                        className="img-fluid"
                        src="/assets/img/service/maquina-de-tatuar.png"
                        layout="fill"
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="sub-title">
                      <p className="text-black">Tatúate</p>
                      <p className="text-black">
                        Reserva tu cita para tatuarte directamente a través de
                        Tattoodo y tatúate.
                      </p>
                    </div>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
