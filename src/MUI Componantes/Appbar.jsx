import React from "react";
import {
  Typography,
  Toolbar,
  AppBar,
  Avatar,
  Link,
  IconButton,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { Menu } from "@mui/icons-material";

export const Appbar = ({ drawerWidth, showDrwaer }) => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: theme.palette.textColour.main,
      }}
    >
      <Toolbar>
        <IconButton
          sx={{ color: "white", display: { sm: "none" } }}
          onClick={() => {
            showDrwaer();
          }}
        >
          <Menu />
        </IconButton>
        <Link
          color={"inherit"}
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": { fontSize: "large" },
          }}
        >
          My expenses
        </Link>
        <Typography mr={"10px"}>Khaled osama</Typography>
        <Avatar
          alt="khaled"
          src="./images/WhatsApp Image 2024-06-03 at 9.08.55 PM.jpeg"
        />
      </Toolbar>
    </AppBar>
  );
};
