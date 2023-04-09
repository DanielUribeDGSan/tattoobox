import Link from "next/link";
import React from "react";
import { Tatuajes } from "./grid/tatuajes";
import { Header } from "./menu/header";
import { TabUser } from "./menu/tab-user";
import { BannerUser } from "./profile-content/banner-user";
import { Publication } from "./publication/publication";

const ProfileArea = () => {
  return (
    <>
      <div className="tp-profile-area">
        <div className="row gx-0 align-items-center tp-profile">
          <div className="col-12 p-0 m-0 col-profile-content d-flex justify-content-center">
            <div className="container-profile-content">
              <BannerUser />
              <TabUser />
            </div>
          </div>
          {/* <div className="col-xl-5 col-lg-5 col-12 p-0 m-0 col-profile-grid">
            <Tatuajes />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProfileArea;
