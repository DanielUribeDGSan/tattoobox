import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export const Actions = () => {
  return (
    <div className="d-flex align-items-center  actions">
      <div className="icons">
        <ThumbUpOffAltIcon
          sx={{
            fontSize: "1.7rem",
            marginRight: "3px",
            color: "var(--tp-common-gray)",
          }}
        />
        <span className="txt-username ">Me gusta</span>
      </div>
      <div className="icons">
        <FavoriteBorderIcon
          sx={{
            fontSize: "1.7rem",
            marginRight: "3px",
            color: "var(--tp-common-gray)",
          }}
        />
        <span className="txt-username ">Comentar</span>
      </div>
      <div className="icons">
        <FavoriteBorderIcon
          sx={{
            fontSize: "1.7rem",
            marginRight: "3px",
            color: "var(--tp-common-gray)",
          }}
        />
        <span className="txt-username ">Compartir</span>
      </div>
    </div>
  );
};
