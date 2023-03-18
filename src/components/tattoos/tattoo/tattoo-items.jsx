import React, { useState } from "react";
import { useTattoBoxFiltros } from "../../../hooks/use-tattobox-filtros";
import { useQuery } from "react-query";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FormFiltersMovil } from "../../forms/form-filters-movil";
import { IputSearchMovil } from "../../inputs/InputSearchMovil";
import { FormFilters } from "../../forms/form-filters";
import { GridMansory } from "../../mansory/grid-mansory";

const TattoItems = () => {
  // Hooks

  const [searchState, setSearchState] = useState("");
  const [stateCountryState, setStateCountryState] = useState("");
  const [styleState, setStyleState] = useState([]);
  const [priceState, setPriceState] = useState([]);
  const [isClearable, setIsClearable] = useState(true);
  const [page, setPage] = useState(1);
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");

  // Custom hooks
  const { isLoading, getTattoos, dataStateCountry, dataStyles, dataPrices } =
    useTattoBoxFiltros();

  const {
    isLoading: isLoadingSearch,
    data: tattoos,
    isError,
    error,
  } = useQuery({
    queryKey: [
      "tattoos",
      page,
      searchState,
      stateCountryState,
      styleState,
      priceState,
    ],
    queryFn: getTattoos,
  });

  return (
    <>
      <div className="tp-portfolio-area pt-120 pb-100 p-custom p-relative">
        <div className="container">
          {/* filtros  */}
          {movilIpadaScreen && (
            <div className="input-content-movil pb-4">
              <IputSearchMovil
                searchState={searchState}
                setSearchState={setSearchState}
              />
              <div className="w-100 d-flex align-items-center justify-content-center">
                <FormFiltersMovil
                  stateCountryState={stateCountryState}
                  setStateCountryState={setStateCountryState}
                  styleState={styleState}
                  setStyleState={setStyleState}
                  priceState={priceState}
                  setPriceState={setPriceState}
                  dataStateCountry={dataStateCountry}
                  dataStyles={dataStyles}
                  dataPrices={dataPrices}
                  isClearable={isClearable}
                  setIsClearable={setIsClearable}
                />
              </div>
            </div>
          )}

          {!movilIpadaScreen && (
            <div>
              <FormFilters
                searchState={searchState}
                setSearchState={setSearchState}
                stateCountryState={stateCountryState}
                setStateCountryState={setStateCountryState}
                styleState={styleState}
                setStyleState={setStyleState}
                priceState={priceState}
                setPriceState={setPriceState}
                dataStateCountry={dataStateCountry}
                dataStyles={dataStyles}
                dataPrices={dataPrices}
                isClearable={isClearable}
                setIsClearable={setIsClearable}
              />
            </div>
          )}
          {/* filtros end */}
          <div>
            {isLoading || isLoadingSearch ? (
              <p>Cargando...</p>
            ) : (
              <>
                {tattoos.length == 0 && <p>No hay datos encontrados</p>}
                <GridMansory data={tattoos} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TattoItems;
