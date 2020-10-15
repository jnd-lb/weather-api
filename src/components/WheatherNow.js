import React from "react";

import clear from "../img/weather-icons/clear.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import storm from "../img/weather-icons/storm.svg";
//import "./Search.css";
class WheatherNow extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <section class="today-weather">
        <img width="200px" src={this.getImg()} alt="" srcset="" />
        <p class="weather-now">{this.props.data.weather[0].description}</p>

        <div>
          <h2>Temperature</h2>
          <p>{(this.props.data.main.temp_min- 273.15).toFixed(2)}°C to {(this.props.data.main.temp_max - 273.15).toFixed(2)}°C</p>
          <p>
            <span class="today-weather-details-title">Humidity</span>
            <span class="today-weather-details-value">{this.props.data.main.humidity}%</span>
            <span class="today-weather-details-title">Pressure</span>
            <span class="today-weather-details-value">{this.props.data.main.pressure}</span>
          </p>
        </div>
      </section>
    );
  }

  getImg = () => {

    let id = this.props.data.weather[0].id;
    console.log('%c%s', 'background: #222; color: #bada55',id==500);
    switch (true) {
      case (id < 300): return storm;
      case (id > 299 && id < 500): return drizzle;
      case (id > 499 && id < 600): return rain;
      case (id > 599 && id < 700): return snow;
      case (id > 699 && id < 800): return fog;
      case (id == 800): return clear;
      case (id == 801): return partlycloudy;
      case (id > 800 && id < 806): return mostlycloudy;
      default: return "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";
    }
  }

}
export default WheatherNow;
