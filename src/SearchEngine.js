import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Spotify from "react-spotify-embed";

import axios from "axios";
import "./App.css";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
      description: response.data.condition.description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "b3388014b013fd3aot7828a2bfbfecfe";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  function geolocation(position) {
    console.log(position);
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${position.coords.longitude}&lat=${position.coords.latitude}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(geolocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Los Angeles"
                  className="form-control border-0"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <p class="search-label">Search for a city...</p>
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
              <div className="col-2">
                <button className="geolocation">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    onClick={getCurrentLocation}
                  />
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="playlist">
          <Spotify link="https://open.spotify.com/playlist/0L7F6yo5BKXZZ22JjukP7f?si=e8937eecc5b240d3" />
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return null;
  }
}
