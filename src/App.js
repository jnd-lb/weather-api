import React,  { Component } from "react";
import Search from "./components/Search";
import WheatherNow from "./components/WheatherNow"
import Wheather24Hours from "./components/Wheather24Hours"
import SayHi, { SayHello } from "./components/WeatherItem";
import FakeWeather from "./data/FakeWeather.json";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tala and Jihad"
    };


  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <>
      
            <div className="app">
      <Search/>     
<WheatherNow   />
<Wheather24Hours dataList={FakeWeather.list}  />
</div>
      </>
    )

  }
}

export default App;
