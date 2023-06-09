import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import useTattoboxTattoos from '../../../hooks/use-tattobox-tattoos';
import ErrorMsg from './error-msg';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { PopoverNotLogin } from '../popover/PopoverNotLogin';

export const FormCommentTatto = ({
  IdContenido,
  setNewMessages,
  user,
  handleOnClickCloseModal,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const { setCommentTattoo } = useTattoboxTattoos();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickSendComment = () => {
    if (!inputValue) return false;
    const body = {
      IdPerfil: user?.idPerfil,
      IdContenido: IdContenido,
      Comentario: inputValue,
      IdComentarioRespuesta: '',
    };
    setCommentTattoo(body, 1);
    setNewMessages(true);
    setInputValue('');
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Paper
        component='form'
        sx={{
          p: '2px 4px',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
          boxShadow: '0px 1px 3px 0px rgb(0 0 0 / 16%)',
          width: '100%',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Escribe tu comentario'
          inputProps={{ 'aria-label': 'Escribe tu comentario' }}
          onChange={handleChange}
          value={inputValue}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
        <IconButton
          sx={{ p: '10px', color: 'var(--tp-theme-2)' }}
          aria-label='directions'
          onClick={user?.email ? handleClickSendComment : handleClick}
        >
          <SendIcon />
        </IconButton>
      </Paper>
      <PopoverNotLogin
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleOnClickCloseModal={handleOnClickCloseModal}
      />
    </>
  );
};
