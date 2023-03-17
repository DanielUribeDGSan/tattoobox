import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const BtnsActionsTattooFloat = () => {
  return (
    <div className="btns-floats">
      <button className="btn">
        <IosShareIcon sx={{ color: "#000" }} />
      </button>
      <button className="btn">
        <MoreHorizIcon sx={{ color: "#000" }} />
      </button>
      <button className="btn">
        <FavoriteBorderIcon sx={{ color: "#000" }} />
      </button>
    </div>
  );
};
