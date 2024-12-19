import React, { useState } from "react";
import Header from "./Header/Header";
import NofeshIntro from "./NofeshIntro/NofeshIntro";
import FormPage from "./Form/FormPage";
import Router from "./Router/Router";

const formWarp = {
  boxSizing: "border-box",
  padding: "10px",
  maxWidth: "100vw",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row-reverse",
  flexWrap: "wrap",
  marginTop: 8,
  flex: 1,
};

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header></Header>
      <div style={{ display: "flex", flexDirection: "row-reverse",flexWrap: 'wrap' ,marginTop:100}}>
        <Router></Router>
      </div>
    </div>
  );
}

export default App;
