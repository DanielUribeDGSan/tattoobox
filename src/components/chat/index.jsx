import React, { useEffect, useState } from 'react';
import { Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import { HeaderBottomMovil } from '../../layout/headers/header-bottom-movil';
import Sidebar from '../common/off-canvas';
import { ChatArea } from './chat-area';

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      {/* <Breadcrumb title={"Registro"} /> */}
      <ChatArea />
    </Wrapper>
  );
};

export default Chat;
