import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import Profile from '../../components/profile';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Mi perfil'} />
      <Profile />
    </Wrapper>
  );
};

export default index;
