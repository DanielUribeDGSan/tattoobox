import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Link from "next/link";
import { ActionsTattoos } from "../actions/actions-tattoos";
import useTattoboxApi from "../../hooks/use-tattobox-api";
import { InformationTattoo } from "../tattoos/information/information-tattoo";
import CloseIcon from "@mui/icons-material/Close";
import ImageLightBox from "../common/modals/image-lightbox";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const ModalTattoo = ({
  modal_id,
  idContent,
  idContentAfter,
  idContentBefore,
}) => {
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
    if (img.offsetHeight <= 500 || img.offsetHeight > 800) {
      imageTattoo.current.style.height = "100%";
    }
  };

  const handleOnClickNext = () => {
    getContentTattoo(idContentAfter);
  };

  const handleOnClickBack = () => {
    getContentTattoo(idContentBefore);
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
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-body d-flex align-items-center justify-content-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
            <div
              className="container"
              style={{
                height:
                  imageSize > 500
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
                    <button
                      className="btn-back-tattoo"
                      onClick={handleOnClickBack}
                    >
                      <KeyboardArrowLeftIcon sx={{ color: "#000" }} />
                    </button>
                  </div>
                  <div className="col-6 p-0 m-0 h-inherit position-relative">
                    <div className="btns-floats">
                      <button className="btn">
                        <FavoriteBorderIcon sx={{ color: "#000" }} />
                      </button>
                      <button className="btn">
                        <IosShareIcon sx={{ color: "#000" }} />
                      </button>
                      <button className="btn">
                        <MoreHorizIcon sx={{ color: "#000" }} />
                      </button>
                    </div>
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
                      <InformationTattoo content={contentTattoo} />
                    </div>
                  </div>
                  <div className="col-1 p-0 m-0 d-flex align-items-center justify-content-center h-inherit">
                    <button
                      className="btn-next-tattoo"
                      onClick={handleOnClickNext}
                    >
                      <KeyboardArrowRightIcon />
                    </button>
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
