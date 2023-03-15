import React, { useEffect } from "react";
import Link from "next/link";

import { ActionsTattoos } from "../actions/actions-tattoos";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTattoboxApi from "../../hooks/use-tattobox-api";
import { InformationTattoo } from "../tattoos/information/information-tattoo";

export const ModalTattoo = ({ modal_id, idContent }) => {
  const { getContentTattoo, contentTattoo, isLoading } = useTattoboxApi();
  const matches = useMediaQuery("(max-width:800px)");

  useEffect(() => {
    if (idContent) {
      getContentTattoo(idContent);
    }
  }, [idContent]);

  return (
    <div
      className="modal fade modal-tattoo"
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
                    src={contentTattoo.UrlImagen}
                    alt="tattoobox"
                    style={{
                      maxHeight: "80vh",
                      objectFit: "cover",
                      objectPosition: "center",
                      height: matches ? "auto" : "70vh",
                      borderRadius: "20px 20px 0px 0px",
                    }}
                  />
                  <ActionsTattoos content={contentTattoo} />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <InformationTattoo content={contentTattoo} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
