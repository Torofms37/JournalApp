import { TurnedInNot } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Grid } from "@mui/system";
import React from "react";

export const Sidebar = ({ drawerWith = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{ with: { sm: drawerWith }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWith },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Toro el bolas
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {["enero", "ttt", "ttttt"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text}></ListItemText>
                  <ListItemText
                    secondary={"lorgit pusem fsdfff sdffd dfsffdsf dfsf"}
                  ></ListItemText>
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
