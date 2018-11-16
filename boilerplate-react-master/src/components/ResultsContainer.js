import React from "react";

const styles = {
  // Search Container
  resultsContainer: {
    width: "582px",
    height: "582px",
    borderRadius: "4px",
    boxShadow: "0 1px 2px 0 rgba(132, 132, 132, 0.75)",
    border: "solid 1px #dadada",
    backgroundColor: "#ffffff",
    padding: "30px",
    float: "left",
    overflow: "hidden"
  }
};

const ResultsContainer = props => {

  return (
    <div style={styles.resultsContainer}>
      {props.children}
    </div>
  );
};

export default ResultsContainer;
