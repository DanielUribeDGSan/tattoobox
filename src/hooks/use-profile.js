import { useState } from 'react';

import { tattoApiSocial, tattoApi, tattoApiIdentify } from '../api/tattoApi';
import Router from 'next/router';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        fetchOptions: {
            mode: 'no-cors',
        },
    },
};

export const useUserProfile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [profileStudio, setProfileStudio] = useState([]);
    const [profileArtist, setProfileArtist] = useState([]);

    const getProfileInfoStudio = async(studieId, profileId) => {
        try {
            const { data } = await tattoApiSocial.get(
                `/v1/perfil/estudio/${studieId}/${profileId}`,
                config
            );
            const profile = data.perfil;
            setProfileStudio(profile);
            setIsLoading(false);
        } catch (error) {
            const errorMessage = error.message;
        }
    };

    const getProfileInfoArtist = async(artistId, profileId) => {
        try {
            const { data } = await tattoApiSocial.get(
                `/v1/perfil/artista/${artistId}/${profileId}`,
                config
            );
            const profile = data.perfil;
            setProfileArtist(profile);
            setIsLoading(false);
        } catch (error) {
            const errorMessage = error.message;
        }
    };

    return {
        isLoading,
        getProfileInfoStudio,
        getProfileInfoArtist,
        profileStudio,
        profileArtist,
    };
};