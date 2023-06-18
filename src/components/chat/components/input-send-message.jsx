import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import ImageIcon from '@mui/icons-material/Image';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../../firebase/firebase';

async function enviarMensaje(sender, message) {
  const colSala = collection(db, 'col-sala');
  const docTattoo = doc(colSala, 'tattoobox');
  const colChat = collection(docTattoo, 'col-chat');

  const nuevoMensaje = {
    sender: sender,
    message: message,
    timestamp: serverTimestamp(),
  };

  try {
    const docRef = await addDoc(colChat, nuevoMensaje);
    console.log('Mensaje enviado correctamente. ID del documento:', docRef.id);
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#13212c',
    },
    secondary: {
      main: '#13212c',
    },
  },
});
export const InputSendMessage = () => {
  const [state, setState] = useState('');

  const handleOnChange = (event) => {
    setState(event.target.value);
  };

  const handleClick = async () => {
    setState('');
    await enviarMensaje('user', state);
  };

  return (
    <div className='input-message'>
      <ThemeProvider theme={theme}>
        <Paper
          component='form'
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            backgroundColor: ' var(--tp-common-gray-light)',
            boxShadow: 'none',
            borderRadius: '0.5rem',
          }}
        >
          <InputBase
            value={state}
            onChange={handleOnChange}
            sx={{
              ml: 1,
              flex: 1,
            }}
            placeholder='Escribe tu mensaje...'
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
          <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
            <ImageIcon />
          </IconButton>
          <IconButton
            onClick={handleClick}
            color='primary'
            sx={{ p: '10px' }}
            aria-label='send message'
          >
            <SendIcon />
          </IconButton>
        </Paper>
      </ThemeProvider>
    </div>
  );
};
