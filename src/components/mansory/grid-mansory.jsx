import React, { useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { ModalTatuaje } from "../modals/modalTatuaje";
import useMediaQuery from "@mui/material/useMediaQuery";

export const GridMansory = ({ data }) => {
  const [urlImage, setUrlImage] = useState("");
  const [idContenido, setIdContenido] = useState("");
  const matches = useMediaQuery("(max-width:800px)");

  const handleSowTatuaje = (idContenido, img) => {
    setIdContenido(idContenido);
    setUrlImage(img);
  };

  return (
    <>
      <Box sx={{ width: "100%", minHeight: 400 }}>
        <Masonry columns={matches ? 3 : 4} spacing={2}>
          {data.map((item, index) => (
            <div key={index}>
              <img
                data-bs-toggle="modal"
                data-bs-target="#tatuajeModal"
                onClick={() => {
                  handleSowTatuaje(item.IdContenido, item.UrlImagen);
                }}
                src={`${item.UrlImagen}?w=162&auto=format`}
                srcSet={`${item.UrlImagen}?w=162&auto=format&dpr=2 2x`}
                alt={item?.Titulo}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: matches ? 5 : 20,
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
      <ModalTatuaje modal_id="tatuajeModal" idContenido={idContenido} />
    </>
  );
};
