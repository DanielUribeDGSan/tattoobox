import { SelectCheckbox } from "../selects/selectCheckbox";
import Select from "react-select";

export const FormFilters = ({
  searchState,
  setSearchState,
  stateCountryState,
  setStateCountryState,
  styleState,
  setStyleState,
  priceState,
  setPriceState,
  dataStateCountry,
  dataStyles,
  dataPrices,
  isClearable,
  setIsClearable,
}) => {
  const handleChnageSearch = (e) => {
    setSearchState(e.target.value);
  };

  const handleChangeState = (states) => {
    setStateCountryState(states);
  };

  const handleChangeStyle = (styles) => {
    setStyleState(styles);
  };

  const handleChangePrice = (prices) => {
    setPriceState(prices);
  };

  return (
    <div className="filters">
      <div className="row grid gx-3 pb-50">
        <div className="col-xl-4 col-lg-4 col-md-4 p-0 m-0">
          <div className="input-search">
            <input
              type="text"
              placeholder="Buscar tatuaje"
              name="searchTxt"
              id="searchTxt"
              onChange={handleChnageSearch}
              value={searchState || ""}
            />
            {/* <span></span> */}
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 p-0 m-0">
          <Select
            className="react-select-container-filters"
            classNamePrefix="react-select-filters"
            name="estadosTxt"
            id="estadosTxt"
            options={dataStateCountry}
            onChange={handleChangeState}
            placeholder="Estado"
            instanceId="estado"
            isClearable={isClearable}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#fff",
                primary: "#263946",
              },
            })}
            value={stateCountryState || ""}
          />
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 p-0 m-0">
          <Select
            className="react-select-container-filters2"
            classNamePrefix="react-select-filters2"
            name="estilosTxt"
            id="estilosTxt"
            options={dataStyles}
            isMulti
            hideSelectedOptions={false}
            placeholder="Estilos"
            onChange={handleChangeStyle}
            instanceId="estilos"
            components={{
              Option: SelectCheckbox,
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#fff",
                primary: "#263946",
              },
            })}
            value={styleState || ""}
          />
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 p-0 m-0">
          <Select
            className="react-select-container-filters3"
            classNamePrefix="react-select-filters3"
            name="preciosTxt"
            id="preciosTxt"
            isMulti
            multiple
            placeholder="Precios"
            options={dataPrices}
            hideSelectedOptions={false}
            onChange={handleChangePrice}
            // isOptionDisabled={() => estiloState.length >= 2}
            instanceId="precio"
            components={{
              Option: SelectCheckbox,
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#fff",
                primary: "#263946",
              },
            })}
            value={priceState || ""}
          />
        </div>
      </div>
    </div>
  );
};
