import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PlaceIcon from '@mui/icons-material/Place';
import ImageLightBox from '../../common/modals/image-lightbox';

export const CardArtistGrid = ({ tatoos, name, avatar, state }) => {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const images = tatoos.map((t) => {
    return t?.UrlImagen;
  });
  [tatoos];

  const handleImagePopup = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  if (!tatoos) {
    return <p>Cargando...</p>;
  }

  return (
    <div className='card-artist-grid'>
      <div className='user-info'>
        <List sx={{ width: '100%', margin: 0, padding: 0 }}>
          <ListItem alignItems='flex-start' sx={{ margin: 0, padding: 0 }}>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: 'var(--tp-common-black)' }}
              primary={name}
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    <PlaceIcon /> {state}
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>
      </div>
      <div className='images row w-100'>
        {tatoos.map((tattoo, i) => (
          <div className='col-4 col-images m-0 px-1' key={i}>
            <img
              onClick={() => {
                handleImagePopup(0);
              }}
              className='img-fluid'
              src={tattoo?.UrlImagen}
              alt='tatooboox'
            />
          </div>
        ))}
      </div>

      <ImageLightBox
        images={images}
        open={open}
        setOpen={setOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
    </div>
  );
};
