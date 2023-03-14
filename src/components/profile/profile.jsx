import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export const Profile = ({ content }) => {
  console.log(content);
  const { UrlImagen, Titulo, Cuerpo } = content;
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Avatar alt={Titulo} src={UrlImagen} />{" "}
        <span className="text-black">{Cuerpo}</span>
      </Stack>
    </div>
  );
};
