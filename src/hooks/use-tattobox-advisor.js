import { useState } from 'react';
import { tattoApiAdviser } from '../api/tattoApi';
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

const useTattoboxAdvisor = () => {
    const [advisorQuestion1, setAdvisorQuestion1] = useState([]);
    const [advisorQuestion2, setAdvisorQuestion2] = useState([]);
    const [isLoadingAdvisor, setIsLoadingAdvisor] = useState(true);
    const [isLoadingQuestion2, setIsLoadingQuestion2] = useState(true);


    const getQuestions1 = async() => {
        try {
            const { data } = await tattoApiAdviser.get('/v1/formulario/1/preguntas', config);
            setAdvisorQuestion1(data.data.preguntas);
            setIsLoadingAdvisor(false);

        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };


    const getQuestions2 = async() => {
        try {

            const { data } = await tattoApiAdviser.get('/v1/formulario/2/preguntas', config);

            setAdvisorQuestion2(data.data.preguntas);

        } catch (error) {
            const errorMessage = error.message;
            // toast.error(`${errorMessage}`, {
            //   position: "top-left",
            // });
        }
    };




    return {
        getQuestions1,
        getQuestions2,
        advisorQuestion1,
        advisorQuestion2,
        isLoadingAdvisor,
        setIsLoadingQuestion2,
        isLoadingQuestion2
    };
};

export default useTattoboxAdvisor;