import React, { useState } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import useTattoboxTattoos from '../../../hooks/use-tattobox-tattoos';
import { PopoverNotLogin } from '../../utils/popover/PopoverNotLogin';

export const ActionsTattoos = ({
  content,
  style,
  user,
  idContent,
  setActionsState,
  handleOnClickCloseModal,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { likeTattoo, dislikeTattoo, saveFavorites, deleteFavorites } =
    useTattoboxTattoos();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const handleClickSaveFavoriteTattoo = async () => {
    const body = {
      IdPerfil: user?.idPerfil,
      IdContenido: idContent,
    };

    await saveFavorites(body);
    setActionsState(true);
  };

  const handleClickRemoveFavoriteTattoo = async (idFavorite) => {
    const body = {
      IdFavorito: idFavorite,
    };

    await deleteFavorites(body);
    setActionsState(true);
  };

  return (
    <div className='actions-tatuaje' style={style}>
      <div className='row grid gx-3'>
        <div className='col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center justify-content-start'>
          <span className='precio text-black'>
            <span className='fw-bold'>$</span> {content?.RangoPrecio} MXN
          </span>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center actions-icons'>
          {content?.DioLike === 0 ? (
            <button
              onClick={user?.email ? handleClickLikeTattoo : handleClick}
              className='d-flex align-items-center'
              aria-label='dar likes a tatuajes'
            >
              <FavoriteBorderIcon sx={{ color: 'var(--tp-common-black)' }} />
              <span className='likes text-black'>{content?.NumeroLikes}</span>
            </button>
          ) : (
            <button
              onClick={user?.email ? handleClickDislikeTattoo : handleClick}
              className='d-flex align-items-center'
              aria-label='dar likes a tatuajes'
            >
              <FavoriteIcon sx={{ color: 'var(--tp-common-like)' }} />
              <span className='likes text-black'>{content?.NumeroLikes}</span>
            </button>
          )}

          <ShareIcon sx={{ color: 'var(--tp-common-black)' }} />

          {!content?.Favorito ? (
            <button
              onClick={
                user?.email ? handleClickSaveFavoriteTattoo : handleClick
              }
              className='d-flex align-items-center'
              aria-label='dar likes a tatuajes'
            >
              <BookmarkBorderIcon sx={{ color: 'var(--tp-common-black)' }} />
            </button>
          ) : (
            <button
              onClick={() =>
                user?.email
                  ? handleClickRemoveFavoriteTattoo(content?.IdFavorito)
                  : handleClick
              }
              className='d-flex align-items-center'
              aria-label='dar likes a tatuajes'
            >
              <BookmarkIcon sx={{ color: 'var(--tp-common-black)' }} />
            </button>
          )}
        </div>
      </div>
      <PopoverNotLogin
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleOnClickCloseModal={handleOnClickCloseModal}
      />
    </div>
  );
};
