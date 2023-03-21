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

const useTattoboxApi = () => {
  // Auth and register
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [contentTattoo, setContentTattoo] = useState([]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      fetchOptions: {
        mode: "no-cors",
      },
    },
  };

  const registerEmail = async (email) => {
    try {
      const body = {
        email,
      };
      await tattoApiIdentify.post("/register-mail", body);
    } catch (error) {
      toast.error(`Ocurrio un error - ${errorMessage}`, {
        position: "top-left",
      });
    }
  };

  const validateCode = async (email, code) => {
    try {
      const body = {
        email,
        code: parseInt(code),
      };
      const resp = await tattoApiIdentify.post("/register-mail-auth", body);
      dispatch(
        add_user({
          email: email,
          idParte: resp.data.IdParte,
          uid: resp.data.token,
        })
      );
      await getIdProfile(resp.data.IdParte);
      toast.success(`Registro completado`, {
        position: "top-left",
      });
      Router.push("/");
    } catch (error) {
      const errorMessage = error?.message;
      toast.error(`Ocurrio un error - ${errorMessage}`, {
        position: "top-left",
      });
    }
  };

  const completeRegister = async (body) => {
    try {
      await tattoApiIdentify.post("/registro/complementario", body);
      dispatch(
        set_data_supplementary({
          name: body.Nombre,
          lastNamePaternal: body.Apellido_Paterno,
          lastNameMaternal: body.Apellido_Materno,
          mobileNumber: body.NumeroCelular,
          userName: body.UserName,
          birthDate: body.Fecha_Nacimiento,
        })
      );
      toast.success(`Registro completado`, {
        position: "top-left",
      });
      Router.push("/");
    } catch (error) {
      const errorMessage = error?.message;
      toast.error(`Ocurrio un error - ${errorMessage}`, {
        position: "top-left",
      });
    }
  };

  const logout = () => {
    dispatch(sign_out());
    Router.push("/");
  };

  // Get data for user

  const getIdProfile = async (idPart) => {
    try {
      const resp = await tattoApiSocial.get(`/v1/perfil/${idPart}`, config);
      console.log(resp);
      dispatch(
        set_id_profile({
          idPerfil: resp.data.perfiles.Perfiles[0].IdPerfil,
        })
      );
    } catch (error) {
      const errorMessage = error?.message;
      toast.error(`Ocurrio un error - ${errorMessage}`, {
        position: "top-left",
      });
    }
  };

  // Get data for tattoos

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
    logout,
    registerEmail,
    validateCode,
    completeRegister,
    getContentTattoo,
    getIdProfile,
    contentTattoo,
    setCommentTattoo,
  };
};

export default useTattoboxApi;
