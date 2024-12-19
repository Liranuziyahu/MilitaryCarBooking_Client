import React from "react";
import Header from "./Header/Header";
import Router from "./Router/Router";

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
