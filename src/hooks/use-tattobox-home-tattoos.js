import { useState } from "react";
import { tattoApiSocial, tattoApi, tattoApiIdentify } from "../api/tattoApi";
import { toast } from "react-toastify";
import Router from "next/router";
import { useEffect } from "react";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    fetchOptions: {
      mode: "no-cors",
    },
  },
};

const useTattoboxHomeTattoos = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tattosHome, SettattosHome] = useState({
    artist: [],
    studies: [],
    newest: [],
  });

  const getTattoosHome = async () => {
    try {
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
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    // now_playing
    getTattoosHome();
  }, []);

  return {
    isLoading,
    error,
    ...tattosHome,
  };
};

export default useTattoboxHomeTattoos;
