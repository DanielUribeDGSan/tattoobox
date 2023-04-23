import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Image from "mui-image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ModalTattoo } from "../modals/modalTattoo";
import { ModalTattooMovil } from "../modals/modalTattooMovil";

export const GridMansory = ({ data, user = {} }) => {
  const btnModal = useRef(null);
  const [idContent, setIdContent] = useState("");
  const matches = useMediaQuery("(max-width:800px)");
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");

  const handleSowTatuaje = (idContent) => {
    btnModal.current.click();
    setIdContent(idContent);
  };

  return (
    <>
      <button
        data-bs-toggle="modal"
        data-bs-target="#tatuajeModal"
        className="d-none"
        aria-label="mostrar modal de tatuajes"
        ref={btnModal}
      />
      <Box sx={{ width: "100%", minHeight: 400 }}>
        <Masonry
          columns={matches ? 2 : 4}
          spacing={2}
          sx={{
            marginRight: movilIpadaScreen && 0,
            marginLeft: movilIpadaScreen && 0,
          }}
        >
          {data.map((item, index) => (
            <div key={index}>
              <Image
                onClick={() => {
                  handleSowTatuaje(item.IdContenido);
                }}
                duration={2000}
                easing="ease-in"
                showLoading={false}
                distance="100px"
                shiftDuration={900}
                src={`${item.UrlImagen}?w=162&auto=format`}
                alt={item?.Titulo}
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: matches ? 5 : 20,
                  boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.16)",
                  cursor: "pointer",
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
          user={user}
          setIdContent={setIdContent}
        />
      ) : (
        <ModalTattoo
          modal_id="tatuajeModal"
          idContent={idContent}
          user={user}
          setIdContent={setIdContent}
        />
      )}
    </>
  );
};
