import { useState } from 'react';
import { tattoApiSocial, tattoApi, tattoApiIdentify } from '../api/tattoApi';
import { toast } from 'react-toastify';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        fetchOptions: {
            mode: 'no-cors',
        },
    },
};

const useTattoboxProfiles = () => {

    const followUser = async(body) => {
        try {
            await tattoApiSocial.post('/v1/perfil/seguir', body, config);

        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    const unfollowUserWithBodyAndConfig = async(url, data) => {
        return tattoApiSocial.delete(url, { data, ...config });
    };

    const unfollowUser = async(body) => {
        try {
            await unfollowUserWithBodyAndConfig('/v1/perfil/seguir', body);

        } catch (error) {
            console.log(error);
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };


    return {
        followUser,
        unfollowUser
    };
};

export default useTattoboxProfiles;