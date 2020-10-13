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

            
      <div>
          <p class="hour">3:00</p>
          <img src="https://placekitten.com/g/100/100" alt="" srcset=""/>

          <p class="temperature">8ºC</p>
      </div>

      
      <div>
          <p class="hour">3:00</p>
          <img src="https://placekitten.com/g/100/100" alt="" srcset=""/>

          <p class="temperature">8ºC</p>
      </div>

      
      <div>
          <p class="hour">3:00</p>
          <img src="https://placekitten.com/g/100/100" alt="" srcset=""/>
          <p class="temperature">8ºC</p>
      </div>

      
      <div>
          <p class="hour">3:00</p>
          <img src="https://placekitten.com/g/100/100" alt="" srcset=""/>
          <p class="temperature">8ºC</p>
      </div>

      
      <div>
          <p class="hour">3:00</p>
      <img src="https://placekitten.com/g/100/100" alt="" srcset=""/>
          <p class="temperature">8ºC</p>
      </div>

      
      <div>
          <p class="hour">3:00</p>
      <img src="https://placekitten.com/g/100/100" alt="" srcset=""/>
          <p class="temperature">8ºC</p>
      </div>

      
      <div>
          <p class="hour">3:00</p>
      <img src="https://placekitten.com/g/100/100" alt="" srcset=""/>
          <p class="temperature">8ºC</p>
      </div>


  </section>

    );
  }
}
export default Wheather24Hours;
