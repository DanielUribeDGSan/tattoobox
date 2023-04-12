import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesArea = () => {
  return (
    <div className="tp-service-area bg-gray pt-100 pb-100 p-relative fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 d-none-movil">
            <div className="image-content">
              <Image
                className="img-fluid"
                src="/assets/img/trash/how_it_works.webp"
                alt="tattoobox"
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center justify-content-center">
            <div className="container-steps">
              <article>
                <h2 className="text-black title">Cómo funciona</h2>
                <ul>
                  <li className="d-flex">
                    <div className="icon">
                      <img
                        className="img-fluid"
                        src="/assets/img/service/lluvia-de-ideas.png"
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
                      <img
                        className="img-fluid"
                        src="/assets/img/service/alrededor-del-mundo.png"
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
                      <img
                        className="img-fluid"
                        src="/assets/img/service/maquina-de-tatuar.png"
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
