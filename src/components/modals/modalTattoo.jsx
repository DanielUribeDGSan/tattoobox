import React, { memo, useEffect, useState } from "react";
import { useRef } from "react";
import Link from "next/link";
import { ActionsTattoos } from "../actions/actions-tattoos";
import useTattoboxApi from "../../hooks/use-tattobox-api";
import { InformationTattoo } from "../tattoos/information/information-tattoo";
import CloseIcon from "@mui/icons-material/Close";
import ImageLightBox from "../common/modals/image-lightbox";
import { BtnSliderTattoo } from "../buttons/btn-slider-tattoo";
import { BtnsActionsTattooFloat } from "../buttons/btns-actions-tattoo-float";
import { UserCircleImage } from "../tattoos/information/user-circle-image";

export const ModalTattoo = ({ modal_id, idContent }) => {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [imageSize, setImageSize] = useState(0);

  const { getContentTattoo, contentTattoo, isLoading } = useTattoboxApi();

  const images = [contentTattoo.UrlImagen];
  const imageTattoo = useRef();

  const handleImagePopup = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  const onImgLoad = ({ target: img }) => {
    setImageSize(img.offsetHeight);
    if (img.offsetHeight <= 600 || img.offsetHeight > 800) {
      imageTattoo.current.style.height = "100%";
    }
  };

  const handleOnClickNext = () => {
    // getContentTattoo(idContentAfter);
  };

  const handleOnClickBack = () => {
    // getContentTattoo(idContentBefore);
  };

  useEffect(() => {
    let isActive = true;

    if (idContent && isActive) {
      getContentTattoo(idContent);
    }
    return () => {
      isActive = false;
    };
  }, [idContent]);

  return (
    <div
      className="modal fade modal-tattoo"
      id={modal_id}
      aria-labelledby="tatuajeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-body d-flex align-items-center justify-content-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              title="Close"
            >
              <CloseIcon />
            </button>
            <div
              className="container"
              style={{
                height:
                  imageSize > 600
                    ? `${imageSize}px`
                    : imageSize <= 800
                    ? "65vh"
                    : "80vh",
              }}
            >
              {isLoading ? (
                <p>Cargando...</p>
              ) : (
                <div className="row grid gx-3 h-inherit">
                  <div className="col-1  p-0 m-0 d-flex align-items-center justify-content-center h-inherit">
                    <BtnSliderTattoo
                      direction="left"
                      action={handleOnClickNext}
                    />
                  </div>
                  <div className="col-6 p-0 m-0 h-inherit position-relative">
                    <BtnsActionsTattooFloat />
                    <img
                      ref={imageTattoo}
                      onLoad={onImgLoad}
                      onClick={() => {
                        handleImagePopup(0);
                      }}
                      className="img-fluid w-100"
                      src={contentTattoo.UrlImagen}
                      alt="tattoobox"
                      style={{
                        maxHeight: "80vh",
                        objectFit: "cover",
                        objectPosition: "center",
                        // height: matches ? "40vh" : "70vh",
                        height: "auto",
                        borderRadius: "20px 0px 0px 20px",
                      }}
                    />
                    {/* <ActionsTattoos content={contentTattoo} /> */}
                  </div>
                  <div
                    className="col-4 mt-lg-0 mt-md-3 mt-3 content-informatin-tattoo p-0 m-0 h-inherit"
                    style={{ overflowY: "auto" }}
                  >
                    <div className="container">
                      <UserCircleImage content={contentTattoo} />
                      <InformationTattoo content={contentTattoo} />
                    </div>
                  </div>
                  <div className="col-1 p-0 m-0 d-flex align-items-center justify-content-center h-inherit">
                    <BtnSliderTattoo
                      direction="right"
                      action={handleOnClickBack}
                    />
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
    </div>
  );
};
