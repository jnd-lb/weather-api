import React from "react";

import clear from "../img/weather-icons/clear.svg";
//import "./Search.css";
class WheatherNow extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <section class="today-weather">
      <img src="https://placekitten.com/g/100/100" alt="" srcset=""/>
      <p class="weather-now">Overcast Clouds</p>

      <div>
          <h2>Temperature</h2>
          <p>{this.props.temp}</p>
          <p>
              <span class="today-weather-details-title">Humidity</span>
              <span class="today-weather-details-value">78%</span>

              <span class="today-weather-details-title">Pressure</span>
              <span class="today-weather-details-value">100848</span>
          </p>
      </div>
  </section>

    );
  }
}
export default WheatherNow;
