import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, back_home = false }) => {
  return (
    <section
      className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative"
      style={{ backgroundImage: "url(/assets/img/breadcrum/bg-tatuaje.jpg)" }}
    >
      <div className="overlay"></div>
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

export default Breadcrumb;
