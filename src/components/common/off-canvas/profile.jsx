import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { width } from "@mui/system";
import Link from "next/link";
import { useUser } from "../../../hooks/use-user";

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
  },
];

export const Profile = () => {
  const { user } = useUser();

  return (
    <div className="header-profile">
      <div className="row grid gx-3">
        <div className="col-12 d-flex align-items-center ">
          <Stack direction="row" spacing={2}>
            <Avatar
              alt={"tattoobox"}
              src={
                "https://www.denofgeek.com/wp-content/uploads/2016/02/star-wars-rey.jpeg"
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
        <div className=" col-xxl-6 col-xl-6 col-lg-6 col-12">
          <div className="content-item-profile">
            <Link href="/">
              <a>
                <AccountBoxIcon
                  sx={{
                    height: "30px",
                    width: "30px",
                    color: "var(--tp-common-black)",
                  }}
                />
                <p className="p-0 m-0 d-inline-block">Completar registro</p>
              </a>
            </Link>
          </div>
        </div>
        {/* end completar registro */}

        {/* unete como estudio */}
        <div className=" col-xxl-6 col-xl-6 col-lg-6 col-12">
          <div className="content-item-profile">
            <Link href="/">
              <a>
                <AccountBoxIcon
                  sx={{
                    height: "30px",
                    width: "30px",
                    color: "var(--tp-common-black)",
                  }}
                />
                <p className="p-0 m-0 d-inline-block">Únete como estudio</p>
              </a>
            </Link>
          </div>
        </div>
        {/* end unete como estudio */}

        {/* unete como artista */}
        <div className=" col-xxl-6 col-xl-6 col-lg-6 col-12">
          <div className="content-item-profile">
            <Link href="/">
              <a>
                <AccountBoxIcon
                  sx={{
                    height: "30px",
                    width: "30px",
                    color: "var(--tp-common-black)",
                  }}
                />
                <p className="p-0 m-0 d-inline-block">Únete como artista</p>
              </a>
            </Link>
          </div>
        </div>
        {/* end unete como artista */}

        {menuProfileData.map((item, i) => (
          <div className=" col-xxl-6 col-xl-6 col-lg-6 col-12" key={i}>
            <div className="content-item-profile">
              <Link href={`${item.path}`}>
                <a>
                  {item.icon}
                  <p className="p-0 m-0 d-inline-block">{item.title}</p>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
