import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { TabUser } from './menu/tab-user';
import { BannerUser } from './profile-content/banner-user';
import { useUserProfile } from '../../hooks/use-profile';
import { useUser } from '../../hooks/use-user';

const ProfileArea = () => {
  const router = useRouter();
  const idArtist = router.query.id;
  const [actions, setActions] = useState(false);
  const { isLoadingUser, user } = useUser();
  const { isLoading, getProfileInfoArtist, profileArtist } = useUserProfile();

  const memoizedGetProfileInfoArtist = useCallback(getProfileInfoArtist, []);

  useEffect(() => {
    let isActive = true;

    const getData = async () => {
      await memoizedGetProfileInfoArtist(idArtist, user?.idPerfil);
    };

    if (isActive) {
      getData();
    }

    return () => {
      isActive = false;
      setActions(false);
    };
  }, [idArtist, isLoadingUser, actions]);

  return (
    <>
      <div className='tp-profile-area'>
        <div className='row gx-0 align-items-center tp-profile m-0 w-100'>
          <div className='col-12 p-0 m-0 col-profile-content d-flex justify-content-center m-0 w-100'>
            <div className='container-profile-content'>
              {isLoading ? (
                <p className='text-black'>Cargando...</p>
              ) : (
                <>
                  <BannerUser
                    dataProfile={profileArtist}
                    user={user}
                    setActions={setActions}
                  />
                  <TabUser
                    dataProfile={profileArtist}
                    user={user}
                    setActions={setActions}
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
