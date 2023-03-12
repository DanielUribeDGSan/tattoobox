import React from "react";
import Link from "next/link";
import PortfolioItems from "../portfolios/portfolio-2/portfolio-items";

const Profile = () => {
  return (
    <>
      <div className="row grid gx-3 profile">
        <div className="col-xl-2 col-lg-2 col-md-2 d-flex align-items-center justify-content-center">
          <img
            className="img-profile"
            src="/assets/img/tatuajes/tatuaje3.jpg"
            alt="profile tattoobox"
          />
        </div>
        <div className="col-xl-10 col-lg-10 col-md-10 d-flex align-items-center">
          <div>
            <p className="mb-0">
              schecoperez
              <span>
                <img src="/assets/img/svg/verify.svg" alt="" />
              </span>
            </p>
            <span>Tattos Mexican</span>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="profile-biografia pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          laudantium, eligendi, cum aspernatur corrupti mollitia aut. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          laudantium, eligendi, cum aspernatur corrupti mollitia aut.
        </p>
        <div className="row grid gx-3 pb-3">
          <div className="col-xl-7 col-lg-7 col-md-7">
            <ul className="list-group">
              <li className="list-group-item">
                <img
                  src="/assets/img/svg/tattoo-machine.svg"
                  alt="svg tattoo"
                />
                Experiencia en tatuajes realistas
              </li>
              <li className="list-group-item">
                <img
                  src="/assets/img/svg/tattoo-machine.svg"
                  alt="svg tattoo"
                />
                Experiencia en tatuajes de color y blanco y negro
              </li>
              <li className="list-group-item">
                <img
                  src="/assets/img/svg/tattoo-machine.svg"
                  alt="svg tattoo"
                />
                Experiencia en tatuajes grandes
              </li>
            </ul>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5 d-flex align-items-end justify-content-center">
            <div className="">
              <Link href="#">
                <a className="btn-reserva">
                  <i className="fal fa-calendar"></i>
                  <span>Reservar</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ModalTatuaje = ({ modal_id, url_img }) => {
  return (
    <div
      className="modal fade modal-tatauje"
      id={modal_id}
      aria-labelledby="tatuajeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
        <div className="modal-content">
          <div className="modal-body">
            <div className="row grid gx-3">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <img className="img-fluid" src={url_img} alt="tattoobox" />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <Profile />
                <hr />
                <PortfolioItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
