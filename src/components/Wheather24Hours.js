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


class Wheather24Hours extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
     
      <section class="rest-of-today-weather">
        {this.props.dataList.slice(1,9).map(
          (element,index)=>{
            return (
              <div>
                <p class="hour">{new Date(element.dt_txt).getHours()}:00</p>
                <img src={this.getImg(element.weather[0].id)} width="100px" alt="" srcset=""/>
                <p class="temperature">{(element.main.temp - 273.15).toFixed(2)}°C</p>
              </div>
              )
          }
        )}
      </section>

    );
  }

  getImg = (_id) => {

    let id = _id;
    console.log('%c%s', 'background: #222; color: #bada55',id);
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
export default Wheather24Hours;
