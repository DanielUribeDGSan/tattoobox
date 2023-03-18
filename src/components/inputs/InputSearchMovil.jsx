import React, { memo } from "react";

export const IputSearchMovil = ({ searchState, setSearchState }) => {
  const handleChangeSearch = (e) => {
    setSearchState(e.target.value);
  };

  return (
    <div className="input-search">
      <input
        type="text"
        placeholder="Buscar tatuaje"
        name="searchTxt"
        id="searchTxt"
        onChange={handleChangeSearch}
        value={searchState || ""}
      />
      {/* <span></span> */}
    </div>
  );
};
