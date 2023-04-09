import { useState } from "react";
import { tattoApiSocial, tattoApi, tattoApiIdentify } from "../api/tattoApi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  add_user,
  set_data_supplementary,
  set_id_profile,
  sign_out,
} from "../redux/features/auth-slice";
import Router from "next/router";
import { useEffect } from "react";

const useTattoboxHomeTattoos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tattosHome, SettattosHome] = useState({
    artist: [],
    studies: [],
    newest: [],
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      fetchOptions: {
        mode: "no-cors",
      },
    },
  };

  const getTattoosHome = async () => {
    const artistPromise = tattoApiSocial.get("/v1/destacado/artista");
    const studiesromise = tattoApiSocial.get("/v1/destacado/estudio");
    const newestdPromise = tattoApiSocial.get("/v1/contenido/masnuevo");

    const resps = await Promise.all([
      artistPromise,
      studiesromise,
      newestdPromise,
    ]);
    SettattosHome({
      artist: resps[0].data.artistas,
      studies: resps[1].data.estudio,
      newest: resps[2].data.contenidos,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    // now_playing
    getTattoosHome();
  }, []);

  return {
    isLoading,
    ...tattosHome,
  };
};

export default useTattoboxHomeTattoos;
