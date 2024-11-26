import { LoginOutlined, MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { startLogout } from "../../store/auth";

export const Navbar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            Journal App
          </Typography>

          <Link component={RouterLink} color="inherit" to="/auth/login">
            <IconButton color="error" onClick={onLogout}>
              <LoginOutlined />
            </IconButton>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
