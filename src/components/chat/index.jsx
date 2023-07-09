import React, { useEffect, useState } from 'react';
import { Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import { ChatArea } from './chat-area';

const Chat = () => {
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
