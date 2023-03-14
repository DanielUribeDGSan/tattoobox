import React, { useState } from "react";
import { useTattoBox } from "../../../hooks/use-tattobox";
import { useQuery } from "react-query";
import { FormFiltrosMovil } from "../../forms/form-filtros-movil";
import { IputSearchMovil } from "../../inputs/InputSearchMovil";
import { ModalSearchMovil } from "../../modals/modalSearchMovil";
import { FormFiltros } from "../../forms/form-filtros";
import { GridMansory } from "../../mansory/grid-mansory";

const PortfolioItems = () => {
  // Hooks

  const [searchState, setSearchState] = useState("");
  const [estadoState, setEstadoState] = useState("");
  const [estiloState, setEstiloState] = useState([]);
  const [precioState, setPrecioState] = useState([]);
  const [isClearable, setIsClearable] = useState(true);
  const [page, setPage] = useState(1);

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // Custom hooks
  const {
    isLoading,
    getTatuajes,
    selectEstados,
    selectEstilos,
    selectPrecios,
  } = useTattoBox();
  const {
    isLoading: isLoadingSearch,
    data: tatuajes,
    isError,
    error,
  } = useQuery({
    queryKey: [
      "tatuajes",
      page,
      searchState,
      estadoState,
      estiloState,
      precioState,
    ],
    queryFn: getTatuajes,
  });

  console.log(tatuajes);

  return (
    <>
      <div className="tp-portfolio-area pt-120 pb-100 p-custom p-relative">
        <div className="container">
          {/* filtros  */}
          <div className="input-content-movil pb-4 d-none-lg">
            <IputSearchMovil
              searchState={searchState}
              setSearchState={setSearchState}
            />
            <button className="mt-2" onClick={toggleDrawer("bottom", true)}>
              Mostrar más filtros
            </button>
          </div>
          <div className="d-none-movil">
            <FormFiltros
              searchState={searchState}
              setSearchState={setSearchState}
              estadoState={estadoState}
              setEstadoState={setEstadoState}
              estiloState={estiloState}
              setEstiloState={setEstiloState}
              precioState={precioState}
              setPrecioState={setPrecioState}
              selectEstados={selectEstados}
              selectEstilos={selectEstilos}
              selectPrecios={selectPrecios}
              isClearable={isClearable}
              setIsClearable={setIsClearable}
            />
          </div>
          {/* filtros end */}
          <div>
            {isLoading || isLoadingSearch ? (
              <p>Cargando...</p>
            ) : (
              <>
                {tatuajes.length == 0 && <p>No hay datos encontrados</p>}
                <GridMansory data={tatuajes} />
              </>
            )}
          </div>
        </div>
      </div>

      <ModalSearchMovil
        modal_id="filtrosMovilModal"
        state={state}
        toggleDrawer={toggleDrawer}
      >
        <FormFiltrosMovil
          estadoState={estadoState}
          setEstadoState={setEstadoState}
          estiloState={estiloState}
          setEstiloState={setEstiloState}
          precioState={precioState}
          setPrecioState={setPrecioState}
          selectEstados={selectEstados}
          selectEstilos={selectEstilos}
          selectPrecios={selectPrecios}
          isClearable={isClearable}
          setIsClearable={setIsClearable}
        />
      </ModalSearchMovil>
    </>
  );
};

export default PortfolioItems;
