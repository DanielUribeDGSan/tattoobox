import React from "react";
import { ChangeProfile } from "./change-profile";
import { ChangeProfileImage } from "./change-profile-image";
import { ProfileActions } from "../menu/profile-actions";

export const BannerUser = ({ dataProfile, user }) => {
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
            <ChangeProfileImage user={user} />
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
        <div className="user-buttons row">
          <div className="col-auto">
            <button className="btn-md-black " aria-label="Editar perfil">
              Agendar
            </button>
          </div>
          <div className="col-auto">
            <ProfileActions />
          </div>

          <ChangeProfile user={user} />
        </div>
      </div>
    </div>
  );
};
