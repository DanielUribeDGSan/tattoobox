import React from 'react';

const Wrapper = ({ children, classPage = '' }) => {
  return <div className={classPage}>{children}</div>;
};

export default Wrapper;
