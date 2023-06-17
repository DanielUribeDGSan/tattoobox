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

const useTattoboxCatalogApi = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [styleData, setStyleData] = useState([]);

    const getStyles = async() => {
        try {
            const { data } = await tattoApi.get(
                "/estilos/tatuajes",
                config
            );

            setStyleData(data.estilos)
            setIsLoading(false);
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };


    return {
        isLoading,
        getStyles,
        styleData
    };
};

export default useTattoboxCatalogApi;