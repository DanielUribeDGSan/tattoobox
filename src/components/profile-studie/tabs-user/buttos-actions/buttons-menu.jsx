import React from 'react';
import { ProfileActions } from '../../menu/profile-actions';
import useTattoboxProfiles from '../../../../hooks/use-tattobox-profiles';

export const ButtonsMenu = ({ user, dataProfile, setActions }) => {
  const { followUser, unfollowUser } = useTattoboxProfiles();

  const handleClickFollow = () => {
    const body = {
      IdPerfilOrigen: user?.idPerfil,
      IdPerfilDestino: dataProfile?.IdPerfil,
    };
    followUser(body);
    setActions(true);
  };

  const handleClickUnfollow = () => {
    const body = {
      IdPerfilOrigen: user?.idPerfil,
      IdPerfilDestino: dataProfile?.IdPerfil,
    };
    unfollowUser(body);
    setActions(true);
  };

  return (
    <div className='user-buttons row'>
      <div className='col-auto'>
        {!dataProfile?.Seguidor ? (
          <button
            className='btn-md-black '
            aria-label='Editar perfil'
            onClick={handleClickFollow}
          >
            Seguir
          </button>
        ) : (
          <button
            className='btn-md-black '
            aria-label='Editar perfil'
            onClick={handleClickUnfollow}
          >
            Dejar de seguir
          </button>
        )}
      </div>
      <div className='col-auto'>
        <button className='btn-md-black ' aria-label='Editar perfil'>
          Agendar
        </button>
      </div>

      <div className='col-auto'>
        <ProfileActions />
      </div>
    </div>
  );
};
