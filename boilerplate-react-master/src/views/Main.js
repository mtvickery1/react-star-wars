import React, { Component } from "react";
import SearchContainer from "../components/SearchContainer";
import SearchButton from "../components/SearchButton";

// Styles
const styles = {

  // What Are You Searching For
  whatAreYouSearchingFor: {
    fontSize: "14px",
    fontWeight: "600",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#383838"
  },
  // People
  people: {
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000000",
    marginRight: "30px"
  },
  // Movies
  movies: {
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000000"
  },
  // Search Box
  searchBox: {
    fontSize: "14px",
    width: "100%",
    height: "40px",
    borderRadius: "4px",
    boxShadow: "inset 0 1px 3px 0 rgba(132, 132, 132, 0.75)",
    border: "solid 1px #383838",
    paddingLeft: "10px",
    paddingTop: "10px",
    paddingBottom: "10px"
  }
};

export default class Home extends Component {
  state = {
    radioSelected: "people",
    search: ""
  };

  componentDidUpdate() {
    console.log('updated');
    console.log(this.state.radioSelected);
  };

  // getInitialState() {
  //   return {search: ""}
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () => {
    console.log(this.state.radioSelected);

    // People Search
    if (this.state.radioSelected === "people") {
      console.log("Searching People");
    }

    // Movie Search
    if (this.state.radioSelected === "movies") {
      console.log("Searching Movies");
    }
  };

  render() {

    // Making search button gray if disabled
    if (!this.state.search) {
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
    
    // Changing placeholder based on search choice 
    if (this.state.radioSelected === "people") {
      var placeholder = "e.g. Chewbacca, Yoda, Boba Fett"
    } else {
      placeholder = "e.g. The Phantom Menace, Return of The Jedi"
    }

    return (
      <div>

        {/* Search Container */}
        <SearchContainer>
          <div style={styles.whatAreYouSearchingFor}>
            What are you searching for?
          </div>
          <br />
          <form>
            {/* People Radio */}
            <input type="radio" id='people' name="people" value="people" checked={this.state.radioSelected === 'people'} onChange={(e) => this.setState({ radioSelected: e.target.value })} />
            <span style={styles.people}>
              People
            </span>
            {/* Movies Radio */}
            <input type="radio" id='movies' name="movies" value="movies" checked={this.state.radioSelected === 'movies'} onChange={(e) => this.setState({ radioSelected: e.target.value })} />
            <span style={styles.movies}>
              Movies
            </span>
            <br />
            <br />
            {/* Search Box */}
            <input style={styles.searchBox} type="text" value={this.state.search} onChange={this.handleInputChange} name="search" placeholder={placeholder} />
            <br />
            <br />
            {/* Search Button */}
            <SearchButton style={buttonBackground} disabled={!this.state.search} onClick={this.handleFormSubmit} />
          </form>
        </SearchContainer>

      </div>
    );
  }
}

