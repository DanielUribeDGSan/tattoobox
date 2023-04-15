import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CommentsTattoo } from "../comments/comments-tattoo";
import { GridMansoryNotModalTattoo } from "../../mansory/grid-mansory-not-modal-tattoo";

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

export const TabCommentsTattoos = ({ idContent, relatedTattoos = [] }) => {
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");

  const [value, setValue] = useState(movilIpadaScreen ? "1" : "2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
      }}
    >
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              backgroundColor: "var(--tp-common-white)",
              borderBlockColor: "transparent",
              zIndex: 99,
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="Tatuajes y comentarios"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Tab
                label="Relacionados"
                value="1"
                sx={{
                  padding: "0 10px",
                  color: "black",
                  display: movilIpadaScreen ? "flex" : "none",
                }}
              />
              <Tab
                label="Comentarios"
                value="2"
                sx={{ padding: "0 10px", color: "var(--tp-common-black)" }}
              />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{
              padding: 0,
              marginBottom: "30px",
            }}
          >
            <div className="mt-3">
              <GridMansoryNotModalTattoo data={relatedTattoos} />
            </div>
          </TabPanel>
          <TabPanel value="2" sx={{ padding: 0, marginBottom: "30px" }}>
            <CommentsTattoo idContent={idContent} />
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </Box>
  );
};
