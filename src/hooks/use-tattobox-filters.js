import { useEffect, useState } from 'react';
import { tattoApiSocial, tattoApi } from '../api/tattoApi';
import { toast } from 'react-toastify';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        fetchOptions: {
            mode: 'no-cors',
        },
    },
};

export const useTattoBoxFilters = () => {
    const [isLoading, setIsLoading] = useState(true);

    const getTattoos = async({ queryKey }) => {
        try {
            let searchTxt = '',
                stateCountry = '',
                styles = [],
                rangePrices = [];

            if (queryKey[2]) {
                searchTxt = queryKey[2];
            }
            if (queryKey[3]) {
                stateCountry = queryKey[3].value;
            }
            if (queryKey[4].length > 0) {
                styles = queryKey[4].map((e) => {
                    return parseInt(e.value);
                });
            }
            if (queryKey[5].length > 0) {
                rangePrices = queryKey[5].map((e) => {
                    return parseInt(e.value);
                });
            }

            const data = {
                textoBusqueda: searchTxt,
                estado: stateCountry,
                estilo: styles,
                rangePango_precio: rangePrices,
            };

            const resp = await tattoApiSocial.post('/v1/busqueda', data, config);
            return resp.data.contenidos;
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    const getArtist = async({ queryKey }) => {
        try {
            let searchTxt = '',
                stateCountry = '',
                styles = [];

            if (queryKey[2]) {
                searchTxt = queryKey[2];
            }
            if (queryKey[3]) {
                stateCountry = queryKey[3].value;
            }
            if (queryKey[4].length > 0) {
                styles = queryKey[4].map((e) => {
                    return parseInt(e.value);
                });
            }

            const body = {
                textoBusqueda: searchTxt,
                estado: stateCountry,
                estilo: styles,
                page: 1,
            };

            const { data } = await tattoApiSocial.post(
                '/v1/busqueda/artistas',
                body,
                config
            );

            return data.contenidos.data;
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    const getStudies = async({ queryKey }) => {
        try {
            let searchTxt = '',
                stateCountry = '',
                styles = [];

            if (queryKey[2]) {
                searchTxt = queryKey[2];
            }
            if (queryKey[3]) {
                stateCountry = queryKey[3].value;
            }
            if (queryKey[4].length > 0) {
                styles = queryKey[4].map((e) => {
                    return parseInt(e.value);
                });
            }

            const body = {
                textoBusqueda: searchTxt,
                estado: stateCountry,
                estilo: styles,
                page: 1,
            };

            const { data } = await tattoApiSocial.post(
                '/v1/busqueda/estudio',
                body,
                config
            );

            return data.contenidos.data;
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    return {
        isLoading,
        getTattoos,
        getArtist,
        getStudies
    };
};