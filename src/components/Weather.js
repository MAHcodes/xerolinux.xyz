import { useState } from "react";

const Weather = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState({});

  const fetchWeather = () => {
    navigator.geolocation.getCurrentPosition((p) => {
      console.log(p.coords.latitude);
      console.log(p.coords.longitude);
    });
  };
  return <div onClick={fetchWeather}>Weather</div>;
};

export default Weather;
