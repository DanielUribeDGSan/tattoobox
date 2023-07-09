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
import Swal from 'sweetalert2';

async function enviarMensaje(sender, message, colUserChat) {
  const colSala = collection(db, 'tattoobox');
  const docTattoo = doc(colSala, 'chats');
  const colChat = collection(docTattoo, colUserChat);

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
export const InputSendMessage = ({ colParam, user }) => {
  const [state, setState] = useState('');
  // const colUserChat = user?.email.substr(0, 10) + '__' + colParam;
  const sender = colParam.match(user?.email) ? 'advisor' : 'user';

  const handleOnChange = (event) => {
    setState(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault(); // Prevenir el envío automático del formulario
      handleClick(); // Llamar a la función handleClick
    }
  };

  const handleClick = async () => {
    if (!state) {
      Swal.fire({
        title: 'Mensaje vacío',
        text: 'Debes ingresar un mensaje',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
      });
      return false;
    }

    setState('');
    await enviarMensaje(sender, state, colParam);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el envío automático del formulario
    handleClick(); // Llamar a la función handleClick
  };

  return (
    <div className='input-message'>
      <ThemeProvider theme={theme}>
        <Paper
          component='form'
          onSubmit={handleSubmit} // Agregar el controlador de eventos para onSubmit
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
            onKeyDown={handleKeyDown}
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
            type='submit' // Cambiar el tipo de botón a "submit"
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
