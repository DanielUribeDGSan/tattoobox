import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const BtnsActionsTattooFloat = () => {
  return (
    <div className="btns-floats">
      <button className="btn">
        <FavoriteBorderIcon sx={{ color: "#000" }} />
      </button>
      <button className="btn">
        <ShareIcon sx={{ color: "#000" }} />
      </button>
      <button className="btn">
        <MoreHorizIcon sx={{ color: "#000" }} />
      </button>
    </div>
  );
};
