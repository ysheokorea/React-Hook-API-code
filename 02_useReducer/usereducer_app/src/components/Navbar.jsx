import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const [drawOpen, setDrawOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar sx={{ backgroundColor: "#111" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            useReducer App
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <Link to="/bank">
              <Typography color="white">Bank</Typography>
            </Link>
            <Link to="/school">
              <Typography color="white">School</Typography>
            </Link>
            <Link to="/page">
              <Typography color="white">Page</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={drawOpen} onClose={() => setDrawOpen(false)}>
        <List>
          <ListItem>
            <ListItemButton>
              <Settings />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
