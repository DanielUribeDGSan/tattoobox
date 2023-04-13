import Image from "next/image";
import Link from "next/link";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const hero_contents = {
  title: "Encuentra el artista adecuado",
  text: (
    <>
      Porque hacerse un tatuaje debe ser una gran experiencia. Trabajamos solo
      con los mejores estudios de tatuajes y te pondremos en contacto con el
      artista adecuado para tu idea.
    </>
  ),
  btn_text: "Encontrar mi tatuaje",
  btn_text_2: "About Collax",
  hero_img: "/assets/img/hero/iphone-14-pro-max.png",
};

const { title, text, btn_text, btn_text_2, social_links, hero_img } =
  hero_contents;

const HeroArea = () => {
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");

  return (
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
      <div className="tp-hero-shape">
        <div className="shape-circle-yellow d-none"></div>
        {/* <div className="shape-circle-blue"></div> */}
        <div className="shape-one">
          {/* <img src="/assets/img/hero/hero-girl-1.png" alt="" /> */}
        </div>
      </div>
      <div className="tp-hero-wapper">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-xl-7 col-lg-7 ">
              <div className="tp-hero-content">
                <div className="tp-hero-text">
                  <h2 className="tp-hero-title ">{title}</h2>
                  <p>{text}</p>
                  <div className="tp-hero-button mb-140 ">
                    <Link href="/tatuajes">
                      <a className="tp-btn mr-30">{btn_text}</a>
                    </Link>
                    {/* <Link href="/about-me">
                      <a className="tp-btn-grey">{btn_text_2}
                        <i className="far fa-arrow-right"></i></a>
                    </Link> */}
                  </div>
                </div>
              </div>
              {!movilIpadaScreen && (
                <div className="tp-hero-social pb-30 d-none-movil">
                  <div className="tp-hero-social bp-hero-social row m-0">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <div className="img">
                        <Image
                          className="img-fluid"
                          src="/assets/img/store/google-play-logo.png"
                          alt="google play store"
                          layout="fill"
                          objectFit="contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <div className="img">
                        <Image
                          className="img-fluid"
                          src="/assets/img/store/Apple_Store.png"
                          alt="apple store"
                          layout="fill"
                          objectFit="contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-xl-5 col-lg-5 d-flex justify-content-center position-relative phone-video">
              {!movilIpadaScreen ? (
                <div style={{ position: "relative" }}>
                  <Image src={hero_img} alt="iPhone" width={331} height={596} />
                  <div className="video-container">
                    <video
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: -1,
                      }}
                      autoPlay
                      loop
                      muted
                    >
                      <source
                        src="assets/videos/tattoobox.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              ) : (
                <div style={{ position: "relative" }}>
                  <Image src={hero_img} alt="iPhone" width={231} height={400} />
                  <div className="video-container">
                    <video
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: -1,
                      }}
                      autoPlay
                      loop
                      muted
                    >
                      <source
                        src="assets/videos/tattoobox.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              )}

              {/* <div className="phone-container">             

                <img
                  src={hero_img}
                  className="img-fluid img-iphone"
                  alt="Celular iphone"
                  loading="lazy"
                />

                <div className="video-container">
                  <video
                    src="assets/videos/tattoobox.mp4"
                    autoPlay
                    playsInline
                    muted
                    loop
                  ></video>
                </div>
              </div> */}
            </div>
            {/* <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-7"></div>
              <div className="col-5">
                <div
                  className="tp-hero-social pb-30 d-none-movil"
                  
                >
                  <div className="tp-hero-social bp-hero-social row m-0">
                    <div className="col-6 d-flex align-items-center justify-content-end">
                      <img
                        className="img-fluid"
                        src="assets/img/store/google-play-logo.png"
                      />
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <img
                        className="img-fluid"
                        src="assets/img/store/Apple_Store.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {movilIpadaScreen && (
              <div
                className="tp-hero-social pb-30 d-none-lg"
                data-wow-duration=".7s"
                data-wow-delay="1.2s"
              >
                <div className="tp-hero-social bp-hero-social row m-0">
                  <div className="col-6 d-flex align-items-center justify-content-center">
                    <div className="img">
                      <Image
                        className="img-fluid"
                        src="/assets/img/store/google-play-logo.png"
                        alt="google play store"
                        layout="fill"
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center justify-content-center">
                    <div className="img">
                      <Image
                        className="img-fluid"
                        src="/assets/img/store/Apple_Store.png"
                        alt="apple store"
                        layout="fill"
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
