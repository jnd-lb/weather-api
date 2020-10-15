import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  API = "http://api.openweathermap.org/data/2.5/forecast?q=";
  KEY = "&appid=efa7f2a37da09554ff567048f227d924";

  state = {
    input: ""
  };

  /*
  TO FETCH DATA
    componentDidMount() {
      fetch('https://api.mydomain.com')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }
   
  */



  render() {
    return (
      <header>
        <form action="">
          <input class="search" type="text" />
          <input class="btn" type="button" onClick={this.getData} value="Find Weather" />
        </form>
      </header>
    );
  }

  getData = () => {
    let city = document.querySelector(".search").value;
    if ((city).trim() == "") return;
    try {
      fetch(this.API + city + this.KEY)
        .then(response => response.json())
        .then(data => this.props.args(data));
    }
    catch (e) {
      
    }
  }
}
export default Search;
