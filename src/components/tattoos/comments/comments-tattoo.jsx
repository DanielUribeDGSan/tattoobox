import React from "react";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FormCommentTatto } from "../../forms/form-comment-tatto";

export const CommentsTattoo = ({ content, setNewMessages }) => {
  const { UrlImagen, Titulo, Comentarios, IdContenido } = content;
  return (
    <div>
      <div className="row grid gx-3 comments">
        <div className="col-12 mt-3 ">
          <h2 className="text-black title">
            Comentarios ({Comentarios?.length})
          </h2>
        </div>
        <div className="col-12 mt-2 mb-3">
          <FormCommentTatto
            setNewMessages={setNewMessages}
            IdContenido={IdContenido}
          />
        </div>
        <div className="col-12">
          {Comentarios?.map((comment, index) => (
            <div className="row grid gx-3" key={index}>
              <div className="col-1 p-0 m-0">
                <Avatar alt={Titulo} src={UrlImagen} />
              </div>
              <div className="col-9 p-0 m-0">
                <div className="comment">
                  <p className="text-black p-0 m-0">
                    <strong style={{ margin: "0px 5px" }}>
                      {comment.Perfil.UserName}
                    </strong>
                  </p>
                  <p className="text-black m-0 p-0">
                    <span style={{ margin: "0px 5px" }}>{comment.Cuerpo}</span>
                  </p>
                </div>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <MoreVertIcon sx={{ color: "var(--tp-common-black)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
