import { useEffect, useState } from "react";
import { tattoApiSocial, tattoApi } from "../api/tattoApi";
import { toast } from "react-toastify";

export const useTattoBoxFiltros = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    estados: [],
    estilos: [],
    precios: [],
  });
  const [dataStateCountry, setDataStateCountry] = useState([]);
  const [dataStyles, setDataStyles] = useState([]);
  const [dataPrices, setDataPrices] = useState([]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      fetchOptions: {
        mode: "no-cors",
      },
    },
  };

  const getFilters = async () => {
    const estadosPromise = tattoApi.get("/estados");
    const estilosPromise = tattoApi.get("/estilos/tatuajes");
    const preciossPromise = tattoApi.get("/rangoprecios");

    const resps = await Promise.all([
      estadosPromise,
      estilosPromise,
      preciossPromise,
    ]);

    setFilters({
      estados: resps[0].data.estados,
      estilos: resps[1].data.estilos,
      precios: resps[2].data.rangoprecios,
    });

    setIsLoading(false);
  };

  const getTattoos = async ({ queryKey }) => {
    try {
      let searchTxt = "",
        stateCountry = "",
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

      const resp = await tattoApiSocial.post("/v1/busqueda", data, config);
      return resp.data.contenidos;
    } catch (error) {
      const errorMessage = error?.message;
      // toast.error(`${errorMessage}`, {
      //   position: "top-left",
      // });
    }
  };

  const geDataStateCountry = async () => {
    try {
      const { data } = await tattoApi.get("/estados");
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
      const { data } = await tattoApi.get("/estilos/tatuajes");
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
      const { data } = await tattoApi.get("/rangoprecios");
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
    getTattoos,
  };
};
