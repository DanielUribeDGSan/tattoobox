import React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Image from "mui-image";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

export const Tatuajes = () => {
  const matches = useMediaQuery("(max-width:800px)");
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");

  return (
    <div className="mt-4 tp-profile-grid">
      <div className="d-flex align-items-center justify-content-center filter">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0 3px 10px 0 rgba(0,0,0,.09019607843137255)",
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar tatuaje"
            inputProps={{ "aria-label": "buscar tatuaje" }}
          />
        </Paper>
      </div>
      <div className="grid">
        <Box sx={{ width: "100%", minHeight: 400 }}>
          <Masonry columns={matches ? 2 : 4} spacing={1}>
            <div>
              <img
                duration={2000}
                easing="ease-in"
                showLoading={false}
                distance="100px"
                shiftDuration={900}
                bgColor="var(--tp-common-white)"
                src={`https://www.clara.es/medio/2022/09/02/tatuaje-pequeno-mujer-sol-luna-ojo_a92ad9aa_1280x853.jpg`}
                alt="tato"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: matches ? 5 : 8,
                }}
              />
            </div>
            <div>
              <img
                duration={2000}
                easing="ease-in"
                showLoading={false}
                distance="100px"
                shiftDuration={900}
                bgColor="var(--tp-common-white)"
                src={`https://imagenes.elpais.com/resizer/2baRfJgTzfm4MxuQhlXweZR_Ah4=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/X3HAYCRRHWF3AKMZGAXORMSSPU.jpg`}
                alt="tato"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: matches ? 5 : 8,
                }}
              />
            </div>
            <div>
              <img
                duration={2000}
                easing="ease-in"
                showLoading={false}
                distance="100px"
                shiftDuration={900}
                bgColor="var(--tp-common-white)"
                src={`https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2022/07/two-wrists-matching-envelope-tattoos-together-2771291.jpg?tf=3840x`}
                alt="tato"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: matches ? 5 : 8,
                }}
              />
            </div>

            <div>
              <img
                duration={2000}
                easing="ease-in"
                showLoading={false}
                distance="100px"
                shiftDuration={900}
                bgColor="var(--tp-common-white)"
                src={`https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/EKRLBLGR3BEYZG2IU3LRXZU3QY.jpg`}
                alt="tato"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: matches ? 5 : 8,
                }}
              />
            </div>
            <div>
              <img
                duration={2000}
                easing="ease-in"
                showLoading={false}
                distance="100px"
                shiftDuration={900}
                bgColor="var(--tp-common-white)"
                src={`https://www.clara.es/medio/2022/09/02/tatuaje-pequeno-mujer-sol-luna-ojo_a92ad9aa_1280x853.jpg`}
                alt="tato"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: matches ? 5 : 8,
                }}
              />
            </div>
            <div>
              <img
                duration={2000}
                easing="ease-in"
                showLoading={false}
                distance="100px"
                shiftDuration={900}
                bgColor="var(--tp-common-white)"
                src={`https://www.diariodesevilla.es/2021/10/27/delibros/mujer-muestra-tatuajes_1623748665_146215408_667x375.jpg`}
                alt="tato"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: matches ? 5 : 8,
                }}
              />
            </div>
            <div>
              <img
                duration={2000}
                easing="ease-in"
                showLoading={false}
                distance="100px"
                shiftDuration={900}
                bgColor="var(--tp-common-white)"
                src={`https://imagenes.elpais.com/resizer/2baRfJgTzfm4MxuQhlXweZR_Ah4=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/X3HAYCRRHWF3AKMZGAXORMSSPU.jpg`}
                alt="tato"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: matches ? 5 : 8,
                }}
              />
            </div>
            <div>
              <img
                duration={2000}
                easing="ease-in"
                showLoading={false}
                distance="100px"
                shiftDuration={900}
                bgColor="var(--tp-common-white)"
                src={`https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2022/07/two-wrists-matching-envelope-tattoos-together-2771291.jpg?tf=3840x`}
                alt="tato"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: matches ? 5 : 8,
                }}
              />
            </div>
            <div>
              <img
                duration={2000}
                easing="ease-in"
                showLoading={false}
                distance="100px"
                shiftDuration={900}
                bgColor="var(--tp-common-white)"
                src={`https://www.clara.es/medio/2022/09/02/tatuaje-pequeno-mujer-sol-luna-ojo_a92ad9aa_1280x853.jpg`}
                alt="tato"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: matches ? 5 : 8,
                }}
              />
            </div>
            <div>
              <img
                duration={2000}
                easing="ease-in"
                showLoading={false}
                distance="100px"
                shiftDuration={900}
                bgColor="var(--tp-common-white)"
                src={`https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/EKRLBLGR3BEYZG2IU3LRXZU3QY.jpg`}
                alt="tato"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: matches ? 5 : 8,
                }}
              />
            </div>
          </Masonry>
        </Box>
      </div>
    </div>
  );
};
