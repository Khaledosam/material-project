import React from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  IconButton,
  Box,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
function Drawerr({
  drawerWidth,
  setmyMode,
  drawerNone,
  drawerType,
  hideDrwaer,
}) {
  const theme = useTheme();
  const currentLocaton = useLocation();
  const navigate = useNavigate();

  const myList = [
    {
      text: "Home",
      icon: <Home />,
      path: "/",
    },
    {
      text: "Create",
      icon: <Create />,
      path: "/create",
    },
    {
      text: "Profile",
      icon: <Person2 />,
      path: "/profile",
    },
    {
      text: "Setting",
      icon: <Settings />,
      path: "/setting",
    },
  ];
  return (
    <Box component={"nav"}>
      <Drawer
        sx={{
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
          display: { xs: drawerNone, sm: "block" },
        }}
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={() => {
          hideDrwaer();
        }}
      >
        <List>
          <ListItem
            disablePadding
            sx={{ display: "flex", justifyContent: "center", mb: "16px" }}
          >
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setmyMode(theme.palette.mode === "light" ? "dark" : "light");
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "orange" }} />
              ) : (
                <Brightness4 sx={{ color: "blue" }} />
              )}
            </IconButton>
          </ListItem>
          <Divider />

          {myList.map((item) => {
            return (
              <ListItem
                key={item.text}
                disablePadding
                sx={{
                  bgcolor:
                    currentLocaton.pathname === item.path
                      ? // @ts-ignore
                        theme.palette.favColour.main
                      : null,
                }}
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}

export default Drawerr;
