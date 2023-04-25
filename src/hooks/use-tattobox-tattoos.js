import { useState } from "react";
import axios from "axios";
import { tattoApiSocial, tattoApi, tattoApiIdentify } from "../api/tattoApi";
import { toast } from "react-toastify";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    fetchOptions: {
      mode: "no-cors",
    },
  },
};

const useTattoboxTattoos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentTattoo, setContentTattoo] = useState([]);
  const [relatedTattoos, setRelatedTattoos] = useState([]);
  const [relatedTattoosAllData, setRelatedTattoosAllData] = useState([]);

  const [comments, setComments] = useState([]);

  const getContentTattoo = async (idContent, idProfile) => {
    try {
      setIsLoading(true);

      const { data } = await tattoApiSocial.get(
        `/v1/busqueda/${idContent}/${idProfile}`,
        config
      );
      setContentTattoo(data.contenido);
      setIsLoading(false);
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  // Comments

  const getRelatedTattoos = async (idContent, page) => {
    try {
      setIsLoading(true);

      const { data } = await tattoApiSocial.get(
        `/v1/tatuajes-relacionados/${idContent}/${page}`,
        config
      );

      setRelatedTattoosAllData(data.tatuajes);
      let relatedTattoosConcat = relatedTattoos.concat(data.tatuajes.data);
      setRelatedTattoos(relatedTattoosConcat);

      setIsLoading(false);
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  const setCommentTattoo = async (body, page) => {
    try {
      const { data } = await tattoApiSocial.post(
        "/v1/comentario",
        body,
        config
      );
      await getCommentsTattoo(data.data.idContenido, page);
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  const getCommentsTattoo = async (idContent, page) => {
    try {
      setIsLoading(true);

      const { data } = await tattoApiSocial.get(
        `/v1/comentario/${idContent}/${page}`,
        config
      );
      setComments(data.comentarios.data);
      setIsLoading(false);
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  // actions tatttoo

  const likeTattoo = async (body) => {
    try {
      await tattoApiSocial.post("/v1/contenido/item", body, config);
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  const deleteWithBodyAndConfig = async (url, data) => {
    return tattoApiSocial.delete(url, { data, ...config });
  };

  const dislikeTattoo = async (body) => {
    try {
      await deleteWithBodyAndConfig("/v1/contenido/item", body);
    } catch (error) {
      console.log(error);
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  return {
    isLoading,
    getContentTattoo,
    contentTattoo,
    getCommentsTattoo,
    comments,
    setCommentTattoo,
    getRelatedTattoos,
    relatedTattoos,
    relatedTattoosAllData,
    likeTattoo,
    dislikeTattoo,
  };
};

export default useTattoboxTattoos;
