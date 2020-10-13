import React from "react";

import clear from "../img/weather-icons/clear.svg";
//import "./Search.css";


class Wheather24Hours extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
     
      <section class="rest-of-today-weather">
        {this.props.dataList.map(
          (element,index)=>{
            return <h1>Hi</h1>
          }
        )}
      </section>

    );
  }
}
export default Wheather24Hours;
