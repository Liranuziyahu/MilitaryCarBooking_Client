import React, { useState } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";

const LogisticIntro = ({setNofeshIntro}) => {

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
        flex:1
      }}
    >
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 600 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: "bold", marginBottom: 2, textAlign: "center" }}>
          תכנית ׳שייכות לוגיסטית׳
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.8 }}>
          תכנית ׳שייכות לוגיסטית׳ היא תכנית אנשים לשיפור איכות וחווית המשרתים לאנשי הקבע בחילות אט״ל באוגדת איו״ש. כחלק
          מהתכנית הוקם חניון רכבים ייעודי ׳הזמן וסע׳ שתכליתו לתת מענה ולשפר את חווית הנסיעה לנופש מבצעי לכם ולבני
          משפחותכם. דרך אתר זה תוכל להזמין רכב לפי הרכב המשפחה.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.8 }}>
          הזמנת הרכב היא לטובת נופש מבצעי בלבד ובצירוף אסמכתא עדכנית לאחר הזמנת הנופש. מלאי הרכבים מוגבל ושיבוץ רכב
          מבוצע על בסיס מקום פנוי וזמינות רכבים במערכת הממוחשבת.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          הזמנת הרכב לנופש היא לפי מחזורים סדורים כאשר את הרכב ניתן לקבל יום לפני ולהחזיר יום לאחר סיום הנופש בהתאם
          לתאריך החופשה. המערך הלוגיסטי באוגדת איו״ש מאחל לכם חופשה מהנה ונעימה.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 3 }}
          onClick={() => setNofeshIntro(false)}
        >
        להגשת פנייה
        </Button>
      </Paper>
    </Box>
  );
};

export default LogisticIntro;
