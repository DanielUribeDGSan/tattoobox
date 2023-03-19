import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { getUser } from "../../../utils/getUser";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { width } from "@mui/system";
import Link from "next/link";

const menuProfileData = [
  {
    icon: <AccountBoxIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Favoritos",
    subTitle: "Ve tus tatuajes favoritos",
    path: "/",
  },
  {
    icon: <AccountBoxIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Ayuda",
    subTitle: "Estamos aquí para ayudarte",
    path: "/",
  },
  {
    icon: <AccountBoxIcon sx={{ height: "30px", width: "30px" }} />,
    title: "Configuración",
    subTitle: "Configura tu cuenta",
    path: "/",
  },
];

export const Profile = () => {
  const user = getUser();

  return (
    <div>
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
        <div className="col-12  ">
          {/* Completar registro */}
          <div>
            <Link href="/">
              <a>
                <div className="row w-100 mb-3">
                  <div className="col-2">
                    <AccountBoxIcon
                      sx={{
                        height: "30px",
                        width: "30px",
                        color: "var(--tp-theme-1)",
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <p
                      className="p-0 m-0"
                      style={{ color: "var(--tp-theme-1)" }}
                    >
                      Completar registro
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          {/* end completar registro */}

          {/* unete como estudio */}
          <div>
            <Link href="/">
              <a>
                <div className="row w-100 mb-3">
                  <div className="col-2 d-flex align-items-center">
                    <AccountBoxIcon
                      sx={{
                        height: "30px",
                        width: "30px",
                        color: "#fff",
                      }}
                    />
                  </div>
                  <div className="col-10 d-flex align-items-center">
                    <p className="p-0 m-0">Únete como estudio</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          {/* end unete como estudio */}

          {/* unete como artista */}
          <div>
            <Link href="/">
              <a>
                <div className="row w-100 mb-3">
                  <div className="col-2 d-flex align-items-center">
                    <AccountBoxIcon
                      sx={{
                        height: "30px",
                        width: "30px",
                        color: "#fff",
                      }}
                    />
                  </div>
                  <div className="col-10 d-flex align-items-center">
                    <p className="p-0 m-0">Únete como artista</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          {/* end unete como artista */}

          {menuProfileData.map((item, i) => (
            <div key={i}>
              <Link href={`${item.path}`}>
                <a>
                  <div className="row w-100 mb-3">
                    <div className="col-2 d-flex align-items-center">
                      {item.icon}
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      <p className="text-white p-0 m-0">{item.title}</p>
                      {/* <span
                        className="text-white "
                        style={{
                          textTransform: "none",
                          fontSize: "0.8rem",
                          marginBottom: "0px",
                        }}
                      >
                        
                      </span> */}
                    </div>
                  </div>
                </a>
              </Link>
              {/* <div>
                <Divider sx={{ margin: "10px 0px", borderColor: "#fff" }} />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
