import React, { useEffect, useState } from 'react';
import { Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import ProfileArea from './profile-area';
import { HeaderBottomMovil } from '../../layout/headers/header-bottom-movil';
import Sidebar from '../common/off-canvas';

const ProfileStudio = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      {/* <Breadcrumb title={"Registro"} /> */}
      <ProfileArea />
      <HeaderBottomMovil setSidebarOpen={setSidebarOpen} />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </Wrapper>
  );
};

export default ProfileStudio;
