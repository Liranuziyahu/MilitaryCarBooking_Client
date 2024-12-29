import React from "react";
import CarRentalInstructions from "../CarRentalInstructions/CarRentalInstructions";
import Form from "./Form";
import ScrollToTop from "../Router/ScrollToTop";

const FormPage = () => {
  return (
    <>
      <ScrollToTop /> {/* Add ScrollToTop component to reset scroll position on route changes */}
      <CarRentalInstructions />
      <Form />
    </>
  );
};

export default FormPage;
