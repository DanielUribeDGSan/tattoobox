import Link from "next/link";
import React, { useEffect } from "react";
import { TabUser } from "./menu/tab-user";
import { BannerUser } from "./profile-content/banner-user";
import { useUserProfile } from "../../hooks/use-profile";
import { useUser } from "../../hooks/use-user";

const ProfileArea = () => {
  const { isLoadingUser, user } = useUser();
  const { isLoading, getProfileInfoStudio, profileStudio } = useUserProfile();

  const getData = async () => {
    await getProfileInfoStudio(user?.idPerfil);
  };

  useEffect(() => {
    if (user?.email) {
      getData();
    }
  }, [isLoadingUser]);

  return (
    <>
      <div className="tp-profile-area">
        <div className="row gx-0 align-items-center tp-profile m-0 w-100">
          <div className="col-12 p-0 m-0 col-profile-content d-flex justify-content-center m-0 w-100">
            <div className="container-profile-content">
              {isLoading ? (
                <p className="text-black">Cargando...</p>
              ) : (
                <>
                  <BannerUser profileStudio={profileStudio} user={user} />
                  <TabUser data={profileStudio} />
                </>
              )}
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
