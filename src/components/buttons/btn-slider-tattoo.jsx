import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const BtnSliderTattoo = ({ direction, action }) => {
  return (
    <>
      <button className="btn-back-tattoo" onClick={action}>
        {direction === "right" ? (
          <KeyboardArrowRightIcon sx={{ color: "#000" }} />
        ) : (
          <KeyboardArrowLeftIcon sx={{ color: "#000" }} />
        )}
      </button>
    </>
  );
};
