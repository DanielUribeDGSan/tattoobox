import React, { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { width } from "@mui/system";
import Link from "next/link";
import { useUser } from "../../../hooks/use-user";
import { ModalFullScreen } from "../../modals/modalFullScreen";
import { RegisterSupplementary } from "../../forms/register-supplementary";

const menuProfileData = [
  {
    icon: (
      <AccountBoxIcon
        sx={{ height: "30px", width: "30px", color: "var(--tp-common-black)" }}
      />
    ),
    title: "Favoritos",
    subTitle: "Ve tus tatuajes favoritos",
    path: "/",
    auth: false,
  },
  {
    icon: (
      <AccountBoxIcon
        sx={{ height: "30px", width: "30px", color: "var(--tp-common-black)" }}
      />
    ),
    title: "Ayuda",
    subTitle: "Estamos aquí para ayudarte",
    path: "/",
    auth: false,
  },
  {
    icon: (
      <AccountBoxIcon
        sx={{ height: "30px", width: "30px", color: "var(--tp-common-black)" }}
      />
    ),
    title: "Configuración",
    subTitle: "Configura tu cuenta",
    path: "/",
    auth: false,
  },
];

export const Profile = () => {
  const { user, artist, studie } = useUser();
  const btnClose = useRef();

  return (
    <div className="header-profile">
      <div className="row grid gx-3">
        <div className="col-12 d-flex align-items-center ">
          <Stack direction="row" spacing={2}>
            <Avatar
              alt={"tattoobox"}
              src={
                "https://static01.nyt.com/images/2019/05/20/universal/es/20Jordi01/merlin_155140527_a799647b-bdb3-487d-8db2-ef6a0dc351d3-videoSixteenByNineJumbo1600.jpg"
              }
            />
          </Stack>
          <p className="text-white p-0 my-0" style={{ marginLeft: "0.5rem" }}>
            {user?.email}
          </p>
        </div>
        <div>
          <Divider sx={{ margin: "10px 0px", borderColor: "#fff" }} />
        </div>
      </div>
      <div className="row ">
        {/* Completar registro */}
        {!user?.userName && (
          <div className=" col-xxl-6 col-xl-6 col-lg-6 col-12">
            <div
              className="content-item-profile"
              data-bs-toggle="modal"
              data-bs-target="#registerSupplementary"
            >
              <AccountBoxIcon
                sx={{
                  height: "30px",
                  width: "30px",
                  color: "var(--tp-common-black)",
                }}
              />
              <p className="p-0 m-0 d-inline-block">Completar registro</p>
            </div>
          </div>
        )}
        {/* end completar registro */}
        <div className=" col-xxl-6 col-xl-6 col-lg-6 col-12">
          <Link href="/perfil">
            <a>
              <div className="content-item-profile">
                <AccountBoxIcon
                  sx={{
                    height: "30px",
                    width: "30px",
                    color: "var(--tp-common-black)",
                  }}
                />
                <p className="p-0 m-0 d-inline-block">Ir a mi perfil</p>
              </div>
            </a>
          </Link>
        </div>
        {menuProfileData.map((item, i) => (
          <div className=" col-xxl-6 col-xl-6 col-lg-6 col-12" key={i}>
            <Link href={`${item.path}`}>
              <a>
                <div className="content-item-profile">
                  {item.icon}
                  <p className="p-0 m-0 d-inline-block">{item.title}</p>
                </div>
              </a>
            </Link>
          </div>
        ))}
        {/* unete como estudio */}
        {studie.length < 1 && (
          <div className=" col-xxl-6 col-xl-6 col-lg-6 col-12">
            <Link href="/registro-estudio">
              <a>
                <div className="content-item-profile">
                  <AccountBoxIcon
                    sx={{
                      height: "30px",
                      width: "30px",
                      color: "var(--tp-common-black)",
                    }}
                  />
                  <p className="p-0 m-0 d-inline-block">Únete como estudio</p>
                </div>
              </a>
            </Link>
          </div>
        )}

        {/* end unete como estudio */}

        {/* unete como artista */}
        {artist.length < 1 && (
          <div className=" col-xxl-6 col-xl-6 col-lg-6 col-12">
            <Link href="/registro-artista">
              <a>
                <div className="content-item-profile">
                  <AccountBoxIcon
                    sx={{
                      height: "30px",
                      width: "30px",
                      color: "var(--tp-common-black)",
                    }}
                  />
                  <p className="p-0 m-0 d-inline-block">Únete como artista</p>
                </div>
              </a>
            </Link>
          </div>
        )}
        {/* end unete como artista */}
      </div>
      {!user?.userName && (
        <ModalFullScreen modal_id={"registerSupplementary"} refBtn={btnClose}>
          <RegisterSupplementary refBtn={btnClose} />
        </ModalFullScreen>
      )}
    </div>
  );
};
