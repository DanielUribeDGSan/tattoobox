import React, { memo, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

export const MapGoogle = ({ selected, setSelected }) => {
  const [markerPosition, setMarkerPosition] = useState({
    lat: 19.3907336,
    lng: -99.1436127,
  });

  const handleMarkerDrag = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setMarkerPosition({
      lat: lat,
      lng: lng,
    });
    setSelected({ lat, lng });
  };
  return (
    <>
      <GoogleMap
        zoom={17}
        center={selected ? selected : markerPosition}
        mapContainerClassName="google-map-container"
      >
        {selected && (
          <Marker
            position={selected}
            draggable={true}
            onDragEnd={handleMarkerDrag}
          />
        )}
      </GoogleMap>
    </>
  );
};

export const MemoizedMapGoogle = memo(MapGoogle);
