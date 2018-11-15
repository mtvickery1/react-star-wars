import React from "react";

const styles = {
    navStyle: {
      backgroundColor: "#ffffff",
      width: "100%",
      height: "50px",
      boxShadow: "0 2px 0 0 #dadada",
      position: "relative",
      margin: "0 0 30px 0"
    },
    navContentStyle: {
      height: "22px",
      fontSize: "18px",
      fontWeight: "bold",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      color: "#0ab463",
      margin: "0",
      position: "absolute",
      top: "50%",
      left: "50%",
      msTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)"
    }
  };

const Nav = () =>
  <nav style={styles.navStyle}>
    <div style={styles.navContentStyle}>
        SWStarter
    </div>
  </nav>;

export default Nav;
