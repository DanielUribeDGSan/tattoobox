import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Skeleton from '@mui/material/Skeleton';

export const ModalTattooSkeleton = () => {
  const movilIpadaScreen = useMediaQuery('(max-width:1000px)');

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xxl-8 col-xl-8 col-lg-8 m-0 py-0'>
          <Skeleton
            variant='rectangular'
            width='100%'
            height={movilIpadaScreen ? '40vh' : '50vh'}
            sx={{
              borderRadius: movilIpadaScreen ? '10px' : '20px 0px 0px 20px',
              marginBottom: movilIpadaScreen ? '20px' : '0px',
            }}
          />
        </div>
        <div className='col-xxl-4 col-xl-4 col-lg-4 m-0 p-0'>
          <Skeleton
            variant='rectangular'
            width='100%'
            height={movilIpadaScreen ? '30vh' : '50vh'}
            sx={{
              borderRadius: movilIpadaScreen ? '10px' : '0px 20px 20px 0px',
            }}
          />
        </div>
      </div>
      {!movilIpadaScreen && (
        <div className='row mt-20'>
          <div className='col-xxl-3 col-xl-3 col-lg-3'>
            <Skeleton
              variant='rectangular'
              width='100%'
              height='30vh'
              sx={{ borderRadius: '20px' }}
            />
          </div>
          <div className='col-xxl-3 col-xl-3 col-lg-3'>
            <Skeleton
              variant='rectangular'
              width='100%'
              height='30vh'
              sx={{ borderRadius: '20px' }}
            />
          </div>
          <div className='col-xxl-3 col-xl-3 col-lg-3'>
            <Skeleton
              variant='rectangular'
              width='100%'
              height='30vh'
              sx={{ borderRadius: '20px' }}
            />
          </div>
          <div className='col-xxl-3 col-xl-3 col-lg-3'>
            <Skeleton
              variant='rectangular'
              width='100%'
              height='30vh'
              sx={{ borderRadius: '20px' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
