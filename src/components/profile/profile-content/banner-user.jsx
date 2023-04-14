import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChangeProfile } from "./change-profile";
import EditIcon from "@mui/icons-material/Edit";

export const BannerUser = () => {
  return (
    <div className="tp-profile-user-content pb-3">
      <div
        className="banner-profile position-relative"
        style={{
          backgroundImage: `url('https://i0.wp.com/www.alittlebithuman.com/wp-content/uploads/2022/03/Rey-Skywalker.jpg?resize=1000%2C563&ssl=1')`,
        }}
      />
      <div className="content-user">
        <div className="container-user-banner">
          <div className="img-content-user">
            <button className="edit-image" aria-label="editar imagen de perfil">
              <EditIcon sx={{ color: "var(--tp-common-black)" }} />
            </button>
            <img
              src={
                "https://www.cnet.com/a/img/resize/154ad36c2e7441e8178c3e9966fdb2d7ce65de63/hub/2019/04/15/228493c5-b10f-480f-b2e2-076e38bf0c3f/ep9-ff-000009.jpg?auto=webp&fit=crop&height=675&width=1200"
              }
            />
          </div>
          <div className="user-data-banner">
            <p className="text-black fw-bold m-0 p-0 txt-user">
              Daniel Uribe García
            </p>
            <p className="mb-0 p-0 txt-username mt-1">@DanielUribe</p>
            <div className="d-flex mt-1">
              <p
                className="mb-0 p-0 txt-description "
                style={{ marginRight: "12px" }}
              >
                <span className="text-black fw-bold mr-5">1000</span> Seguidores
              </p>
              <p className="mb-0 p-0 txt-description">
                <span className="text-black fw-bold mr-5">1000</span> Seguidores
              </p>
            </div>
          </div>
        </div>
        <div className="user-buttons">
          <button
            className="btn-md-black "
            style={{ marginRight: "20px" }}
            aria-label="Editar perfil"
          >
            Editar perfil
          </button>

          <ChangeProfile />
        </div>
      </div>
    </div>
  );
};
