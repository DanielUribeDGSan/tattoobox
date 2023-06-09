import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Image from 'mui-image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CardStudieGrid } from '../../studies/components/CardStudieGrid';

export const GridMansoryStudie = ({ data, user = {}, idContentRoute = '' }) => {
  const btnModal = useRef(null);

  const matches = useMediaQuery('(max-width:800px)');
  const movilIpadaScreen = useMediaQuery('(max-width:1000px)');

  // const handleSowTatuaje = (idContent) => {
  //   setIdContent(idContent);
  //   setidContentStatic(idContent);
  //   btnModal.current.click();
  // };
  console.log(data);

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
          columns={matches ? 1 : 2}
          spacing={2}
          sx={{
            marginRight: movilIpadaScreen && 0,
            marginLeft: movilIpadaScreen && 0,
          }}
        >
          {data.map((item, index) => {
            return item?.Tatuajes.length > 0 ? (
              <div key={index}>
                <CardStudieGrid
                  tatoos={item?.Tatuajes}
                  name={item?.NombrePerfil}
                  avatar={item?.Avatar}
                  state={item?.Estado}
                  profile={item?.IdPerfil}
                />

                {/* <Image
                onClick={() => {
                  //   handleSowTatuaje(item.IdContenido);
                }}
                duration={2000}
                easing='ease-in'
                showLoading={false}
                distance='100px'
                shiftDuration={900}
                src={`${item?.Avatar}?w=162&auto=format`}
                alt={item?.Titulo}
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: 'block',
                  width: '100%',
                  borderRadius: matches ? 5 : 20,
                  boxShadow: '0 3px 10px 0 rgba(0, 0, 0, 0.16)',
                  cursor: 'pointer',
                }}
              /> */}
              </div>
            ) : null;
          })}
        </Masonry>
      </Box>

      {/* {movilIpadaScreen ? (
        <ModalTattooMovil
          modal_id="tatuajeModal"
          idContent={idContent}
          idContentStatic={idContentStatic}
          user={user}
        />
      ) : (
        <ModalTattoo
          modal_id="tatuajeModal"
          idContent={idContent}
          idContentStatic={idContentStatic}
          user={user}
        />
      )} */}
    </>
  );
};
