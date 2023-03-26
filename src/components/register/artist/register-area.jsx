import Link from "next/link";
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLoadScript } from "@react-google-maps/api";
import { RegisterArtist } from "../../forms/register-artist";
import { MemoizedMapGoogle } from "../../googlemaps";

const RegisterArea = () => {
  const [selected, setSelected] = useState("");
  const [showImage, setShowImage] = useState(true);
  const [libraries] = useState(["places"]);
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });
  if (!isLoaded) return <div>Cargando...</div>;

  return (
    <>
      <div className="tp-register-artist-area">
        <div className="row h-100 m-0 p-0">
          <div
            className="col-xl-4 col-lg-4 col-12 artist-content m-0 p-0"
            style={{
              height: !showImage && movilIpadaScreen ? "50vh" : "100vh",
            }}
          >
            <RegisterArtist
              selected={selected}
              setSelected={setSelected}
              setShowImage={setShowImage}
            />
          </div>
          <div className="col-xl-8 col-lg-8 col-12 artist-banner m-0 p-0">
            {!showImage ? (
              <MemoizedMapGoogle
                selected={selected}
                setSelected={setSelected}
              />
            ) : (
              <img
                src="/assets/img/register/banner-hands.jpeg"
                className="w-100 h-100 d-none-movil"
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterArea;
