import React, { useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { ModalTatuaje } from "../modals/modalTatuaje";

export const GridMansory = ({ data }) => {
  const [urlImage, setUrlImage] = useState("");
  const [idTatuaje, setIdTatuaje] = useState("");

  const handleSowTatuaje = (idTatuaje, img) => {
    setIdTatuaje(idTatuaje);
    setUrlImage(img);
  };
  return (
    <>
      <Box sx={{ width: "100%", minHeight: 400 }}>
        <Masonry columns={4} spacing={2}>
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
                  borderRadius: 20,
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
      <ModalTatuaje modal_id="tatuajeModal" url_img={urlImage} />
    </>
  );
};
