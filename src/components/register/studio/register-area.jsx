import Link from "next/link";
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLoadScript } from "@react-google-maps/api";
import { MemoizedMapGoogle } from "../../googlemaps";
import { RegisterStudio } from "../../forms/register-studio";

const RegisterArea = () => {
  const [selected, setSelected] = useState("");
  const [showMap, setShowMap] = useState(false);
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
        <div className="row  m-0 p-0 h-100">
          <div
            className="col-xl-4 col-lg-4 col-12 artist-content m-0 p-0 position-relative"
            // style={{
            //   height: !showImage && movilIpadaScreen ? "50vh" : "100vh",
            // }}
          >
            <RegisterStudio
              selected={selected}
              setSelected={setSelected}
              setShowImage={setShowImage}
            />
          </div>
          <div
            className="col-xl-8 col-lg-8 col-12 artist-banner m-0 p-0"
            style={{
              height: !showMap && movilIpadaScreen ? "auto" : "100vh",
            }}
          >
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
