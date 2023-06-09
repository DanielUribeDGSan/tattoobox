import Link from "next/link";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const BreadcrumbSmall = ({ title, back_home = false }) => {
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");
  if (movilIpadaScreen) return <></>;
  return (
    <section
      className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative"
      style={{
        backgroundColor: "var(--tp-common-gray-light)",
        opacity: 1,
        padding: 0,
        height: "100px",
      }}
    >
      {/* <div className="overlay"></div> */}
      {/* <div className="ac-about-shape-img z-index-1">
        <img src="/assets/img/breadcrum/ab-shape-1.1.jpg" alt="" />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title">{title}</h3>
              {!back_home && (
                <Link href="/contact">
                  <div></div>
                  {/* <a className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></a> */}
                </Link>
              )}
              {back_home && (
                <Link href="/">
                  <a className="tp-btn-white-border">
                    Regresar al inicio <i className="far fa-arrow-right"></i>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSmall;
