import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function SearchEngine() {
  const [WeatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    ready: true;
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      date: "Wednesday 7:00",
      precipitation: response.data.main.precipitation,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "88e64de9fc51e9cca98f8a475dc584f5";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }
}

let form = (
  <div className="Weather">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-10">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
            onChange={updateCity}
          />
        </div>
        <div className="col-2">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  </div>
);

if (WeatherData.ready) {
  return (
    <div>
      {form}
      <div className="row mt-3">
        <div className="col-8">
          <h2>{WeatherData.city}</h2>
          <ul>
            <li>{WeatherData.date}</li>
            <li className="text-capitalize">{WeatherData.description}</li>
          </ul>
          <div className="clear-fix">
            <img
              src={WeatherData.icon}
              alt={WeatherData.description}
              className="float-left"
            />
            <span className="temperature">
              {Math.round(WeatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Precipitation: {WeatherData.precipitation}</li>
            <li>Humidity: {WeatherData.humidity}%</li>
            <li>Wind: {WeatherData.wind}/km</li>
          </ul>
        </div>
      </div>
    </div>
  );
} else {
  return form;
}
