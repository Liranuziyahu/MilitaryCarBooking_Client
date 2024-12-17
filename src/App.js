import React from "react";
import Form from "./Form/Form";
import CarRentalInstructions from "./CarRentalInstructions/CarRentalInstructions";

function App() {
  const appStyle = {
    boxSizing: "border-box",
    padding: "10px",
    maxHeight: "100vh",
    maxWidth: "100vw",
    overflowX: "hidden",
  };
  return (
    <div style={appStyle}>
      <CarRentalInstructions></CarRentalInstructions>
      <Form></Form>
    </div>
  );
}

export default App;
