import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#f4f4f9",
        fontSize: "14px",
        color: "#888",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        direction: "rtl",
      }}
    >
      <div>להערות או בעיות טכניות באפליקציה, ניתן לפנות ישירות למפתח המערכת בכתובת</div>
      <a href="mailto:Liranuzistud@gmail.com" style={{ color: "#007bff", textDecoration: "none" }}>
        Liranuzistud@gmail.com
      </a>
      <p>
        פותח על ידי{" "}
        <a
          href="https://www.linkedin.com/in/liran-uziyahu/"
          style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Liran Uziyahu
        </a>
        .
      </p>{" "}
    </footer>
  );
};

export default Footer;
