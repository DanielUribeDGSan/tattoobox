import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const ActionsTattoos = ({ content, style }) => {
  console.log(content);
  return (
    <div className="actions-tatuaje" style={style}>
      <div className="row grid gx-3">
        <div className="col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-start">
          <span className="precio text-black">
            <span className="fw-bold">$</span> {content?.RangoPrecio} MXN
          </span>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center actions-icons">
          <div>
            <ThumbUpOffAltIcon sx={{ color: "var(--tp-common-black)" }} />
            <span className="likes text-black">1,511</span>
          </div>
          <ShareIcon sx={{ color: "var(--tp-common-black)" }} />
          <BookmarkBorderIcon sx={{ color: "var(--tp-common-black)" }} />
        </div>
      </div>
    </div>
  );
};
