import React, { useEffect } from 'react';
import { HeaderUserTattoo } from './components/header-user-tattoo';
import { BurbleChats } from './components/burble-chats';
import { InputSendMessage } from './components/input-send-message';
import Router, { useRouter } from 'next/router';
import { useUser } from '../../hooks/use-user';

export const ChatArea = () => {
  const { user } = useUser();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    let active = true;

    if (id && user?.email && active) {
      if (!id.match(user?.email)) {
        const userNowChat = user?.email.substr(0, 10);
        const userChat = id.substr(0, 10);

        if (userNowChat !== userChat) Router.push('/');
      }
    }
    return () => {
      active = false;
    };
  }, [user?.email, id]);

  return (
    <div className='chat__area'>
      <HeaderUserTattoo />
      {id && user.email && (
        <>
          <BurbleChats colParam={id} user={user} />
          <InputSendMessage colParam={id} user={user} />
        </>
      )}
    </div>
  );
};
