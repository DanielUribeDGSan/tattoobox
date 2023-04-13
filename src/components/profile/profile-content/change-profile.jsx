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

function SimpleDialog({ onClose, selectedValue, open, artist, studie }) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Selecciona tu perfil</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem disableGutters>
          <ListItemButton
            onClick={() => handleListItemClick(artist[0]?.IdPerfil)}
            key={artist[0]?.UserName}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
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
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
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
  );
}

export const ChangeProfile = () => {
  const { artist, studie, isLoading, user } = useUser();
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

  if (isLoading) return <p className="text-black">Cargando...</p>;

  return (
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
  );
};
