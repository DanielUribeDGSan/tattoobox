import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export const UserCircleImage = ({ content, divider = true, style }) => {
  const { UrlImagen, Titulo, PerfilArtista } = content;

  return (
    <div style={{ ...style }}>
      <div className="w-100 d-flex align-items-center pt-2">
        <Stack direction="row" spacing={2}>
          <Avatar alt={Titulo} src={UrlImagen} />
        </Stack>
        <p
          className="text-black p-0 my-0"
          style={{
            marginLeft: "0.5rem",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {PerfilArtista?.NombrePerfil}
        </p>
      </div>
      {divider && (
        <div>
          <Divider
            sx={{ marginTop: "20px", borderColor: "rgb(0 0 0 / 45%)" }}
          />
        </div>
      )}
    </div>
  );
};
