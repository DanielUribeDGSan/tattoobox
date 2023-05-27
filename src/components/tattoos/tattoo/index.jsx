import React, { useEffect } from 'react';
import { Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BreadcrumbSmall from '../../common/breadcrumb/breadcrumbSmal';
import TattoItems from './tattoo-items';

const TattooMain = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <BreadcrumbSmall title={''} />
      <TattoItems />
      {/* <FooterThree /> */}
    </Wrapper>
  );
};

export default TattooMain;
