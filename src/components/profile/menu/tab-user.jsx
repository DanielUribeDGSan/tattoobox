import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ModalCentered } from "../../utils/modals/modalCentered";
import { Header } from "./header";
import { Publication } from "../publication/publication";
import { Tatuajes } from "../grid/tatuajes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormUploadTattoo } from "../../utils/forms/form-upload-tattoo";

const theme = createTheme({
  palette: {
    primary: {
      main: "#13212c",
    },
    secondary: {
      main: "#13212c",
    },
  },
});

export const TabUser = ({ dataProfile, user }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          typography: "body1",
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              backgroundColor: "var(--tp-common-white)",
              padding: "0px",
              position: "sticky",
              top: 0,
              padding: "0px 20px 10px 20px",
              borderRadius: " 0px 0px 10px 10px",
              zIndex: 99,
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Tatuajes" value="1" />
              <Tab label="Comentarios" value="2" />
              {/* <Tab label="Información adicional" value="3" /> */}
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ padding: 0 }}>
            <div className="container">
              <Tatuajes tattoosData={dataProfile?.Tatuajes} user={user} />
            </div>
          </TabPanel>
          <TabPanel value="2" sx={{ padding: 0 }}>
            <div className="container">
              <Tatuajes tattoosData={dataProfile?.Tatuajes} user={user} />
            </div>
          </TabPanel>
        </TabContext>
        <ModalCentered idModal={"uploadTattooModal"}>
          {user?.idTipoPerfil > 1 ? (
            <FormUploadTattoo />
          ) : (
            <p className="text-black">
              Necesitas ser artista o estudio para poder subir tatuajes
            </p>
          )}
        </ModalCentered>
      </Box>
    </ThemeProvider>
  );
};
