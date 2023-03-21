import React, { memo, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

export const MapGoogle = ({ selected }) => {
  const center = { lat: 19.3907336, lng: -99.1436127 };

  return (
    <>
      <GoogleMap
        zoom={17}
        center={selected ? selected : center}
        mapContainerClassName="google-map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
};

export const MemoizedMapGoogle = memo(MapGoogle);
