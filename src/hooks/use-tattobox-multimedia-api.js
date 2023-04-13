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

const useTattoboxMultimediaApi = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      fetchOptions: {
        mode: "no-cors",
      },
    },
  };

  const uploadTattooArtist = async (file, body) => {
    try {
      const { data } = await tattoApiSocial.post(
        "/v1/contenido/diseno",
        body,
        config
      );
      await uploadImage(file, data.data.idContenido);
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  const uploadImage = async (image, idContent) => {
    const configMedia = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        fetchOptions: {
          mode: "no-cors",
        },
      },
    };

    const bodyFormData = new FormData();
    bodyFormData.append("IdContenido", idContent);
    bodyFormData.append("file", image);

    try {
      const { data } = await tattoApiSocial.post(
        "/v1/multimedia/diseno",
        bodyFormData,
        configMedia
      );
      console.log(data);
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  return {
    isLoading,
    uploadTattooArtist,
  };
};

export default useTattoboxMultimediaApi;
