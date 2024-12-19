import React, { useContext } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Context } from "../Context/ContextAPI";

const Submitted = () => {
  const { submitted, setSubmmited } = useContext(Context);

  return (
    <Dialog open={submitted} sx={{ textAlign: "right" }} onClose={() => setSubmmited(false)} onLoad={setTimeout(()=>{setSubmmited(false)},3000)}>
      <DialogTitle>{"!הבקשה הוגשה בהצלחה"}</DialogTitle>
      <DialogContent sx={{ textAlign: "right", direction: "rtl" }}>
        <p>{"תודה על שליחת הבקשה, בקשתך תבחן ורמ\"ד הרכב האוגדתי ייצור איתך קשר בהקדם האפשרי."}</p>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={() => setSubmmited(false)}>
          אישור
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Submitted;
