import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_user } from "../redux/features/auth-slice";
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

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [profilesState, SetProfilesState] = useState({
    artist: [],
    studie: [],
  });

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(get_user());
    setIsLoadingUser(false);
  }, [dispatch]);

  useEffect(() => {
    getProfiles();
  }, [user]);

  const verifyLoggedUser = () => {
    if (user?.email) Router.push("/");
  };

  const getProfiles = async () => {
    if (!user?.idParte) return false;
    try {
      const { data } = await tattoApiSocial.get(
        `/v1/perfil/${user?.idParte}`,
        config
      );
      const profiles = data.perfiles.Perfiles;
      SetProfilesState({
        artist: profiles.filter((p) => p?.IdTipoPerfil === 2),
        studie: profiles.filter((p) => p?.IdTipoPerfil === 4),
      });
      setIsLoading(false);
    } catch (error) {
      const errorMessage = error?.message;
    }
  };

  return {
    isLoadingUser,
    isLoading,
    user,
    ...profilesState,
    verifyLoggedUser,
  };
};
