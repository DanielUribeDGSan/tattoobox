import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FormCommentTatto } from "../../forms/form-comment-tatto";
import useTattoboxTattoos from "../../../hooks/use-tattobox-tattoos";

export const CommentsTattoo = ({ idContent }) => {
  const [newMessages, setNewMessages] = useState(false);

  const { getCommentsTattoo, comments, isLoading } = useTattoboxTattoos();

  useEffect(() => {
    let isActive = true;

    if (isActive) {
      getCommentsTattoo(idContent);
      setNewMessages(false);
    }
    return () => {
      isActive = false;
    };
  }, [newMessages]);

  if (isLoading) {
    return <p>Cargando..</p>;
  }

  return (
    <div>
      <div className="row grid gx-3 comments">
        {comments.length > 0 && (
          <>
            <div className="col-12 mt-2 mb-3">
              <FormCommentTatto
                setNewMessages={setNewMessages}
                IdContenido={idContent}
              />
            </div>
            <div className="col-12">
              {comments?.map((comment, index) => (
                <div className="row grid gx-3" key={index}>
                  <div className="col-1 p-0 m-0">
                    <Avatar
                      alt={"Titulo"}
                      src={
                        "https://www.infobae.com/new-resizer/UROAjCU6hMtvAvfGQXjUD0sm6Zk=/1200x900/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/13145720/Emma-Watson-41.jpg"
                      }
                    />
                  </div>
                  <div className="col-9 p-0 m-0">
                    <div className="comment">
                      <p className="text-black p-0 m-0">
                        <strong style={{ margin: "0px 5px" }}>
                          {comment?.Perfil.UserName}
                        </strong>
                      </p>
                      <p className="text-black m-0 p-0">
                        <span style={{ margin: "0px 5px" }}>
                          {comment?.Cuerpo}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-2 d-flex justify-content-center">
                    <MoreVertIcon sx={{ color: "var(--tp-common-black)" }} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
