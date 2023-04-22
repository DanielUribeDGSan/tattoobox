import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import { useUser } from "../../../hooks/use-user";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
  },
});

function SimpleDialog({ onClose, selectedValue, open, artist, studie }) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Selecciona tu perfil</DialogTitle>
        <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => handleListItemClick(artist[0]?.IdPerfil)}
              key={artist[0]?.UserName}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#bdbdbd", color: "#ffffff" }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={artist[0]?.UserName}
                secondary={artist[0]?.TipoPerfil}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => handleListItemClick(studie[0]?.IdPerfil)}
              key={studie[0]?.UserName}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#bdbdbd", color: "#ffffff" }}>
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
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(user?.idPerfil);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    console.log(value);
  };

  return (
    <>
      {artist.length > 0 && studie.length > 0 && (
        <>
          <button
            onClick={handleClickOpen}
            className="btn-md-black"
            aria-label="Cambiar de perfil"
          >
            Cambiar perfil
          </button>

          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
            artist={artist}
            studie={studie}
          />
        </>
      )}
    </>
  );
};
