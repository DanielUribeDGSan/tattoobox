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

const config = {
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        fetchOptions: {
            mode: "no-cors",
        },
    },
};

const useTattoboxAuthRegister = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    // Auth

    const logout = () => {
        dispatch(sign_out());
        Router.push("/");
    };

    const registerEmail = async(email) => {
        try {
            const body = {
                email,
            };
            await tattoApiIdentify.post("/register-mail", body);
        } catch (error) {
            // toast.error(`Ocurrio un error - ${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    const validateCode = async(email, code) => {
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
            const errorMessage = error.message;
            // toast.error(`Ocurrio un error - ${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    // Register

    const completeRegister = async(body) => {
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
            const errorMessage = error.message;
            // toast.error(`Ocurrio un error - ${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    const registerArtist = async(body, idPart) => {
        try {
            await tattoApiSocial.post("/v1/perfil/artista", body);
            await getIdProfile(idPart);
            toast.success(`Registro completado`, {
                position: "top-left",
            });
            Router.push("/");
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`Ocurrio un error - ${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    const registerStudio = async(body, idPart) => {
        try {
            await tattoApiSocial.post("/v1/perfil/estudio", body);
            await getIdProfile(idPart);
            toast.success(`Registro completado`, {
                position: "top-left",
            });
            Router.push("/");
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`Ocurrio un error - ${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    // Get data for user

    const getIdProfile = async(idPart) => {
        try {
            const resp = await tattoApiSocial.get(`/v1/perfil/${idPart}`, config);
            const position = resp.data.perfiles.Perfiles.length;
            dispatch(
                set_id_profile({
                    idPerfil: resp.data.perfiles.Perfiles[position - 1].IdPerfil,
                    idTipoPerfil: resp.data.perfiles.Perfiles[position - 1].IdTipoPerfil,
                    userName: resp.data.perfiles.Perfiles[position - 1].UserName,
                    avatar: resp.data.perfiles.Perfiles[position - 1].Avatar,
                    nameProfile: resp.data.perfiles.Perfiles[position - 1].NombrePerfil,
                })
            );
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`Ocurrio un error - ${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    // Get data for tattoos

    return {
        isLoading,
        logout,
        registerEmail,
        validateCode,
        completeRegister,
        getIdProfile,
        registerArtist,
        registerStudio,
    };
};

export default useTattoboxAuthRegister;