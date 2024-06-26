import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Appbar } from "MUI Componantes/Appbar";
import Drawerr from "MUI Componantes/Drawerr";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import getDesignTokens from "styles/theme";
const drawerWidth = 240;

function Root() {
  const [mode, setmyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const [drawerNone, setDrwaerNone] = useState("none");
  const [drawerType, setDrwaerType] = useState("permanent");
  const showDrwaer = () => {
    setDrwaerType("temporary");
    setDrwaerNone("block");
  };
  const hideDrwaer = () => {
    setDrwaerType("permanent");
    setDrwaerNone("none");
  };
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar
          // @ts-ignore
          {...{ drawerWidth, showDrwaer }}
        />
        <Drawerr
          {...{ drawerWidth, setmyMode, drawerNone, drawerType, hideDrwaer }}
        />
        <Box
          component={"main"}
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "60px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Root;
