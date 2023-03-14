import { useEffect, useState } from "react";
import { tattoApiSocial, tattoApi } from "../api/tattoApi";
import { toast } from "react-toastify";

export const useTattoBoxFiltros = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filtros, setFiltros] = useState({
    estados: [],
    estilos: [],
    precios: [],
  });
  const [selectEstados, setSelectEstados] = useState([]);
  const [selectEstilos, setSelectEstilos] = useState([]);
  const [selectPrecios, setSelectPrecios] = useState([]);

  const config = {
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  };

  const getFiltros = async () => {
    const estadosPromise = tattoApi.get("/estados");
    const estilosPromise = tattoApi.get("/estilos/tatuajes");
    const preciossPromise = tattoApi.get("/rangoprecios");

    const resps = await Promise.all([
      estadosPromise,
      estilosPromise,
      preciossPromise,
    ]);

    setFiltros({
      estados: resps[0].data.estados,
      estilos: resps[1].data.estilos,
      precios: resps[2].data.rangoprecios,
    });

    setIsLoading(false);
  };

  const getTatuajes = async ({ queryKey }) => {
    try {
      let busqueda = "",
        estado = "",
        estilos = [],
        precios = [];

      if (queryKey[2]) {
        busqueda = queryKey[2];
      }
      if (queryKey[3]) {
        estado = queryKey[3].value;
      }
      if (queryKey[4].length > 0) {
        estilos = queryKey[4].map((e) => {
          return parseInt(e.value);
        });
      }
      if (queryKey[5].length > 0) {
        precios = queryKey[5].map((e) => {
          return parseInt(e.value);
        });
      }

      const data = {
        textoBusqueda: busqueda,
        estado,
        estilo: estilos,
        rango_precio: precios,
      };
      const resp = await tattoApiSocial.post("/v1/busqueda", data);
      return resp.data.contenidos;
    } catch (error) {
      const errorMessage = error?.message;
      toast.error(`${errorMessage}`, {
        position: "top-left",
      });
    }
  };

  const getDatosSelectEstados = async () => {
    try {
      const { data } = await tattoApi.get("/estados");
      let options = data.estados.map((elemento) => {
        return { value: `${elemento.nombre}`, label: `${elemento.nombre}` };
      });
      setSelectEstados(options);
    } catch (error) {
      const errorMessage = error?.message;
      toast.error(`${errorMessage}`, {
        position: "top-left",
      });
    }
  };

  const getDatosSelectEstilos = async () => {
    try {
      const { data } = await tattoApi.get("/estilos/tatuajes");
      let options = data.estilos.map((elemento) => {
        return { value: `${elemento.id}`, label: `${elemento.nombre}` };
      });
      setSelectEstilos(options);
    } catch (error) {
      const errorMessage = error?.message;
      toast.error(`${errorMessage}`, {
        position: "top-left",
      });
    }
  };

  const getDatosSelectPrecios = async () => {
    try {
      const { data } = await tattoApi.get("/rangoprecios");
      let options = data.rangoprecios.map((elemento) => {
        return { value: `${elemento.id}`, label: `${elemento.rango}` };
      });
      setSelectPrecios(options);
    } catch (error) {
      const errorMessage = error?.message;
      toast.error(`${errorMessage}`, {
        position: "top-left",
      });
    }
  };

  useEffect(() => {
    // getFiltros();
    getDatosSelectEstados();
    getDatosSelectEstilos();
    getDatosSelectPrecios();
    setIsLoading(false);
  }, []);

  return {
    // ...filtros,
    selectEstados,
    selectEstilos,
    selectPrecios,
    isLoading,
    getTatuajes,
  };
};
