import React, { useState } from 'react';
import Image from 'next/image';
import 'animate.css';
import { FormAreaAdvisor } from './forms/form-area-advisor';

const AdvisorArea = () => {
  const [image, setImage] = useState(1);
  return (
    <section className='advisor-area'>
      <div className='row p-0 m-0 w-100'>
        <div className='col-xxl-4 col-xl-4 col-lg-4 col-12 col-forms'>
          <FormAreaAdvisor setImage={setImage} image={image} />
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
