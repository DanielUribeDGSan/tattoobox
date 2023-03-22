import React, { memo, useEffect, useState } from "react";
import { useRef } from "react";
import useTattoboxApi from "../../hooks/use-tattobox-api";
import { InformationTattoo } from "../tattoos/information/information-tattoo";
import CloseIcon from "@mui/icons-material/Close";
import ImageLightBox from "../common/modals/image-lightbox";
import { BtnsActionsTattooFloat } from "../buttons/btns-actions-tattoo-float";
import { UserCircleImage } from "../tattoos/information/user-circle-image";
import { CommentsTattoo } from "../tattoos/comments/comments-tattoo";
import { BtnAcheduleAppointment } from "../buttons/btn-schedule-appointment";
import { BtnSliderTattoo } from "../buttons/btn-slider-tattoo";
import { Divider } from "@mui/material";

export const ModalTattooMovil = ({ modal_id, idContent }) => {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [imageSize, setImageSize] = useState(0);
  const imageTattoo = useRef();
  const { getContentTattoo, contentTattoo, isLoading } = useTattoboxApi();

  const images = [contentTattoo?.UrlImagen];

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
  // console.log(contentTattoo);

  return (
    <div
      className="modal fade modal-tattoo"
      id={modal_id}
      aria-labelledby="tatuajeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-body">
            <div className="content-movil">
              {isLoading ? (
                <p>Cargando...</p>
              ) : (
                <>
                  <BtnSliderTattoo
                    direction="left"
                    action={handleOnClickNext}
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "1%",
                      width: "auto",
                      padding: "0rem 1rem 1.2rem 0.3rem",
                    }}
                  />
                  <BtnSliderTattoo
                    direction="right"
                    action={handleOnClickNext}
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "12%",
                      width: "auto",
                      padding: "0rem 1rem 1.2rem 0.3rem",
                    }}
                  />
                </>
              )}
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
                  height: `${imageSize}px`,
                }}
              >
                {isLoading ? (
                  <p>Cargando...</p>
                ) : (
                  <div className="row grid gx-3 h-inherit">
                    {/* <div className="col-1  p-0 m-0 d-flex align-items-center justify-content-center h-inherit">
                    <BtnSliderTattoo
                      direction="left"
                      action={handleOnClickNext}
                    />
                  </div> */}
                    <div className="col-12 p-0 m-0 h-inherit position-relative">
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
                          borderRadius: "20px",
                        }}
                      />
                      {/* <ActionsTattoos content={contentTattoo} /> */}
                    </div>
                    <div
                      className="col-12 mt-lg-0 content-informatin-tattoo p-0 m-0 "
                      style={{ overflowY: "auto" }}
                    >
                      <div className="container">
                        <div className="px-2 information-tattoo">
                          <div className="row mt-3">
                            <div className="col-6 d-flex align-items-center justify-content-center">
                              <p
                                className="text-black p-0 m-0"
                                style={{
                                  fontSize: "1.3rem",
                                  fontWeight: "bold",
                                }}
                              >
                                2500 MXN
                              </p>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-center">
                              <BtnsActionsTattooFloat />
                            </div>
                          </div>

                          <div className="row mt-3">
                            <div className="col-8 m-0 p-0">
                              <UserCircleImage
                                content={contentTattoo}
                                divider={false}
                              />
                            </div>
                            <div className="col-auto d-flex align-items-center justify-content-end p-0 m-0">
                              <BtnAcheduleAppointment
                                style={{
                                  marginTop: "10px",
                                  marginLeft: "10px",
                                }}
                              />
                            </div>
                          </div>
                          <div>
                            <Divider
                              sx={{
                                marginTop: "20px",
                                borderColor: "rgb(0 0 0 / 45%)",
                              }}
                            />
                          </div>
                          <div className="mt-1">
                            <InformationTattoo content={contentTattoo} />
                            <CommentsTattoo content={contentTattoo} />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-1 p-0 m-0 d-flex align-items-center justify-content-center h-inherit">
                    <BtnSliderTattoo
                      direction="right"
                      action={handleOnClickBack}
                    />
                  </div> */}
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
    </div>
  );
};
