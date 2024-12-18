// src/components/Form.js
import React, { useState } from "react";
import { isValidPhoneNumber } from "../utils/validators"; // Assuming you have the validator function
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { FormControl, Select, MenuItem } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { FormCard ,VisuallyHiddenInput } from "./FormCard"; 

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    familySize: "",
    carType: "",
    startDate: "",
    endDate: "",
    vacationCity: "", 
    hotelName: "",    
    file: null,
  });

  const [validationInput, setValidationInput] = useState({
    fullName: true,
    phoneNumber: true,
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.file) {
      if (formData.phoneNumber.toString().length < 6) return alert('מספר הפלאפון לא תקין');
      else {
        console.log(formData.vacationCity);
        
        const formDataToSend = new FormData();
        formDataToSend.append("fullName", formData.fullName);
        formDataToSend.append("familySize", formData.familySize);
        formDataToSend.append("carType", formData.carType);
        formDataToSend.append("startDate", formData.startDate);
        formDataToSend.append("endDate", formData.endDate);
        formDataToSend.append("vacationCity", formData.vacationCity);
        formDataToSend.append("hotelName", formData.hotelName);
        formDataToSend.append("file", formData.file);
        formDataToSend.append("phoneNumber", formData.phoneNumber);      
          
        // Send the form data to Make.com's webhook
        axios
          .post(process.env.REACT_APP_MAKE_API, formDataToSend, {
            headers: {
              "Content-Type": "multipart/form-data", // Required for file uploads
              "X-Origin": origin
            },
          })
          .then((result) => {
            alert("Form submitted successfully!");
          })
          .catch((err) => {
            console.error("Error sending data:", err);
            alert("There was an error submitting the form.");
          });
      }
    } else return alert("אנא צרף אסמכתא");
  };

  return (
    <FormCard title="הגשת פנייה">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
        }}
      >
        {/* Form Fields */}
        <FormControl>
          <FormLabel htmlFor="fullName">שם מלא</FormLabel>
          <TextField
            id="fullName"
            type="text"
            name="fullName"
            placeholder="שם מלא"
            required
            fullWidth
            variant="outlined"
            onChange={(e) => setFormData((prevData) => ({
              ...prevData,
              fullName: e.target.value,
            }))}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phoneNumber">מספר טלפון</FormLabel>
          <TextField
            error={!validationInput.phoneNumber}
            helperText={!validationInput.phoneNumber && "מספר לא תקין"}
            name="phoneNumber"
            placeholder="מספר טלפון"
            type="tel"
            id="phoneNumber"
            required
            fullWidth
            variant="outlined"
            onChange={(e) => {
              if (e.target.value.length > 6) {
                setFormData((prevData) => ({
                  ...prevData,
                  phoneNumber: e.target.value,
                }));
                setValidationInput((prevState) => ({
                  ...prevState,
                  phoneNumber: isValidPhoneNumber(e.target.value),
                }));
              }
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="familySize">מספר נפשות במשפחה</FormLabel>
          <TextField
            name="familySize"
            placeholder="מספר נפשות במשפחה"
            type="number"
            id="familySize"
            required
            fullWidth
            variant="outlined"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                familySize: e.target.value,
              }))
            }
          />
        </FormControl>
        <FormControl fullWidth required variant="outlined">
          <FormLabel id="car-type-label">סוג הרכב המבוקש</FormLabel>
          <Select
            labelId="car-type-label"
            id="carType"
            name="carType"
            value={formData.carType}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                carType: e.target.value,
              }))
            }
            label="סוג הרכב המבוקש"
          >
            <MenuItem value="">
              <em>בחר...</em>
            </MenuItem>
            <MenuItem value="רכב משפחתי (עד 5 נפשות)">רכב משפחתי (עד 5 נפשות)</MenuItem>
            <MenuItem value="רכב רמב״י (עד 8 נפשות)">רכב רמב״י (עד 8 נפשות)</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="startDate">תאריך התחלה</FormLabel>
          <TextField
            name="startDate"
            placeholder="תאריך התחלה"
            type="date"
            id="startDate"
            required
            fullWidth
            variant="outlined"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                startDate: e.target.value,
              }))
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="endDate">תאריך סיום</FormLabel>
          <TextField
            name="endDate"
            placeholder="תאריך סיום"
            type="date"
            id="endDate"
            required
            fullWidth
            variant="outlined"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                endDate: e.target.value,
              }))
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="vacationCity">עיר נופש</FormLabel>
          <TextField
            id="vacationCity"
            type="text"
            name="vacationCity"
            placeholder="עיר נופש"
            required
            fullWidth
            variant="outlined"
            onChange={(e) => setFormData((prevData) => ({
              ...prevData,
              vacationCity: e.target.value,
            }))}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="hotelName">שם מלון</FormLabel>
          <TextField
            id="hotelName"
            type="text"
            name="hotelName"
            placeholder="שם מלון"
            required
            fullWidth
            variant="outlined"
            onChange={(e) => setFormData((prevData) => ({
              ...prevData,
              hotelName: e.target.value,
            }))}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="file">צירוף אסמכתא</FormLabel>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            sx={{ gap: 1 }}
            startIcon={<CloudUploadIcon />}
          >
            צירוף אסמכתא
            <VisuallyHiddenInput
              type="file"
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  file: e.target.files[0] ? e.target.files[0] : null,
                }))
              }
              multiple
            />
          </Button>{" "}
        </FormControl>
        
        <Divider />
        <Button type="submit" fullWidth variant="outlined">
          הגשת פנייה
        </Button>
      </Box>
    </FormCard>
  );
};

export default Form;
