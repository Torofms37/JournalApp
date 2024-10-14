import { Box } from "@mui/material";
import React from "react";
import { Navbar, Sidebar } from "../components";

const drawerWith = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWith={drawerWith} />
      <Sidebar drawerWith={drawerWith} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};
