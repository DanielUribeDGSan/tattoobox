import React, { useEffect } from 'react';
import { Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import AdvisorArea from './advisor-area';

const Advisor = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <AdvisorArea />
    </Wrapper>
  );
};

export default Advisor;
