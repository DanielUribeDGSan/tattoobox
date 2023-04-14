import { useState } from "react";

import { tattoApiSocial, tattoApi, tattoApiIdentify } from "../api/tattoApi";
import Router from "next/router";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    fetchOptions: {
      mode: "no-cors",
    },
  },
};

export const useUserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [profileStudio, setProfileStudio] = useState([]);

  const getProfileInfoStudio = async (profileId) => {
    try {
      const { data } = await tattoApiSocial.get(
        `/v1/perfil/estudio/${profileId}`,
        config
      );
      const profile = data.perfil;
      setProfileStudio(profile);
      setIsLoading(false);
    } catch (error) {
      const errorMessage = error?.message;
    }
  };

  return {
    isLoading,
    getProfileInfoStudio,
    profileStudio,
  };
};
