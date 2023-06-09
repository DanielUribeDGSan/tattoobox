import React, { useState } from 'react';
import { MemoizedMapGoogle } from '../../googlemaps';
import { useLoadScript } from '@react-google-maps/api';

export const TabGoogleMaps = ({ dataProfile }) => {
  console.log(dataProfile);
  const [selected, setSelected] = useState();
  const [libraries] = useState(['places']);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) return <div>Cargando...</div>;

  return (
    <div style={{ padding: '1rem 0rem' }}>
      <MemoizedMapGoogle
        selected={selected}
        setSelected={setSelected}
        latParam={dataProfile?.Lat}
        lngParam={dataProfile?.Lon}
      />
    </div>
  );
};
