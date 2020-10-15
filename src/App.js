import React, { Component } from "react";
import Search from "./components/Search";
import WheatherNow from "./components/WheatherNow"
import Wheather24Hours from "./components/Wheather24Hours"
import FakeWeather from "./data/FakeWeather.json";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tala and Jihad"
    };
    this.wheatherData = FakeWeather;

    this.list = this.getFliteredList(this.wheatherData.list);
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <>
        <div className="app">
          <Search />
          <WheatherNow data={this.list[0]}/>
          <Wheather24Hours dataList={this.list} />
        </div>
      </>
    )
  }

  //Take a slice from the list starting from the current time
  getFliteredList = (_list)=>{

    //TODO fix the current date 
    let today = new Date("2017-02-18 06:00:00");   
    let time = today.getTime()/1000;
    let i = 0;

    for(let index = 0 ; index < _list.length ; index++){
      if(_list[index].dt > time) break;
      i = index;
    }

    // the mid point between the two times
    let midPoint = _list[i-1].dt + 90*60000;

    if(time>midPoint){
        i++;
    }

      return _list.slice(i);
  }
}

export default App;
