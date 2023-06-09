import React, { useEffect } from 'react';
import { Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BreadcrumbSmall from '../../common/breadcrumb/breadcrumbSmal';
import StudiesItems from './studie-items';

const StudiesMain = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper classPage='page-studie'>
      <Header />
      <BreadcrumbSmall title={''} />
      <StudiesItems />
    </Wrapper>
  );
};

export default StudiesMain;
