import React, { useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Image from "mui-image";
import useMediaQuery from "@mui/material/useMediaQuery";

export const GridMansoryNotModalTattoo = ({ data }) => {
  const [idContent, setIdContent] = useState("");
  const matches = useMediaQuery("(max-width:800px)");
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");

  const handleSowTatuaje = (idContent) => {
    // setIdContent(idContent);
    console.log("click");
  };

  return (
    <>
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
                  handleSowTatuaje(item.IdContenid);
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
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </>
  );
};
