import React, { useCallback, useEffect, useRef, useState } from "react";
import { ModalTatuaje } from "../../modals/modalTatuaje";
import { useTattoBox } from "../../../hooks/use-tattobox";
import { useQuery } from "react-query";
import { FormFiltros } from "../../forms/form-filtros";
import { FormFiltrosMovil } from "../../forms/form-filtros-movil";
import { IputSearchMovil } from "../../inputs/InputSearchMovil";
import { ModalSearchMovil } from "../../modals/modalSearchMovil";

const PortfolioItems = () => {
  // Hooks
  const [urlImage, setUrlImage] = useState("");

  const [searchState, setSearchState] = useState("");
  const [estadoState, setEstadoState] = useState("");
  const [estiloState, setEstiloState] = useState([]);
  const [precioState, setPrecioState] = useState([]);
  const [isClearable, setIsClearable] = useState(true);
  const [page, setPage] = useState(1);

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
            <button
              className="mt-2"
              data-bs-toggle="modal"
              data-bs-target="#filtrosMovilModal"
            >
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
                <div className="grid-tatuajes">
                  {tatuajes.map((item, i) => (
                    <div key={i} className="grid-item">
                      <div
                        className="tp-project-item-two portfolio-four p-relative bg-img-tatuaje"
                        style={{ backgroundImage: `url('${item.UrlImagen}')` }}
                      >
                        <div className="fix radius-20 h-100"></div>
                        <div className="portfolio-icon z-index-1">
                          <button
                            className="popup-image popup"
                            data-bs-toggle="modal"
                            data-bs-target="#tatuajeModal"
                            onClick={() => setUrlImage(item.UrlImagen)}
                          >
                            <i className="fal fa-eye"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <ModalTatuaje modal_id="tatuajeModal" url_img={urlImage} />
        </div>
      </div>
      <ModalSearchMovil modal_id="filtrosMovilModal">
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
      {/* <BottomSheet open={open} style={{ zIndex: 100 }}>
        <div
          className="container"
          style={{ maxHeight: "50vh", minHeight: "50vh", overflowX: "auto" }}
        >
          <div
            className="d-flex align-items-end justify-content-end pb-3"
            style={{ marginRight: "10px" }}
          >
            <button onClick={() => setOpen(false)} style={{ color: "#000" }}>
              Cerrar filtros
            </button>
          </div>

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
            setOpen={setOpen}
          />
        </div>
      </BottomSheet> */}
    </>
  );
};

export default PortfolioItems;
