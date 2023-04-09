import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import SmsIcon from "@mui/icons-material/Sms";
import MoodIcon from "@mui/icons-material/Mood";

export const Comment = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 3px 10px 0 rgba(0,0,0,.09019607843137255)",
        marginTop: "20px",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SmsIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Comentar"
        inputProps={{ "aria-label": "Comentar" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="Comentar">
        <MoodIcon />
      </IconButton>
    </Paper>
  );
};
