import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Header } from "./header";
import { Publication } from "../publication/publication";
import { Tatuajes } from "../grid/tatuajes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
  },
});

export const TabUser = () => {
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
              <Tab label="Publicaciones" value="1" />
              <Tab label="Mis tatuajes" value="2" />
              <Tab label="Información adicional" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ padding: 0 }}>
            <div className="row m-0 pb-20">
              <div className="col-xl-5 col-lg-5 col-12 m-0 header-col">
                <Header />
              </div>
              <div
                className="col-xl-7 col-lg-7 col-12 m-0"
                style={{ paddingRight: 0 }}
              >
                <Publication />
                <Publication />
                <Publication />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2" sx={{ padding: 0 }}>
            <div className="container">
              <Tatuajes />
            </div>
          </TabPanel>
          <TabPanel value="3" sx={{ padding: 0 }}>
            <div>
              <p>Hol</p>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
};
