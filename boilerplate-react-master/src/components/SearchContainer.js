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
      margin: "80px 822px 590px 208px",
      padding: "30px"
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
