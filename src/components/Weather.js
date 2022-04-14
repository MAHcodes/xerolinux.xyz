import axios from "../api/weather";
import useFetch from "../hooks/useFetch";

const Weather = () => {
  const { resData, loading, error } = useFetch({
    axiosInstance: axios,
    url: "data/2.5/weather",
    method: "GET",
    config: {
      params: {
        lat: "33.3496274",
        lon: "35.4753414",
      },
    },
  });

  const fetchWeather = () => {
    navigator.geolocation.getCurrentPosition((p) => {
      console.log(p.coords.latitude);
      console.log(p.coords.longitude);
    });
  };

  return <div onClick={fetchWeather}></div>;
};

export default Weather;
