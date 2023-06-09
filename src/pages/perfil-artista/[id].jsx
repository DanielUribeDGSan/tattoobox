import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import ProfileArtist from '../../components/profile-artista';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Artista'} />
      <ProfileArtist />
    </Wrapper>
  );
};

export default index;
