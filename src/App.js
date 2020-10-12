import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
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

            <header>
    <form action="">
        <input class="search" type="text"/>
        <input class="btn" type="button" value="Find Weather"/>
    </form>
</header>

<section class="today-weather">
            <img src="https://placekitten.com/g/100/100" alt="" srcset=""/>
            <p class="weather-now">Overcast Clouds</p>

            <div>
                <h2>Temperature</h2>
                <p>10º to 11ºC</p>
                <p>
                    <span class="today-weather-details-title">Humidity</span>
                    <span class="today-weather-details-value">78%</span>

                    <span class="today-weather-details-title">Pressure</span>
                    <span class="today-weather-details-value">100848</span>
                </p>
            </div>
        </section>

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
</div>
      </>
    )

  }
}

export default App;
