import { useState } from 'react';
import { tattoApiSocial, tattoApi, tattoApiIdentify } from '../api/tattoApi';
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

const useTattoboxTattoos = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [contentTattoo, setContentTattoo] = useState([]);
    const [relatedTattoos, setRelatedTattoos] = useState([]);
    const [relatedTattoosAllData, setRelatedTattoosAllData] = useState([]);
    const [comments, setComments] = useState([]);
    const [commentsAllData, setCommentsAllData] = useState([]);

    // _____________________________________________________________________________________________________________________
    // -------------------------------------------------Info tatttoos------------------------------------------------------------
    // *********************************************************************************************************************

    const getContentTattoo = async(idContent, idProfile) => {
        try {
            setIsLoading(true);

            const { data } = await tattoApiSocial.get(
                `/v1/busqueda/${idContent}/${idProfile}`,
                config
            );
            setContentTattoo(data.contenido);
            setIsLoading(false);
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    // _____________________________________________________________________________________________________________________
    // -------------------------------------------------Comments------------------------------------------------------------
    // *********************************************************************************************************************

    const getRelatedTattoos = async(idContent, page) => {
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
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    const setCommentTattoo = async(body, page) => {
        try {
            const { data } = await tattoApiSocial.post(
                '/v1/comentario',
                body,
                config
            );
            await getCommentsTattoo(data.data.idContenido, page, true);
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    const getCommentsTattoo = async(idContent, page, reset = false) => {
        try {
            setIsLoading(true);

            const { data } = await tattoApiSocial.get(
                `/v1/comentario/${idContent}/${page}`,
                config
            );

            setCommentsAllData(data.comentarios);
            // if (pageComments === page) setComments("");
            // let commentsConcat = comments.concat(data.comentarios.data)
            setComments(data.comentarios.data);
            setIsLoading(false);
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    // _____________________________________________________________________________________________________________________
    // -------------------------------------------------Actions------------------------------------------------------------
    // *********************************************************************************************************************

    const likeTattoo = async(body) => {
        try {
            await tattoApiSocial.post('/v1/contenido/item', body, config);
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    const deleteLikeWithBodyAndConfig = async(url, data) => {
        return tattoApiSocial.delete(url, { data, ...config });
    };

    const dislikeTattoo = async(body) => {
        try {
            await deleteLikeWithBodyAndConfig('/v1/contenido/item', body);
        } catch (error) {
            console.log(error);
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    const saveFavorites = async(body) => {
        try {
            await tattoApiSocial.post('/v1/favoritos', body, config);
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    const deleteFavorites = async(body) => {
        try {
            await tattoApiSocial.put('/v1/favoritos', body, config);
        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };

    const removeFavoritesWithBodyAndConfig = async(url, data) => {
        return tattoApiSocial.delete(url, { data, ...config });
    };

    const removeFavorites = async(body) => {
        try {
            await removeFavoritesWithBodyAndConfig('/v1/contenido/item', body);
        } catch (error) {
            console.log(error);
            const errorMessage = error.message;
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
        commentsAllData,
        setCommentTattoo,
        getRelatedTattoos,
        relatedTattoos,
        relatedTattoosAllData,
        likeTattoo,
        dislikeTattoo,
        saveFavorites,
        deleteFavorites,
        removeFavorites,
    };
};

export default useTattoboxTattoos;