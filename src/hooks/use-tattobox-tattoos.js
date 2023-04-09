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

const useTattoboxTattoos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentTattoo, setContentTattoo] = useState([]);
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
      toast.error(`${errorMessage}`, {
        position: "top-left",
      });
    }
  };

  const setCommentTattoo = async (body) => {
    try {
      const { data } = await tattoApiSocial.post(
        "/v1/comentario",
        body,
        config
      );
      await getContentTattoo(data.data.idContenido);
    } catch (error) {
      const errorMessage = error?.message;
      toast.error(`${errorMessage}`, {
        position: "top-left",
      });
    }
  };

  return {
    isLoading,
    getContentTattoo,
    setCommentTattoo,
    contentTattoo,
  };
};

export default useTattoboxTattoos;
