import React from "react";

const ResultsItem = props => {

  let characterName = props.people.name
  console.log('name', characterName);

  const styles = {
    // Result Item Height
    resultHeight: {
      height: "34px",
      position: "relative"
    },
    // Result Name/Title
    resultName: {
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      color: "#000000",
      float: "left",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)"
    },
    // Results Button
    resultsButton: {
      width: "134px",
      height: "34px",
      borderRadius: "17px",
      border: "solid 1px #0ab463",
      backgroundColor: "#0ab463",
      cursor: "pointer",
      float: "right",
    },
    // Results Button Text
    resultsButtonText: {
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      color: "#ffffff"
    },
    // HR
    hr: {
      display: "block"
    }
  };

  return (
    <div>

      <div style={styles.resultHeight}>
        {/* Results Name/Title */}
        <div style={styles.resultName}>
          {characterName}
        </div>

        {/* Results Button */}
        <button {...props} style={styles.resultsButton} type="button">
          <div style={styles.resultsButtonText}>
            SEE DETAILS
          </div>
        </button>
      </div>
      <hr style={styles.hr} />

    </div>
  );
};

export default ResultsItem;
