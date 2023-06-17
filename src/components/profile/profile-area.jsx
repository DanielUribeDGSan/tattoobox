import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { TabUser } from './menu/tab-user';
import { BannerUser } from './profile-content/banner-user';
import { useUserProfile } from '../../hooks/use-profile';
import { useUser } from '../../hooks/use-user';

const ProfileArea = () => {
  const router = useRouter();
  const { type, id } = router.query;

  const { isLoadingUser, user } = useUser();
  const {
    isLoading,
    getProfileInfoStudio,
    getProfileInfoArtist,
    profileArtist,
    profileStudio,
  } = useUserProfile();

  const memoizedGetProfileInfoArtist = useCallback(getProfileInfoArtist, []);
  const memoizedGetProfileInfoStudio = useCallback(getProfileInfoStudio, []);

  useEffect(() => {
    let isActive = true;

    const getData = async () => {
      if (user?.idTipoPerfil <= 2) {
        await memoizedGetProfileInfoArtist(user?.idPerfil);
      } else {
        console.log(user?.idPerfil);
        await memoizedGetProfileInfoStudio(user?.idPerfil);
      }
    };

    if (user?.email && isActive) {
      getData();
    }

    return () => {
      isActive = false;
    };
  }, [isLoadingUser, user?.email, user?.idTipoPerfil]);

  return (
    <>
      <div className='tp-profile-area'>
        <div className='row gx-0 align-items-center tp-profile m-0 w-100'>
          <div className='col-12 p-0 m-0 col-profile-content d-flex justify-content-center m-0 w-100'>
            <div className='container-profile-content'>
              {isLoading && user?.idTipoPerfil >= 2 ? (
                <p className='text-black'>Cargando...</p>
              ) : (
                <>
                  <BannerUser
                    dataProfile={
                      user?.idTipoPerfil <= 2 ? profileArtist : profileStudio
                    }
                    user={user}
                  />
                  <TabUser
                    dataProfile={
                      user?.idTipoPerfil <= 2 ? profileArtist : profileStudio
                    }
                    user={user}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileArea;
