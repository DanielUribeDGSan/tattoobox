import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import Profile from '../../components/profile';
import ProfileArtist from '../../components/profile-artista';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Mi perfil'} />
      <ProfileArtist />
    </Wrapper>
  );
};

export default index;
