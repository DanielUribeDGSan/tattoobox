import React, { useCallback, useEffect } from 'react';
import { TextareaAutosize } from '@mui/material';
import useTattoboxCatalogApi from '../../../hooks/use-tattobox-catalog-api';

export const InputType4 = ({
  data,
  onChangeFunction,
  inputValue,
  label,
  name,
}) => {
  const { isLoading, getStyles, styleData } = useTattoboxCatalogApi();

  const memoizedGetStyles = useCallback(getStyles, []);

  useEffect(() => {
    let isActive = true;

    const getData = async () => {
      await memoizedGetStyles();
    };

    if (isActive) {
      getData();
    }

    return () => {
      isActive = false;
    };
  }, [isLoading]);

  if (isLoading) {
    return <p className='text-black'>Cargando...</p>;
  }
  console.log(styleData);
  return (
    <div className='row p-0 m-0 w-100'>
      {styleData.map((item, index) => (
        <div className='col-6' key={index}>
          <label className='checkbox-image'>
            <input type='checkbox' />
            <span className='image-overlay'></span>
            <span className='name-image'>{item?.nombre}</span>
            <img
              src={`https://catalog.tattoobox.mediaserviceagency.com/storage/${item?.imagen}`}
              alt='tattoobox'
            />
          </label>
        </div>
      ))}
    </div>
  );
};
