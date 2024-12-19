import React from "react";
import { IconButton, Typography, Toolbar, Box, AppBar } from "@mui/material";
import OgedatAvish from "../assets/OgedatAvish.png";
import PikodMarcaz from "../assets/PikodMarcaz.png";
import Atel from "../assets/Atel.png";
import LogistikaUgdaAvish from "../assets/LogistikaUgdaAvish.png";

const Header = ({ isSmallScreen }) => {
  const iconSize = isSmallScreen ? 30 : 50;

  return (
    <Box sx={{ position: "fixed", top: 0, zIndex: 1, width: "100vw" }}>
      <AppBar position="static" sx={{ height: isSmallScreen ? 60 : 80 }}>
        <Toolbar variant="dense" sx={{ height: "100%" }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ gap: 1 }}>
            <img src={Atel} alt="LogoAtel" style={{ width: iconSize, height: iconSize }} />
            <img src={PikodMarcaz} alt="LogoPikodMarcaz" style={{ width: iconSize, height: iconSize }} />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" sx={{ textAlign: "center", flexGrow: 1 }}>
            <div style={{ fontSize: isSmallScreen ? "0.9rem" : "1.4rem" }}>
              <div>טופס רישום להזמנת רכב</div>
              <div>לנופש מבצעי</div>
            </div>
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="menu" sx={{ gap: 1 }}>
            <img src={OgedatAvish} alt="LogoOgedatAvish" style={{ width: isSmallScreen ? 25 : 45, height: iconSize }} />
            <img
              src={LogistikaUgdaAvish}
              alt="LogoLogistikaUgdaAvish"
              style={{ width: isSmallScreen ? 35 : 60, height: iconSize }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
