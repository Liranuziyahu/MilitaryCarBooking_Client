import React, { useContext } from "react";
import Header from "./Header/Header";
import Router from "./Router/router";
import DialogSubmitted from "./Popup/Submitted";
import { Context } from "./Context/ContextAPI";
import Footer from "./Footer/Footer";

function App() {
  const { isSmallScreen } = useContext(Context);
  return (
    <>
      <div style={{ minHeight: "100vh", display: "flex" }}>
        <Header isSmallScreen={isSmallScreen}></Header>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            flexWrap: "wrap",
            marginTop: isSmallScreen ? 60 : 80,
            width: "100vw",
          }}
        >
          <Router></Router>
        </div>
        <DialogSubmitted></DialogSubmitted>
      </div>
      <Footer />
    </>
  );
}

export default App;
