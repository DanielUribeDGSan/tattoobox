import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Image from 'mui-image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ModalTattoo } from '../modals/modalTattoo';
import { ModalTattooMovil } from '../modals/modalTattooMovil';

export const GridMansory = ({
  data,
  user = {},
  openModal,
  idContentRoute = '',
  showModal,
  setShowModal,
}) => {
  const router = useRouter();
  const btnModal = useRef(null);

  const [idContent, setIdContent] = useState('');
  const [idContentStatic, setidContentStatic] = useState('');
  const matches = useMediaQuery('(max-width:800px)');
  const movilIpadaScreen = useMediaQuery('(max-width:1000px)');

  const updateParameter = (idContent) => {
    const { pathname, query } = router;
    const parameterExists = query.hasOwnProperty('id');
    if (parameterExists) {
      query.id = idContent;
      router.replace({ pathname, query });
    }
  };

  const handleSowTatuaje = (idContent) => {
    setIdContent(idContent);
    setidContentStatic(idContent);

    if (router.pathname === '/tatuajes/[id]' || router.pathname === '/tatuajes')
      updateParameter(idContent);
    btnModal.current.click();
  };

  useEffect(() => {
    if (idContentRoute && openModal && !showModal) {
      setShowModal(true);
      handleSowTatuaje(idContentRoute);
    }
    return () => {};
  }, [showModal]);

  return (
    <>
      <button
        data-bs-toggle='modal'
        data-bs-target='#tatuajeModal'
        className='d-none'
        aria-label='mostrar modal de tatuajes'
        ref={btnModal}
      />
      <Box sx={{ width: '100%', minHeight: 400 }}>
        <Masonry
          columns={matches ? 2 : 4}
          spacing={2}
          sx={{
            marginRight: movilIpadaScreen && 0,
            marginLeft: movilIpadaScreen && 0,
          }}
        >
          {data.map((item, index) => {
            return item.UrlImagen ? (
              <div key={index}>
                <Image
                  onClick={() => {
                    handleSowTatuaje(item.IdContenido);
                  }}
                  duration={2000}
                  easing='ease-in'
                  showLoading={false}
                  distance='100px'
                  shiftDuration={900}
                  src={`${item.UrlImagen}?w=162&auto=format`}
                  alt={item?.Titulo}
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: 'block',
                    width: '100%',
                    borderRadius: matches ? 5 : 20,
                    boxShadow: '0 3px 10px 0 rgba(0, 0, 0, 0.16)',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                />
              </div>
            ) : (
              <></>
            );
          })}
        </Masonry>
      </Box>

      {movilIpadaScreen ? (
        <ModalTattooMovil
          modal_id='tatuajeModal'
          idContent={idContent}
          idContentStatic={idContentStatic}
          user={user}
        />
      ) : (
        <ModalTattoo
          modal_id='tatuajeModal'
          idContent={idContent}
          idContentStatic={idContentStatic}
          user={user}
        />
      )}
    </>
  );
};
