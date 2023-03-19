import React, { useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Image from "mui-image";
import { ModalTattoo } from "../modals/modalTattoo";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ModalTattooMovil } from "../modals/modalTattooMovil";

export const GridMansory = ({ data }) => {
  const [idContent, setIdContent] = useState("");
  const matches = useMediaQuery("(max-width:800px)");
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");

  const handleSowTatuaje = (idContent, index) => {
    setIdContent(idContent);
  };

  return (
    <>
      <Box sx={{ width: "100%", minHeight: 400 }}>
        <Masonry columns={matches ? 2 : 4} spacing={2}>
          {data.map((item, index) => (
            <div key={index}>
              <Image
                data-bs-toggle="modal"
                data-bs-target="#tatuajeModal"
                onClick={() => {
                  handleSowTatuaje(item.IdContenido, index);
                }}
                duration={2000}
                easing="ease-in"
                showLoading={false}
                distance="100px"
                shiftDuration={900}
                bgColor="var(--tp-theme-2)"
                src={`${item.UrlImagen}?w=162&auto=format`}
                alt={item?.Titulo}
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

      {movilIpadaScreen ? (
        <ModalTattooMovil modal_id="tatuajeModal" idContent={idContent} />
      ) : (
        <ModalTattoo modal_id="tatuajeModal" idContent={idContent} />
      )}
    </>
  );
};
