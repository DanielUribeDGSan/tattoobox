import { SelectCheckbox } from '../selects/selectCheckbox';
import Select from 'react-select';

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
  typeForm,
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

  const columSearch =
    typeForm === 'tattoos'
      ? 'col-xl-4 col-lg-4 col-md-4 p-0 m-0'
      : 'col-xl-6 col-lg-6 col-md-6 p-0 m-0';

  return (
    <div className='filters'>
      <div className='row grid gx-3 '>
        <div className={columSearch}>
          <div className='input-search'>
            <input
              aria-label='Busqueda'
              type='text'
              placeholder={
                typeForm === 'tattoos'
                  ? 'Buscar tatuaje'
                  : typeForm === 'artist'
                  ? 'Buscar artista'
                  : 'Buscar estudio'
              }
              name='searchTxt'
              id='searchTxt'
              onChange={handleChnageSearch}
              value={searchState || ''}
            />
            {/* <span></span> */}
          </div>
        </div>
        <div className='col-xl-3 col-lg-3 col-md-3 p-0 m-0'>
          <Select
            aria-label='Estados'
            className='react-select-container-filters'
            classNamePrefix='react-select-filters'
            name='estadosTxt'
            id='estadosTxt'
            options={dataStateCountry}
            onChange={handleChangeState}
            placeholder='Estado'
            instanceId='estado'
            isClearable={isClearable}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#fff',
                primary: 'transparent',
              },
            })}
            value={stateCountryState || ''}
          />
        </div>
        <div className='col-xl-3 col-lg-3 col-md-3 p-0 m-0'>
          <Select
            aria-label='Estilos'
            className='react-select-container-filters2'
            classNamePrefix='react-select-filters2'
            name='estilosTxt'
            id='estilosTxt'
            options={dataStyles}
            isMulti
            hideSelectedOptions={false}
            placeholder='Estilos'
            onChange={handleChangeStyle}
            instanceId='estilos'
            components={{
              Option: SelectCheckbox,
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                primary25: '#fff',
                primary: 'transparent',
              },
            })}
            value={styleState || ''}
          />
        </div>

        {typeForm === 'tattoos' && (
          <div className='col-xl-2 col-lg-2 col-md-2 p-0 m-0'>
            <Select
              aria-label='Precios'
              className='react-select-container-filters3'
              classNamePrefix='react-select-filters3'
              name='preciosTxt'
              id='preciosTxt'
              isMulti
              multiple
              placeholder='Precios'
              options={dataPrices}
              hideSelectedOptions={false}
              onChange={handleChangePrice}
              // isOptionDisabled={() => estiloState.length >= 2}
              instanceId='precio'
              components={{
                Option: SelectCheckbox,
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: '#fff',
                  primary: 'transparent',
                },
              })}
              value={priceState || ''}
            />
          </div>
        )}
      </div>
    </div>
  );
};
