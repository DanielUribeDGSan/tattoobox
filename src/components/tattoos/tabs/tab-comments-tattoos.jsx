import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CommentsTattoo } from "../comments/comments-tattoo";

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

export const TabCommentsTattoos = ({ idContent }) => {
  const [value, setValue] = useState("1");

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
                label="Tatuajes"
                value="1"
                sx={{ padding: "0 10px", color: "black" }}
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
          ></TabPanel>
          <TabPanel value="2" sx={{ padding: 0, marginBottom: "30px" }}>
            <CommentsTattoo idContent={idContent} />
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </Box>
  );
};
