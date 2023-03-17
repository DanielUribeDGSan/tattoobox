import { SelectCheckbox } from "../selects/selectCheckbox";
import Select from "react-select";

export const FormFiltersMovil = ({
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
    <div className="filters w-100">
      <div className="row grid gx-3 m-0">
        <div className="col-4 p-0 m-0">
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
            isSearchable={false}
            menuShouldScrollIntoView={false}
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
        <div className="col-4 p-0 m-0">
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
            isSearchable={false}
            menuShouldScrollIntoView={false}
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
        <div className="col-4 p-0 m-0">
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
            isSearchable={false}
            menuShouldScrollIntoView={false}
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
