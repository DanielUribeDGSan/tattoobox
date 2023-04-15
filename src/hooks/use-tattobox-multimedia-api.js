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

const useTattoboxMultimediaApi = () => {
  const [isLoading, setIsLoading] = useState(true);

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
      await tattoApiSocial.post(
        "/v1/multimedia/diseno",
        bodyFormData,
        configMedia
      );
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  const uploadImageProfile = async (image, idProfile) => {
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
    bodyFormData.append("IdPerfil", idProfile);
    bodyFormData.append("file", image);

    try {
      await tattoApiSocial.post("/v1/perfil/imagen", bodyFormData, configMedia);
      toast.success("Imagen de perfil subida", {
        position: "top-left",
      });
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
    uploadImageProfile,
  };
};

export default useTattoboxMultimediaApi;
