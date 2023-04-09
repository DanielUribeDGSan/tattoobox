import React from "react";
import { Actions } from "./actions";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Divider } from "@mui/material";
import { Comment } from "./comment";
import { Messages } from "./messages";
import { ModalCentered } from "../../modals/modalCentered";
import { FormUploadTattoo } from "../../forms/form-upload-tattoo";

export const Publication = () => {
  return (
    <div className="tp-profile-publication pt-3 pb-3 mt-4">
      <div className="row m-0">
        <div className="col-12 header-user">
          <div className="user-circle">
            <img src="https://www.cnet.com/a/img/resize/154ad36c2e7441e8178c3e9966fdb2d7ce65de63/hub/2019/04/15/228493c5-b10f-480f-b2e2-076e38bf0c3f/ep9-ff-000009.jpg?auto=webp&fit=crop&height=675&width=1200" />
            <p className="text-black fw-bold p-0 my-0 ">Daniel Uribe</p>
          </div>
          <MoreHorizIcon sx={{ color: "var(--tp-common-black)" }} />
        </div>
        <div>
          <Divider
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
              borderColor: "rgb(0 0 0 / 45%)",
            }}
          />
        </div>
        <div className="col-12">
          <div className="container-publication">
            <img
              className="img-publication mt-2"
              src="https://www.cnet.com/a/img/resize/154ad36c2e7441e8178c3e9966fdb2d7ce65de63/hub/2019/04/15/228493c5-b10f-480f-b2e2-076e38bf0c3f/ep9-ff-000009.jpg?auto=webp&fit=crop&height=675&width=1200"
            />
            <p className="txt-description p-0 my-0 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              nesciunt accusantium! Corrupti accusamus rerum sint magni quia
              ducimus dolorem fuga voluptates nesciunt nulla sit laboriosam,
              similique sequi magnam, pariatur harum?
            </p>
            <div className="header-count-actions mt-3">
              <span>
                <ThumbUpOffAltIcon
                  sx={{ color: "var(--tp-common-gray)", marginRight: "10px" }}
                />
                1,900
              </span>
              <span>2 Comentarios</span>
            </div>
            <div>
              <Divider
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  borderColor: "rgb(0 0 0 / 45%)",
                }}
              />
            </div>
            <Actions />
            <div>
              <Divider
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  borderColor: "rgb(0 0 0 / 45%)",
                }}
              />
            </div>
            <Messages />
            <Messages />
            <Comment />
          </div>
        </div>
      </div>
      <ModalCentered idModal={"uploadTattooModal"}>
        <FormUploadTattoo />
      </ModalCentered>
    </div>
  );
};
