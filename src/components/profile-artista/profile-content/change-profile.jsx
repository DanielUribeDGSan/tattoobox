import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { useUser } from '../../../hooks/use-user';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { update_id_profile } from '../../../redux/features/auth-slice';

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

function SimpleDialog({ onClose, selectedValue, open, user, artist, studie }) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (idProfile, idTypeProfile) => {
    onClose(idProfile, idTypeProfile);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        onClose={handleClose}
        open={open}
      >
        <DialogTitle>Selecciona tu perfil</DialogTitle>
        <List sx={{ pt: 0 }}>
          <ListItem
            disableGutters
            sx={{
              backgroundColor:
                user?.user?.idTipoPerfil <= 2 ? '#80808061' : 'transparent',
            }}
          >
            <ListItemButton
              onClick={() =>
                handleListItemClick(
                  artist[0]?.IdPerfil,
                  artist[0]?.IdTipoPerfil
                )
              }
              key={artist[0]?.UserName}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#bdbdbd', color: '#ffffff' }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={artist[0]?.UserName}
                secondary={artist[0]?.TipoPerfil}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disableGutters
            sx={{
              backgroundColor:
                user?.user?.idTipoPerfil >= 3 ? '#80808061' : 'transparent',
            }}
          >
            <ListItemButton
              onClick={() =>
                handleListItemClick(
                  studie[0]?.IdPerfil,
                  studie[0]?.IdTipoPerfil
                )
              }
              key={studie[0]?.UserName}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#bdbdbd', color: '#ffffff' }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={studie[0]?.UserName}
                secondary={studie[0]?.TipoPerfil}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </ThemeProvider>
  );
}

export const ChangeProfile = (user) => {
  const { artist, studie } = useUser();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    idPerfil: user?.idPerfil,
    idTypePerfil: user?.idTipoPerfil,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (idProfile, idTypeProfile) => {
    setOpen(false);
    setSelectedValue({ idPerfil: idProfile, idTypePerfil: idTypeProfile });
    if (idProfile && idTypeProfile) {
      dispatch(
        update_id_profile({
          idPerfil: idProfile,
          idTipoPerfil: idTypeProfile,
        })
      );
      toast.success(`Perfil actualizado`, {
        position: 'top-left',
      });
    }
  };

  return (
    <>
      {artist.length > 0 && studie.length > 0 && (
        <>
          <button
            onClick={handleClickOpen}
            className='btn-md-black'
            aria-label='Cambiar de perfil'
          >
            Cambiar perfil
          </button>

          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
            artist={artist}
            studie={studie}
            user={user}
          />
        </>
      )}
    </>
  );
};
