import React from "react";

const styles = {
  // Search Container
  mainContainer: {
    margin: "0 0 0 20%",
    width: "1022px"
  }
};

const MainContainer = props => {

  return (
    <div style={styles.mainContainer}>
      {props.children}
    </div>
  );
};

export default MainContainer;
