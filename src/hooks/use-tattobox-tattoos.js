import { useState } from "react";
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

  const [comments, setComments] = useState([]);

  const getContentTattoo = async (idContent) => {
    try {
      setIsLoading(true);

      const { data } = await tattoApiSocial.get(
        `/v1/busqueda/${idContent}`,
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

  const getRelatedTattoos = async (body) => {
    try {
      setIsLoading(true);

      const { data } = await tattoApiSocial.post(
        "/v1/tatuajes-relacionados",
        body,
        config
      );
      setRelatedTattoos(data.tatuajes.data);
      setIsLoading(false);
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  const setCommentTattoo = async (body) => {
    try {
      const { data } = await tattoApiSocial.post(
        "/v1/comentario",
        body,
        config
      );
      await getCommentsTattoo(data.data.idContenido);
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  const getCommentsTattoo = async (idContent) => {
    try {
      setIsLoading(true);

      const { data } = await tattoApiSocial.get(
        `/v1/comentario/${idContent}`,
        config
      );
      setComments(data.comentarios);
      setIsLoading(false);
    } catch (error) {
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
  };
};

export default useTattoboxTattoos;
