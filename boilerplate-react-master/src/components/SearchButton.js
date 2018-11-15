import React from "react";

const SearchButton = props => {
  console.log('state', props.state);

  // Making search button gray if disabled
  if (!props.state.search) {
    var buttonBackground = {
      border: "solid 1px #c4c4c4",
      backgroundColor: "#c4c4c4"
    }
  } else {
    buttonBackground = {
      border: "solid 1px #0ab463",
      backgroundColor: "#0ab463"
    }
  }

  const styles = {
    // Search Button
    searchButton: {
      position: "relative",
      width: "100%",
      height: "34px",
      borderRadius: "20px",
      border: buttonBackground.border,
      backgroundColor: buttonBackground.backgroundColor
    },
    // Search Button Text
    searchButtonText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      msTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)",
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      color: "#ffffff"
    }
  };

  return (
    <button {...props} style={styles.searchButton} type="button">
      <div style={styles.searchButtonText}>
        SEARCH
      </div>
    </button>
  );
};

export default SearchButton;
