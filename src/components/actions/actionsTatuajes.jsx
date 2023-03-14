import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

export const ActionsTatuajes = ({ contenido }) => {
  return (
    <div className="actions-tatuaje">
      <div className="row grid gx-3">
        <div className="col-xl-3 col-lg-3 col-md-3 col-3 d-flex align-items-center justify-content-center">
          <ThumbUpIcon /> <span className="likes">1,511</span>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-center">
          <p className="m-0 p-0 d-inline-flex">
            <strong>Precio:</strong>
          </p>
          <span className="precio-icon">
            <AllInclusiveIcon sx={{ color: "#dd4846", fontSize: "1.8rem" }} />
          </span>
          <span className="precio">$ 2,500 MXN</span>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-3 d-flex align-items-center justify-content-center">
          <FavoriteBorderIcon sx={{ marginRight: "0.5rem" }} /> <ShareIcon />
        </div>
      </div>
    </div>
  );
};
