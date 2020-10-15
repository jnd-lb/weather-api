import React, { Component } from "react";
import Search from "./components/Search";
import WheatherNow from "./components/WheatherNow"
import Wheather24Hours from "./components/Wheather24Hours"
import FakeWeather from "./data/FakeWeather.json";

import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tala and Jihad",
      data:[]
    };
    this.wheatherData = FakeWeather;

    //this.list = this.getFliteredList(this.wheatherData.list);
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {

    let renderHTML = ()=>{

      if(this.state.data.length > 0)
      return (
       <>
        <WheatherNow data={this.state.data[0]}/>
        <Wheather24Hours dataList={this.state.data} />  
       </>
      );
    }
    return ( 
      <>
        <div className="app">
          <Search args={this.getFliteredList} />
          {
            renderHTML()
          }
        </div>
      </>
    )
  }

  //Take a slice from the list starting from the current time
  getFliteredList = ({list})=>{
  
    console.log(list);
    let today = new Date();   
    let time = today.getTime();
    let i = 0;
  
    for(let index = 0 ; index < list.length ; index++){
      console.log("%c%d","background:yellow;padding:10px",time);
      console.log("%c%d","background:pink;padding:10px",new Date(list[index].dt_txt).getTime() );
      if(new Date(list[index].dt_txt).getTime() > time) break;
      i = index;
    }

    // the mid point between the two times
    let midPoint = list[i+1].dt - 90*60000;

    if(time>midPoint){
        i++;
    }

    this.setState({data:list.slice(i)});
  }
  
 
}

export default App;
