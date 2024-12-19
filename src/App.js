import React from "react";
import Header from "./Header/Header";
import Router from "./Router/Router";
import { useMediaQuery } from "@mui/material";

function App() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      <Header isSmallScreen={isSmallScreen}></Header>
      <div style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", marginTop: isSmallScreen ? 60 : 80  ,width:'100vw' ,padding:!isSmallScreen && 20}}>
        <Router></Router>
      </div>
    </div>
  );
}

export default App;
