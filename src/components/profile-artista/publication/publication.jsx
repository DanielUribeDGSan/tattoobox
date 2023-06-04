import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ListUserCircle } from "../../utils/list/list-user-circle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export const Publication = ({ tattooInfo, usuario }) => {
  return (
    <div className="tp-profile-publication pt-3 pb-3 mt-4">
      <button className="options" aria-label="opciones de publicacion">
        <MoreHorizIcon sx={{ color: "var(--tp-common-black)" }} />
      </button>
      <div className="row m-0">
        <div className="col-12 header-user">
          <ListUserCircle name={usuario} userName={usuario} urlImgae={""} />
        </div>
        {/* <div>
          <Divider
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
              borderColor: "rgb(0 0 0 / 45%)",
            }}
          />
        </div> */}
        <div className="col-12 mt-2">
          <div className="container-publication">
            <img className="img-publication mt-2" src={tattooInfo?.UrlImagen} />
            <div className="container-info">
              <p className="txt-title p-0 my-0 mt-3">
                {tattooInfo?.Titulo} {tattooInfo?.Cuerpo} -{" "}
                {tattooInfo?.EstiloTatuaje}
              </p>
              <p className="txt-description p-0 my-0 mt-2">
                {tattooInfo?.RangoPrecio}
              </p>
              <div className="row header-count-actions pt-30">
                <div className="col-8 col-action">
                  <span>
                    <Stack direction="row" spacing={0}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{
                          width: 30,
                          height: 30,
                        }}
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                        sx={{
                          width: 30,
                          height: 30,
                          marginLeft: "-5px",
                          marginRight: "5px",
                        }}
                      />
                      <span
                        className="text-black"
                        style={{ fontSize: "0.8rem", padding: 0 }}
                      >
                        5 comentarios
                      </span>
                    </Stack>
                  </span>
                </div>
                <div className="col-4 col-action">
                  <span>
                    <FavoriteBorderIcon
                      sx={{
                        color: "var(--tp-common-black)",
                        marginRight: "10px",
                      }}
                    />
                    <span
                      className="text-black"
                      style={{ fontSize: "0.9rem", padding: 0 }}
                    >
                      1,900
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* <Actions /> */}
            {/* <div>
              <Divider
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  borderColor: "rgb(0 0 0 / 45%)",
                }}
              />
            </div> */}
            {/* <Messages />
            <Messages />
            <Comment /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
