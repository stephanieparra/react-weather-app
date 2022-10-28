import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR-SKY-DAY",
    "01n": "CLEAR-SKY-NIGHT",
    "02d": "FEW-CLOUDS-DAY",
    "02n": "FEW-CLOUDS-NIGHT",
    "03d": "SCATTERED-CLOUDS-DAY",
    "03n": "SCATTERED-CLOUDS-NIGHT",
    "04d": "BROKEN-CLOUDS-DAY",
    "04n": "BROKEN-CLOUDS-NIGHT",
    "09d": "SHOWER-RAIN-DAY",
    "09n": "SHOWER-RAIN-NIGHT",
    "10d": "RAIN-DAY",
    "10n": "RAIN-NIGHT",
    "11d": "THUNDERSTORM-DAY",
    "11n": "THUNDERSTORM-NIGHT",
    "13d": "SNOW-DAY",
    "13n": "SNOW-NIGHT",
    "50d": "MIST-DAY",
    "50n": "MIST-NIGHT",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="goldenrod"
      size={props.size}
      animate={true}
    />
  );
}
