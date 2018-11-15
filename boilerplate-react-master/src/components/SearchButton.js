import React from "react";

const SearchButton = props => {

const styles = {
    // Search Button
    searchButton: {
      position: "relative",
      width: "100%",
      height: "34px",
      borderRadius: "20px",
      border: props.style.border,
      backgroundColor: props.style.backgroundColor
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
