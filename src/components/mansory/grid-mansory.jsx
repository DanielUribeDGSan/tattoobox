import React, { useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { ModalTattoo } from "../modals/modalTattoo";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
import { ModalTattooMovil } from "../modals/modalTattooMovil";

export const GridMansory = ({ data }) => {
  const [idContent, setIdContent] = useState("");
  const matches = useMediaQuery("(max-width:800px)");
  const [tattoosIndex, setTattoosIndex] = useState([]);
  const [idContentAfter, setIdContentAfter] = useState("");
  const [idContentBefore, setIdContentBefore] = useState("");
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");

  const handleSowTatuaje = (idContent, index) => {
    console.log(index);
    const tattooAfter = tattoosIndex.find(
      (tattoo) => tattoo.index === index + 1
    );
    const tattooBefore = tattoosIndex.find(
      (tattoo) => tattoo.index === index - 1
    );

    setIdContentAfter(tattooAfter?.idContent);
    setIdContentBefore(tattooBefore?.idContent);
    setIdContent(idContent);
  };

  useEffect(() => {
    const tattoosAsignedIndex = data.map((element, index) => {
      return { index: index, idContent: `${element.IdContenido}` };
    });

    setTattoosIndex(tattoosAsignedIndex);
  }, [data]);

  return (
    <>
      <Box sx={{ width: "100%", minHeight: 400 }}>
        <Masonry columns={matches ? 2 : 4} spacing={2}>
          {data.map((item, index) => (
            <div key={index}>
              <img
                data-bs-toggle="modal"
                data-bs-target="#tatuajeModal"
                onClick={() => {
                  handleSowTatuaje(item.IdContenido, index);
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

      {movilIpadaScreen ? (
        <ModalTattooMovil
          modal_id="tatuajeModal"
          idContent={idContent}
          idContentAfter={idContentAfter}
          idContentBefore={idContentBefore}
        />
      ) : (
        <ModalTattoo
          modal_id="tatuajeModal"
          idContent={idContent}
          idContentAfter={idContentAfter}
          idContentBefore={idContentBefore}
        />
      )}
    </>
  );
};
