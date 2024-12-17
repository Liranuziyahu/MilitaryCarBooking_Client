import React from "react";
import makeStyles from "@mui/styles/makeStyles";

const CarRentalInstructions = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.centerText}>
        ברוכים הבאים! הטופס הבא מיועד להזמנת רכב שכור עבור הנופש המשפחתי שלכם. אנא קראו בעיון את ההנחיות ומלאו את כל
        הפרטים הנדרשים.
      </p>

      <section className={classes.text}>
        <h2 className={classes.title + " " + classes.centerText}>:הנחיות לקבלת והחזרת הרכב</h2>
        <ol className={classes.ol}>
          <li>
            <strong>מצב הרכב בעת קבלתו:</strong>
            <ul className={classes.ul}>
              <li>הרכב יימסר נקי ומתודלק באופן מלא.</li>
              <li>כרטיסי דלק ימסרו עם מסירת הרכב במפתח של 20 ליטר ליום.</li>
            </ul>
          </li>
          <li>
            <strong>אחריות המזמין:</strong>
            <ul className={classes.ul}>
              <li>ניקיון: הרכב צריך להחזיר באותו מצב ניקיון שבו התקבל.</li>
              <li>תדלוק: יש להחזיר את הרכב עם מיכל דלק מלא.</li>
              <li>תקינות: כל נזק שנגרם לרכב בזמן השימוש הוא באחריות המזמין.</li>
            </ul>
          </li>
          <li>
            <strong>תהליך החזרת הרכב:</strong>
            <ul className={classes.ul}>
              <li>יש לתאם את מועד החזרת הרכב עם איש הקשר של המערך הלוגיסטי.</li>
              <li>אם הרכב לא יוחזר בתנאים הנדרשים, המזמין לא יוכל להזמין רכב בעתיד ויישא באחריות הנזק שנגרם.</li>
            </ul>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default CarRentalInstructions;

const useStyles = makeStyles(() => ({
  root: {
    flex:1,
    padding:5
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  centerText: {
    textAlign: "center",
  },
  text: {
    textAlign: "right",
    fontFamily:'Roboto, Helvetica, Arial, sans-serif',
    lineHeight:2
  },
  ol: {
    direction: "rtl",
  },
  ul: {
    paddingInlineStart: "1.5em", // Optional for nested lists
  },
}));
