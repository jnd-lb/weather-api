import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <header>
      <form action="">
          <input class="search" type="text"/>
          <input class="btn" type="button" value="Find Weather"/>
      </form>
  </header>
    );
  }
}
export default Search;
