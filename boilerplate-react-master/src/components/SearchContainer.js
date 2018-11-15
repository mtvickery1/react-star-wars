import React from "react";

const styles = {
  // Search Container
  searchContainer: {
    width: "410px",
    height: "230px",
    borderRadius: "4px",
    boxShadow: "0 1px 2px 0 rgba(132, 132, 132, 0.75)",
    border: "solid 1px #dadada",
    backgroundColor: "#ffffff",
    margin: "0 30px 0 0",
    padding: "30px",
    float: "left"
  }
};

const SearchContainer = props => {

  return (
    <div style={styles.searchContainer}>
      {props.children}
    </div>
  );
};

export default SearchContainer;
