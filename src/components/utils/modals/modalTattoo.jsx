import React, { useRef, useCallback, useEffect, useState } from 'react';

import useTattoboxTattoos from '../../../hooks/use-tattobox-tattoos';
import { InformationTattoo } from '../../tattoos/information/information-tattoo';
import CloseIcon from '@mui/icons-material/Close';
import ImageLightBox from '../../common/modals/image-lightbox';
import { BtnSliderTattoo } from '../../buttons/btn-slider-tattoo';
import { BtnsActionsTattooFloat } from '../../buttons/btns-actions-tattoo-float';
import { UserCircleImage } from '../../tattoos/information/user-circle-image';

import { BtnAcheduleAppointment } from '../../buttons/btn-schedule-appointment';
import { Divider } from '@mui/material';
import { ActionsTattoos } from '../../tattoos/actions/actions-tattoos';
import { TabCommentsTattoos } from '../../tattoos/tabs/tab-comments-tattoos';
import { GridMansoryNotModalTattoo } from '../../utils/mansory/grid-mansory-not-modal-tattoo';
import { ModalTattooSkeleton } from '../skeletons/ModalTattooSkeleton';

export const ModalTattoo = ({ modal_id, idContent, idContentStatic, user }) => {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [shownModal, setShownModal] = useState(false);
  const [idContentDynamic, setIdContentDynamic] = useState('');
  const [actionsState, setActionsState] = useState(false);
  const [open, setOpen] = useState(false);
  const [imageSize, setImageSize] = useState(0);
  const imageTattoo = useRef();
  const modalBody = useRef();

  const { getContentTattoo, contentTattoo, isLoading } = useTattoboxTattoos();
  const memoizedGetContentTattoo = useCallback(getContentTattoo, []);

  const images = [contentTattoo?.UrlImagen];

  const handleImagePopup = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  const onImgLoad = ({ target: img }) => {
    setImageSize(img.offsetHeight);
    if (img.offsetHeight <= 600) {
      imageTattoo.current.style.height = '100%';
    } else {
      imageTattoo.current.style.height = `${img.offsetHeight}px`;
    }
  };

  const handleOnClickNext = () => {
    // getContentTattoo(idContentAfter);
  };

  const handleOnClickBack = () => {
    // getContentTattoo(idContentBefore);
  };

  const handleOnClickCloseModal = () => {
    setShownModal(false);

    // const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    // modalBackdrop.remove();
  };

  const scrollTop = () => {
    modalBody.current.scrollTop = 0;
  };

  useEffect(() => {
    let isActive = true;

    const getData = async () => {
      if (idContentDynamic) {
        await memoizedGetContentTattoo(idContentDynamic, user?.idPerfil);
        scrollTop();
      } else {
        await memoizedGetContentTattoo(idContent, user?.idPerfil);
      }
      setShownModal(true);
    };

    if (idContent && isActive) {
      getData();
    }
    return () => {
      setActionsState(false);
      isActive = false;
    };
  }, [actionsState]);

  useEffect(() => {
    let isActive = true;
    const getData = async () => {
      await memoizedGetContentTattoo(idContent, user?.idPerfil);
      setShownModal(true);
    };

    if (idContent && isActive) {
      getData();
      scrollTop();
    }
    return () => {
      setActionsState(false);
      isActive = false;
    };
  }, [idContent]);

  return (
    <div
      className='modal fade modal-tattoo'
      id={modal_id}
      aria-labelledby='tatuajeModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-fullscreen'>
        <div className='modal-content'>
          <div className='modal-body pt-50' id='infiniteScroll' ref={modalBody}>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              title='Close'
              onClick={handleOnClickCloseModal}
            >
              <CloseIcon />
            </button>
            {isLoading && !shownModal ? (
              <ModalTattooSkeleton />
            ) : (
              <>
                <div
                  className='container'
                  style={{
                    height:
                      imageSize > 600
                        ? `${imageSize}px`
                        : imageSize <= 800
                        ? '65vh'
                        : `${imageSize}px`,
                  }}
                >
                  <div className='row grid gx-3 h-inherit'>
                    <div className='col-1  p-0 m-0 d-flex align-items-center justify-content-center h-inherit'>
                      <BtnSliderTattoo
                        direction='left'
                        action={handleOnClickNext}
                      />
                    </div>
                    <div className='col-6 p-0 m-0 h-inherit position-relative'>
                      <BtnsActionsTattooFloat />
                      <img
                        ref={imageTattoo}
                        onLoad={onImgLoad}
                        onClick={() => {
                          handleImagePopup(0);
                        }}
                        className='img-fluid w-100'
                        src={contentTattoo.UrlImagen}
                        alt='tattoobox'
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                          // height: matches ? "40vh" : "70vh",
                          height: 'auto',
                          borderRadius: '20px 0px 0px 20px',
                          cursor: 'pointer',
                        }}
                      />
                    </div>
                    <div
                      className='col-4 mt-lg-0 mt-md-3 mt-3 content-informatin-tattoo p-0 m-0 h-inherit'
                      style={{ overflowY: 'auto' }}
                      id='infiniteScrollComments'
                    >
                      <div className='container'>
                        <div className='px-2 information-tattoo'>
                          <div className='row mt-2'>
                            <div className='col-9'>
                              <UserCircleImage
                                content={contentTattoo}
                                divider={false}
                              />
                            </div>
                            <div className='col-auto d-flex align-items-center justify-content-end m-0 p-0'>
                              <BtnAcheduleAppointment
                                style={{ marginTop: '10px' }}
                              />
                            </div>
                          </div>

                          <div>
                            <Divider
                              sx={{
                                marginTop: '20px',
                                borderColor: 'rgb(0 0 0 / 45%)',
                              }}
                            />
                          </div>
                          <div className='mt-1'>
                            <InformationTattoo content={contentTattoo} />

                            <ActionsTattoos
                              content={contentTattoo}
                              user={user}
                              idContent={idContent}
                              setActionsState={setActionsState}
                              handleOnClickCloseModal={handleOnClickCloseModal}
                              style={{
                                marginTop: '15px',
                                marginBottom: '15px',
                              }}
                            />
                            <TabCommentsTattoos
                              idContent={idContent}
                              user={user}
                              handleOnClickCloseModal={handleOnClickCloseModal}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-1 p-0 m-0 d-flex align-items-center justify-content-center h-inherit'>
                      <BtnSliderTattoo
                        direction='right'
                        action={handleOnClickBack}
                      />
                    </div>
                  </div>

                  <ImageLightBox
                    images={images}
                    open={open}
                    setOpen={setOpen}
                    photoIndex={photoIndex}
                    setPhotoIndex={setPhotoIndex}
                  />
                </div>
                <div className='pt-50 container'>
                  <GridMansoryNotModalTattoo
                    idContent={idContentStatic}
                    setShownModal={setShownModal}
                    setActionsState={setActionsState}
                    setIdContentDynamic={setIdContentDynamic}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
