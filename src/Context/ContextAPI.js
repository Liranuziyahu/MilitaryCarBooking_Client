import React, { createContext, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Context = createContext();

const ContextAPI = ({ children }) => {
  const [submitted, setSubmmited] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Context.Provider
      value={{
        submitted,
        setSubmmited,
        isSmallScreen
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextAPI;
