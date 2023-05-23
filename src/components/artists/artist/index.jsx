import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BreadcrumbSmall from '../../common/breadcrumb/breadcrumbSmal';
import ArtistItems from './artist-items';

const ArtistMain = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper classPage='page-artist'>
      <Header />
      <BreadcrumbSmall title={''} />
      <ArtistItems />
      {/* <FooterThree /> */}
    </Wrapper>
  );
};

export default ArtistMain;
