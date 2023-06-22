import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'animate.css';
import { FormAreaAdvisor } from './forms/form-area-advisor';

const AdvisorArea = () => {
  const [image, setImage] = useState(1);
  const movilIpadaScreen = useMediaQuery('(max-width:900px)');

  const [high, setHigh] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const adjustHeight = () => {
        setHigh(window.innerHeight);
      };

      window.addEventListener('resize', adjustHeight);
      adjustHeight();

      return () => {
        window.removeEventListener('resize', adjustHeight);
      };
    }
  }, []);

  if (high === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <section
      className='advisor-area overflow-hidden'
      style={{ height: image === 6 ? '100%' : high }}
    >
      <div
        className='row p-0 m-0 w-100 overflow-hidden'
        style={{ height: image === 6 ? '100%' : high }}
      >
        <div
          className='col-xxl-4 col-xl-4 col-lg-4 col-12 col-forms'
          style={{
            overflowY: image === 6 ? 'auto' : 'hidden',
            backgroundImage: movilIpadaScreen
              ? `url('/assets/img/advisor/imagen-${image}.jpeg')`
              : `none`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            height: image === 6 ? '100%' : high,
          }}
        >
          <FormAreaAdvisor setImage={setImage} image={image} high={high} />
        </div>
        <div className='col-xxl-8 col-xl-8 col-lg-8 col-12 col-images'>
          <div className='image-container '>
            <img
              className='animate__animated animate__fadeInRightBig'
              src={`/assets/img/advisor/imagen-${image}.jpeg`}
              alt='tatoos'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorArea;
