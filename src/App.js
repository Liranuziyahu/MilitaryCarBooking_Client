import React, { useState } from "react";
import Form from "./Form/Form";
import CarRentalInstructions from "./CarRentalInstructions/CarRentalInstructions";
import Header from "./Header/Header";
import NofeshIntro from "./NofeshIntro/NofeshIntro";

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
  const [nofeshIntro, setNofeshIntro] = useState(true);
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: '100vh' }}>
      <Header></Header>
      {nofeshIntro ? (
        <NofeshIntro setNofeshIntro={setNofeshIntro} />
      ) : (
        <div style={formWarp}>
          <CarRentalInstructions></CarRentalInstructions>
          <Form></Form>
        </div>
      )}
    </div>
  );
}

export default App;
