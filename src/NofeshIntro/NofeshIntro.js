import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NofeshIntro = () => {
  const Navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f5f5f5",
        textAlign: "right",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 600 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: "bold", marginBottom: 2, textAlign: "center" }}>
          תכנית ׳שייכות לוגיסטית׳
        </Typography>
        <div style={{ textAlign: "right", direction: "rtl" }}>
          <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.8 }}>
            תכנית ׳שייכות לוגיסטית׳ היא תכנית אנשים לשיפור איכות וחווית המשרתים לאנשי הקבע באוגדת איוש.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.8 }}>
            כחלק מהתכנית הוקם חניון רכבים ייעודי ׳הזמן וסע׳, שתכליתו לתת מענה ולשפר את חווית הנסיעה לנופש מבצעי לכם
            ולבני משפחותכם דרך אתר זה תוכל להזמין רכב לפי הרכב המשפחה.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.8 }}>
            הזמנת הרכב היא לטובת נופש מבצעי בלבד, ובצירוף אסמכתא עדכנית לאחר הזמנת הנופש.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.8 }}>
            מלאי הרכבים מוגבל ושיבוץ רכב מבוצע על בסיס מקום פנוי וזמינות רכבים במערכת הממוחשבת.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.8 }}>
            הזמנת הרכב לנופש היא לפי מחזורים סדורים, כאשר את הרכב ניתן לקבל יום לפני ולהחזיר יום לאחר סיום הנופש בהתאם
            לתאריך החופשה.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.8 }}>
            המערך הלוגיסטי באוגדת איו״ש מאחל לכם חופשה מהנה ונעימה.
          </Typography>
        </div>
        <Button variant="contained" color="primary" sx={{ marginTop: 3 }} onClick={() => Navigate("/form")}>
          להגשת פנייה
        </Button>
      </Paper>
    </Box>
  );
};

export default NofeshIntro;
