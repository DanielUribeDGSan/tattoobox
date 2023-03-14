import { useState } from "react";
import { tattoApiSocial, tattoApi, tattoApiIdentify } from "../api/tattoApi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { add_user, sign_out } from "../redux/features/auth-slice";
import Router from "next/router";

const useTattoboxApi = () => {
  // Auth and register
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");
  const [idParte, setIdParte] = useState("");
  const [contenidoTatuaje, setContenidoTatuaje] = useState([]);

  const registroEmail = async (email) => {
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

  const validarCodigo = async (email, code) => {
    try {
      const body = {
        email,
        code: parseInt(code),
      };
      const resp = await tattoApiIdentify.post("/register-mail-auth", body);
      console.log(resp);
      dispatch(
        add_user({
          email: email,
          idParte: resp.data.IdParte,
          uid: resp.data.token,
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

  const completaarRegistro = async (body) => {
    try {
      await tattoApiIdentify.post("/registro/complementario", body);

      dispatch(
        add_user({
          name: body.Nombre,
          email: body.email,
          apellidoPaterno: body.Apellido_Paterno,
          apellidoMaterno: body.Apellido_Materno,
          numeroCelular: body.NumeroCelular,
          userName: body.UserName,
          fechaNacimiento: body.Fecha_Nacimiento,
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

  // Data tatuajes

  const getContenidoTatuaje = async (idContenido) => {
    try {
      setIsLoading(true);
      const config = {
        headers: {
          fetchOptions: {
            mode: "no-cors",
          },
        },
      };
      const { data } = await tattoApiSocial.get(
        `/v1/busqueda/${idContenido}`,
        config
      );
      setContenidoTatuaje(data.contenido);
      setIsLoading(false);
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
    registroEmail,
    validarCodigo,
    completaarRegistro,
    getContenidoTatuaje,
    contenidoTatuaje,
  };
};

export default useTattoboxApi;
