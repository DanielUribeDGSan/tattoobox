import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import useTattoboxTattoos from "../../../hooks/use-tattobox-tattoos";

export const ActionsTattoos = ({
  content,
  style,
  user,
  idContent,
  setActionsState,
}) => {
  const { likeTattoo, dislikeTattoo } = useTattoboxTattoos();

  const handleClickLikeTattoo = async () => {
    const body = {
      IdPerfil: user?.idPerfil,
      IdContenido: idContent,
      IdItem: 1,
    };

    await likeTattoo(body);
    setActionsState(true);
  };

  const handleClickDislikeTattoo = async () => {
    const body = {
      IdPerfil: user?.idPerfil,
      IdContenido: idContent,
      IdItem: 1,
    };

    await dislikeTattoo(body);
    setActionsState(true);
  };

  return (
    <div className="actions-tatuaje" style={style}>
      <div className="row grid gx-3">
        <div className="col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-start">
          <span className="precio text-black">
            <span className="fw-bold">$</span> {content?.RangoPrecio} MXN
          </span>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center actions-icons">
          {content?.DioLike === 0 ? (
            <button
              onClick={handleClickLikeTattoo}
              className="d-flex align-items-center"
              aria-label="dar likes a tatuajes"
            >
              <FavoriteBorderIcon sx={{ color: "var(--tp-common-black)" }} />
              <span className="likes text-black">{content?.NumeroLikes}</span>
            </button>
          ) : (
            <button
              onClick={handleClickDislikeTattoo}
              className="d-flex align-items-center"
              aria-label="dar likes a tatuajes"
            >
              <FavoriteIcon sx={{ color: "var(--tp-common-like)" }} />
              <span className="likes text-black">{content?.NumeroLikes}</span>
            </button>
          )}

          <ShareIcon sx={{ color: "var(--tp-common-black)" }} />
          <BookmarkBorderIcon sx={{ color: "var(--tp-common-black)" }} />
        </div>
      </div>
    </div>
  );
};
