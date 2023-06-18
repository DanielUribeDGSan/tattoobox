import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';

import Chat from '../../components/chat';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Chat'} />
      <Chat />
    </Wrapper>
  );
};

export default index;
