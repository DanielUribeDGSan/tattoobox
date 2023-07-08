import React, { useCallback, useEffect, useState } from 'react';
import useTattoboxCatalogApi from '../../../hooks/use-tattobox-catalog-api';

export const InputType4 = ({
  data,
  onChangeFunction,
  inputValue,
  label,
  name,
}) => {
  const { isLoading, getStyles, styleData } = useTattoboxCatalogApi();
  const [checkbox, setCheckbox] = useState([]);

  const memoizedGetStyles = useCallback(getStyles, []);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      // Agregar el valor al array de checkboxes si está marcado
      setCheckbox([...checkbox, value]);
    }

    onChangeFunction([...checkbox, value]);
  };

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

  return (
    <div className='row p-0 m-0 w-100'>
      {styleData.map((item, index) => (
        <div className='col-6' key={index}>
          <label className='checkbox-image'>
            <input
              value={item?.id}
              name={name}
              type='checkbox'
              onChange={handleCheckboxChange}
            />
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
