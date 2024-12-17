import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OgedatAvish from '../assets/OgedatAvish.png'
import PikodMarcaz from '../assets/PikodMarcaz.png'
import Atel from '../assets/Atel.png'
import LogistikaUgdaAvish from '../assets/LogistikaUgdaAvish.png'

const Header = () => {
  return (
    <Box sx={{position:"sticky", top: 0 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{gap:1}}>
          <img src={Atel} alt="LogoAtel" style={{ width: 30, height: 30 }} />
          <img src={PikodMarcaz} alt="LogoPikodMarcaz" style={{ width: 30, height: 30 }} />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" sx={{ textAlign: "center", flexGrow: 1 }}>
            <div>
            טופס הזמנת רכב
            לטובת נופש
            </div>
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="menu" sx={{gap:1}}>
          <img src={OgedatAvish} alt="LogoOgedatAvish" style={{ width: 25, height: 30 }} />
          <img src={LogistikaUgdaAvish} alt="LogoLogistikaUgdaAvish" style={{ width: 30, height: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
