import { SelectCheckbox } from "../selects/selectCheckbox";
import Select from "react-select";

export const FormFiltrosMovil = ({
  estadoState,
  setEstadoState,
  estiloState,
  setEstiloState,
  precioState,
  setPrecioState,
  selectEstados,
  selectEstilos,
  selectPrecios,
  isClearable,
  setIsClearable,
}) => {
  const handleSelectEstadoChange = (estados) => {
    setEstadoState(estados);
  };

  const handleSelectEstiloChange = (estilos_onchange) => {
    setEstiloState(estilos_onchange);
  };

  const handleSelectPrecioChange = (precios_onchange) => {
    setPrecioState(precios_onchange);
  };

  return (
    <div className="filtros">
      <div className="row grid gx-3 pb-50">
        <div className="col-xl-4 col-lg-4 col-md-4 p-0 m-0"></div>
        <div className="col-xl-3 col-lg-3 col-md-3 p-0 m-0">
          <Select
            className="react-select-container-filtros"
            classNamePrefix="react-select-filtros"
            name="estadosTxt"
            id="estadosTxt"
            options={selectEstados}
            onChange={handleSelectEstadoChange}
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
            value={estadoState || ""}
          />
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 p-0 m-0">
          <Select
            className="react-select-container-filtros2"
            classNamePrefix="react-select-filtros2"
            name="estilosTxt"
            id="estilosTxt"
            options={selectEstilos}
            isMulti
            hideSelectedOptions={false}
            placeholder="Estilos"
            onChange={handleSelectEstiloChange}
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
            value={estiloState || ""}
          />
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 p-0 m-0">
          <Select
            className="react-select-container-filtros3"
            classNamePrefix="react-select-filtros3"
            name="preciosTxt"
            id="preciosTxt"
            isMulti
            multiple
            placeholder="Precios"
            options={selectPrecios}
            hideSelectedOptions={false}
            onChange={handleSelectPrecioChange}
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
            value={precioState || ""}
          />
        </div>
      </div>
    </div>
  );
};
