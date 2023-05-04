import React from 'react';

export const IputSearchMovil = ({
  searchState,
  setSearchState,
  placeholder,
}) => {
  const handleChangeSearch = (e) => {
    setSearchState(e.target.value);
  };

  return (
    <div className='input-search'>
      <input
        aria-label='Busqueda'
        type='text'
        placeholder={placeholder}
        name='searchTxt'
        id='searchTxt'
        onChange={handleChangeSearch}
        value={searchState || ''}
      />
      {/* <span></span> */}
    </div>
  );
};
