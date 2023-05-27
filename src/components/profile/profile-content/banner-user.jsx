import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ChangeProfile } from './change-profile';
import { ChangeProfileImage } from './change-profile-image';
import { ProfileActions } from '../menu/profile-actions';

export const BannerUser = ({ dataProfile, user }) => {
  const movilIpadaScreen = useMediaQuery('(max-width:1000px)');

  if (dataProfile?.length === 0)
    return <p className='text-black'>Cargando...</p>;

  return (
    <div className='tp-profile-user-content pb-3'>
      <div
        className='banner-profile position-relative'
        style={{
          backgroundImage: `url('https://i0.wp.com/www.alittlebithuman.com/wp-content/uploads/2022/03/Rey-Skywalker.jpg?resize=1000%2C563&ssl=1')`,
        }}
      />
      <div className='content-user'>
        <div className='info'>
          <div className='container-user-banner'>
            <div className='img-content-user'>
              <ChangeProfileImage user={user} />
              <img src={dataProfile?.Avatar} />
            </div>
          </div>
          <div className='user-data-banner'>
            {movilIpadaScreen ? (
              <>
                <p className='text-black fw-bold m-0 px-0 txt-user'>
                  {dataProfile?.NombrePerfil.slice(0, 32)}
                  {dataProfile?.NombrePerfil.length >= 32 ? '...' : ''}
                </p>
                <p className='mb-0 p-0 txt-username mt-1'>
                  @{dataProfile?.UserName.slice(0, 32)}
                  {dataProfile?.UserName.length >= 32 ? '...' : ''}
                </p>
              </>
            ) : (
              <>
                <p className='text-black fw-bold m-0 px-0 txt-user'>
                  {dataProfile?.NombrePerfil}
                </p>
                <p className='mb-0 p-0 txt-username mt-1'>
                  @{dataProfile?.UserName}
                </p>
              </>
            )}
            <div className='d-flex mt-1 followers'>
              <p
                className='mb-0 p-0 txt-description '
                style={{ marginRight: '12px' }}
              >
                <span className='text-black fw-bold mr-5'>1000</span> Seguidores
              </p>
              <p className='mb-0 p-0 txt-description'>
                <span className='text-black fw-bold mr-5'>1000</span> Seguidores
              </p>
            </div>
          </div>
        </div>
        <div className='user-buttons row'>
          <div className='col-auto'>
            <button className='btn-md-black ' aria-label='Editar perfil'>
              Agendar
            </button>
          </div>
          <div className='col-auto'>
            <ChangeProfile user={user} />
          </div>
          <div className='col-auto'>
            <ProfileActions />
          </div>
        </div>
      </div>
    </div>
  );
};
