import { useEffect, useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
  'https://phantom-marca-us.unidadeditorial.es/bedc069fecb6b2d6ed9a9ec871725029/resize/1320/f/jpg/assets/multimedia/imagenes/2023/05/20/16846144475395.jpg',
  'https://s1.abcstatics.com/abc/www/multimedia/gente/2023/04/13/belinda_20230413154826-U68710503688Cbn-1200x630@abc.jpg',
  'https://phantom-marca-us.unidadeditorial.es/bedc069fecb6b2d6ed9a9ec871725029/resize/1320/f/jpg/assets/multimedia/imagenes/2023/05/20/16846144475395.jpg',
  'https://s1.abcstatics.com/abc/www/multimedia/gente/2023/04/13/belinda_20230413154826-U68710503688Cbn-1200x630@abc.jpg',
];

export const CardArtist = () => {
  const [sliderLoop, setSliderLoop] = useState(false);

  const swiperParams = {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  useEffect(() => setSliderLoop(true), []);

  //   if (loading) return <p>Cargando...</p>;

  return (
    <div className='card-artist'>
      <div className='card-artist-body'>
        <Swiper
          {...swiperParams}
          loop={sliderLoop}
          slidesPerView={1}
          centeredSlides={true}
          centeredSlidesBounds={true}
          spaceBetween={0}
          navigation
          pagination
          className='swiper-container '
          breakpoints={{
            // when window width is >= 1200px
            1500: { slidesPerView: 1 },
            1200: { slidesPerView: 1 },
            1100: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {images.map((tattoo, i) => (
            <SwiperSlide key={i}>
              <img className='img-fluid' src={tattoo} alt='tatooboox' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='card-artist-footer'>
        <List sx={{ width: '100%', margin: 0, padding: 0 }}>
          <ListItem alignItems='flex-start' sx={{ margin: 0, padding: 0 }}>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: 'var(--tp-common-black)' }}
              primary='Daniel Uribe'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {'Morelia Mich'}
                </>
              }
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};
