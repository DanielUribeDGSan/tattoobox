import React from 'react';
import { HeaderUserTattoo } from './components/header-user-tattoo';
import { BurbleChats } from './components/burble-chats';
import { InputSendMessage } from './components/input-send-message';

export const ChatArea = () => {
  return (
    <div className='chat__area'>
      <HeaderUserTattoo />
      <BurbleChats />
      <InputSendMessage />
    </div>
  );
};
