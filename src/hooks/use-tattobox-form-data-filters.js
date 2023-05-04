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

export const useTattoBoxFormDataFilters = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [dataStateCountry, setDataStateCountry] = useState([]);
  const [dataStyles, setDataStyles] = useState([]);
  const [dataPrices, setDataPrices] = useState([]);

  const geDataStateCountry = async () => {
    try {
      const { data } = await tattoApi.get('/estados');
      let options = data.estados.map((element) => {
        return { value: `${element.nombre}`, label: `${element.nombre}` };
      });
      setDataStateCountry(options);
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  const getDataStyles = async () => {
    try {
      const { data } = await tattoApi.get('/estilos/tatuajes');
      let options = data.estilos.map((element) => {
        return { value: `${element.id}`, label: `${element.nombre}` };
      });
      setDataStyles(options);
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  const getDataPrices = async () => {
    try {
      const { data } = await tattoApi.get('/rangoprecios');
      let options = data.rangoprecios.map((element) => {
        return { value: `${element.id}`, label: `${element.rango}` };
      });
      setDataPrices(options);
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  useEffect(() => {
    geDataStateCountry();
    getDataStyles();
    getDataPrices();
    setIsLoading(false);
  }, []);

  return {
    dataStateCountry,
    dataStyles,
    dataPrices,
    isLoading,
  };
};
