import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useUser } from '../../../hooks/use-user';
import { useTattoBoxFilters } from '../../../hooks/use-tattobox-filters';
import { useTattoBoxFormDataFilters } from '../../../hooks/use-tattobox-form-data-filters';
import { FormFiltersMovil } from '../../utils/forms/form-filters-movil';
import { IputSearchMovil } from '../../utils/inputs/InputSearchMovil';
import { FormFilters } from '../../utils/forms/form-filters';
import { GridMansory } from '../../utils/mansory/grid-mansory';

const TattoItems = () => {
  // Hooks
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const { user, isLoadingUser } = useUser();
  const [searchState, setSearchState] = useState('');
  const [stateCountryState, setStateCountryState] = useState('');
  const [styleState, setStyleState] = useState([]);
  const [priceState, setPriceState] = useState([]);
  const [isClearable, setIsClearable] = useState(true);
  const [page, setPage] = useState(1);
  const [showPage, setShowPage] = useState(true);

  const movilIpadaScreen = useMediaQuery('(max-width:1000px)');

  const { id: idContentRoute } = router.query;

  // Custom hooks
  const { getTattoos } = useTattoBoxFilters();
  const memoizedGetTattoos = useCallback(getTattoos, []);

  const { isLoading, dataStateCountry, dataStyles, dataPrices } =
    useTattoBoxFormDataFilters();

  const {
    isLoading: isLoadingSearch,
    data: tattoos,
    isError,
    error,
  } = useQuery({
    queryKey: [
      'tattoos',
      page,
      searchState,
      stateCountryState,
      styleState,
      priceState,
    ],
    queryFn: memoizedGetTattoos,
  });

  if (error && isError)
    return (
      <p className='text-black'>
        Tuvimos problema al caragar el servicio, intentelo mas tarde
      </p>
    );

  if (!tattoos && showPage) return <p className='text-black'>Cargando...</p>;

  if (showPage) setShowPage(false);

  return (
    <>
      <div
        className='tp-portfolio-area pt-50 pb-100 p-custom p-relative'
        style={{ paddingTop: movilIpadaScreen ? '20px' : '50px' }}
      >
        <div className='container'>
          {/* filtros  */}
          {movilIpadaScreen && (
            <div
              className='input-content-movil filters mb-4'
              style={{
                backgroundColor: 'var(--tp-common-white)',
                borderRadius: '10px',
              }}
            >
              <IputSearchMovil
                searchState={searchState}
                setSearchState={setSearchState}
                placeholder={'Buscar tatuaje'}
              />
              <div className='w-100 d-flex align-items-center justify-content-center'>
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
                  typeForm={'tattoos'}
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
                typeForm={'tattoos'}
              />
            </div>
          )}
          {/* filtros end */}
          <div>
            {isLoading || isLoadingSearch || isLoadingUser ? (
              <p className='text-black'>Cargando...</p>
            ) : (
              <>
                {tattoos?.length == 0 && <p>No hay datos encontrados</p>}
                <GridMansory
                  data={tattoos}
                  user={user}
                  idContentRoute={idContentRoute}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TattoItems;
