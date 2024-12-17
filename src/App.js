import React from "react";
import Form from "./Form/Form";
import CarRentalInstructions from "./CarRentalInstructions/CarRentalInstructions";
import Header from "./Header/Header";

function App() {
  const appStyle = {
    boxSizing: "border-box",
    padding: "10px",
    maxWidth: "100vw",
    overflow: "hidden",
    display:'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    marginTop:8
  };
  return (
    <>
    <Header></Header>
    <div style={appStyle}>
      <CarRentalInstructions></CarRentalInstructions>
      <Form></Form>
    </div>
    </>
  );
}

export default App;
