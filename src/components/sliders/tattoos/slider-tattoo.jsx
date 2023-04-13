import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardTattoo } from "./card-tattoo";

import "swiper/swiper-bundle.css";

import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import useTattoboxHomeTattoos from "../../../hooks/use-tattobox-home-tattoos";

export const SliderTattoo = ({ data, loading, title }) => {
  const { artist, studies, newest, isLoading } = useTattoboxHomeTattoos();
  const [sliderLoop, setSliderLoop] = useState(false);

  const swiperParams = {
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  useEffect(() => setSliderLoop(true), []);

  if (loading) return <p>Cargando...</p>;

  return (
    <>
      <>
        <div className="pt-50 pb-50 fix">
          <div className="container-fluid container-fluid-pm-0">
            <div className="row">
              <div className="col-xl-12">
                <div className=" text-center pb-25">
                  <h2 className="tp-title tp-white-text">{title}</h2>
                </div>
              </div>
            </div>
            <div className="tp-tattoo-slider-section d-flex justify-content-center">
              {/* slider start */}
              <Swiper
                {...swiperParams}
                loop={sliderLoop}
                slidesPerView={1}
                centeredSlides={true}
                centeredSlidesBounds={true}
                spaceBetween={0}
                navigation
                className="swiper-container "
                breakpoints={{
                  // when window width is >= 1200px
                  1500: { slidesPerView: 4 },
                  1200: { slidesPerView: 3 },
                  1100: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  576: { slidesPerView: 1.5 },
                  0: { slidesPerView: 1.5 },
                }}
              >
                {data.map((tattoo, i) => (
                  <SwiperSlide key={i}>
                    <CardTattoo tattoo={tattoo} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* slider end */}
            </div>

            {/* slider 2 end */}
          </div>
        </div>
      </>
    </>
  );
};
