import Link from "next/link";
import React from "react";
import RegisterForm from "../forms/register-form";

const RegisterArea = () => {
  return (
    <>
      <div className="tp-login-area">
        <div className="container-fluid p-0">
          <div className="row gx-0 align-items-center tp-registro">
            <div className="col-xl-5 col-lg-5 col-12 p-0 m-0">
              <div
                className="tp-login-thumb login-space d-flex justify-content-center "
                style={{
                  backgroundImage:
                    "url(/assets/img/register/banner-girl-tattoo.jpeg)",
                }}
              ></div>
            </div>
            <div className="col-xl-7 col-lg-7 col-12 form-content-registro d-flex align-items-center justify-content-center position-relative">
              <div className="registro-btn-back">
                <Link href="/">
                  <a>
                    <i
                      className="far fa-arrow-left"
                      style={{ marginRight: "10px" }}
                    ></i>
                    Regresar
                  </a>
                </Link>
              </div>
              <div className="tp-login-wrapper d-flex justify-content-center">
                <div className="tplogin">
                  <div className="tplogin__title">
                    <h3 className="tp-login-title">Ingresa a tattoobox</h3>
                  </div>
                  <div className="tplogin__form">
                    <RegisterForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterArea;
