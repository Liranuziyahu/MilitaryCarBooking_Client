// src/components/FormCard.js
import React from "react";
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import Typography from "@mui/material/Typography";

// Styled Card component
const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 10,
  minWidth: "unset !important",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow: "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow: "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

// FormCard Component
const FormCard = ({ title, children }) => {
  return (
    <Card variant="outlined" sx={{ direction: "rtl", minWidth: 300 }}>
      <Typography component="h1" variant="h4" sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}>
        {title}
      </Typography>
      {children}
    </Card>
  );
};

export { FormCard, VisuallyHiddenInput };
