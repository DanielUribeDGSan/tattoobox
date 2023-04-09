import React from "react";
import HomeIcon from "@mui/icons-material/Home";

export const Header = () => {
  return (
    <div className="tp-profile-header mt-4 p-3">
      <ul className="list-group">
        <li
          className="list-group-item d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#uploadTattooModal"
        >
          <HomeIcon sx={{ marginRight: "3px" }} /> Subir tatauje
        </li>
        <li className="list-group-item d-flex align-items-center">
          <HomeIcon sx={{ marginRight: "3px" }} /> A second item
        </li>
        <li className="list-group-item d-flex align-items-center">
          <HomeIcon sx={{ marginRight: "3px" }} /> A third item
        </li>
        <li className="list-group-item d-flex align-items-center">
          <HomeIcon sx={{ marginRight: "3px" }} /> A fourth item
        </li>
        <li className="list-group-item d-flex align-items-center">
          <HomeIcon sx={{ marginRight: "3px" }} /> And a fifth one
        </li>
      </ul>
    </div>
  );
};
