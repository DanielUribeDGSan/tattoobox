import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ActionsTattoos } from "../actions/actions-tattoos";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTattoboxApi from "../../hooks/use-tattobox-api";
import { InformationTattoo } from "../tattoos/information/information-tattoo";
import CloseIcon from "@mui/icons-material/Close";
import ImageLightBox from "../common/modals/image-lightbox";

export const ModalTattoo = ({ modal_id, idContent }) => {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const { getContentTattoo, contentTattoo, isLoading } = useTattoboxApi();
  const matches = useMediaQuery("(max-width:900px)");

  const images = [contentTattoo.UrlImagen];

  const handleImagePopup = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

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
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <CloseIcon
            sx={{
              color: "#fff",
              fontSize: "2.5rem",
              borderRadius: "100%",
              padding: "0.5rem",
            }}
          />
        </button>
        <div className="modal-content">
          <div className="modal-body">
            {isLoading ? (
              <p>Cargando...</p>
            ) : (
              <div className="row grid gx-3">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <img
                    onClick={() => handleImagePopup(0)}
                    className="img-fluid w-100"
                    src={contentTattoo.UrlImagen}
                    alt="tattoobox"
                    style={{
                      maxHeight: "80vh",
                      objectFit: "cover",
                      objectPosition: "center",
                      height: matches ? "40vh" : "70vh",
                      borderRadius: "20px 20px 0px 0px",
                    }}
                  />
                  <ActionsTattoos content={contentTattoo} />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 mt-lg-0 mt-md-3 mt-3">
                  <InformationTattoo content={contentTattoo} />
                </div>
              </div>
            )}
            <ImageLightBox
              images={images}
              open={open}
              setOpen={setOpen}
              photoIndex={photoIndex}
              setPhotoIndex={setPhotoIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
