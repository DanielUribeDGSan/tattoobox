import React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Image from "mui-image";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import { GridMansory } from "../../utils/mansory/grid-mansory";

export const Tatuajes = ({ tattoosData, user }) => {
  const matches = useMediaQuery("(max-width:800px)");
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");

  return (
    <div className="mt-4 tp-profile-grid">
      {tattoosData ? (
        <>
          {/* <div className="d-flex align-items-center justify-content-center filter mb-4">
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
          </div> */}
          <GridMansory data={tattoosData} user={user} />
        </>
      ) : (
        <p className="text-black">No hay información...</p>
      )}
    </div>
  );
};
