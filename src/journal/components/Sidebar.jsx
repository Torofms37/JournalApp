import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";
import { SidebarItems } from "./SidebarItems";

export const Sidebar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  return (
    <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        open
        variant="permanent"
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component={"div"}>
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <SidebarItems key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
