import React, { useEffect } from "react";
import Link from "next/link";
import { Profile } from "../profile/profile";
import { ActionsTatuajes } from "../actions/actionsTatuajes";
import useTattoboxApi from "../../hooks/use-tattobox-api";

export const ModalTatuaje = ({ modal_id, idContenido }) => {
  const { getContenidoTatuaje, contenidoTatuaje, isLoading } = useTattoboxApi();

  useEffect(() => {
    if (idContenido) {
      getContenidoTatuaje(idContenido);
    }
  }, [idContenido]);

  return (
    <div
      className="modal fade modal-tatauje"
      id={modal_id}
      aria-labelledby="tatuajeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button> */}
        <div className="modal-content">
          <div className="modal-body">
            {isLoading ? (
              <p>Cargando...</p>
            ) : (
              <div className="row grid gx-3">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <img
                    className="img-fluid w-100"
                    src={contenidoTatuaje.UrlImagen}
                    alt="tattoobox"
                    style={{
                      maxHeight: "80vh",
                      objectFit: "cover",
                      objectPosition: "center",
                      height: "70vh",
                      borderRadius: "20px 20px 0px 0px",
                    }}
                  />
                  <ActionsTatuajes contenido={contenidoTatuaje} />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <Profile contenido={contenidoTatuaje} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
