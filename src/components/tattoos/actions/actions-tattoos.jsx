import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

export const ActionsTattoos = ({ content, style }) => {
  return (
    <div className="actions-tatuaje" style={style}>
      <div className="row grid gx-3">
        <div className="col-xl-5 col-lg-5 col-md-5 col-5 d-flex align-items-center justify-content-start">
          <ThumbUpIcon sx={{ color: "var(--tp-common-black)" }} />{" "}
          <span className="likes text-black">1,511</span>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-7 col-7 d-flex align-items-center justify-content-end">
          <span className="precio text-black">
            <span className="fw-bold">$</span> 2,500 MXN
          </span>
        </div>
      </div>
    </div>
  );
};
