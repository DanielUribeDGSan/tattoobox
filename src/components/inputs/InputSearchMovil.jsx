import React from "react";

export const IputSearchMovil = ({ searchState, setSearchState }) => {
  const handleSearchChange = (e) => {
    setSearchState(e.target.value);
  };

  return (
    <div className="input-search">
      <input
        type="text"
        placeholder="Buscar tatuaje"
        name="searchTxt"
        id="searchTxt"
        onChange={handleSearchChange}
        value={searchState || ""}
      />
      {/* <span></span> */}
    </div>
  );
};
