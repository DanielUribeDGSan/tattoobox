import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import ProfileStudio from '../../components/profile-studie';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Artista'} />
      <ProfileStudio />
    </Wrapper>
  );
};

export default index;
