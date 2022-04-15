import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../api/weather";
import useFetch from "../hooks/useFetch";

const Weather = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const dateInstance = new Date();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const updateDateId = setInterval(
      (() => {
        const timeString = `${dateInstance.getDate()}/${
          months[dateInstance.getMonth() + 1]
        }/${dateInstance.getFullYear()}  |  ${(
          "0" + dateInstance.getHours()
        ).substr(-2)}:${("0" + dateInstance.getMinutes()).substr(-2)} |`;
        setCurrentTime(timeString);
      })(),
      60 * 1000
    ); // 1 min

    return () => {
      clearTimeout(updateDateId);
    };
  }, []);

  const [geolocation, setGeolocation] = useState({
    lat: undefined,
    lon: undefined,
  });

  const { resData, loading, error } = useFetch({
    axiosInstance: axios,
    url: "data/2.5/weather",
    method: "GET",
    config: {
      params: {
        lat: geolocation.lat,
        lon: geolocation.lon,
      },
    },
  });

  const fetchWeather = () => {
    navigator.geolocation.getCurrentPosition((p) => {
      setGeolocation({
        lat: p.coords.latitude,
        lon: p.coords.longitude,
      });
    });
  };

  return (
    <Div onClick={fetchWeather}>
      <P>{currentTime}</P>
      <img
        src={`http://openweathermap.org/img/w/${
          resData?.weather[0].icon || "02d"
        }.png`}
        alt=""
      />
      {resData && <P>{`${Math.floor(resData.main?.temp - 273.15)} °C`}</P>}
      {loading && <P>Loading...</P>}
      {resData && <P>{resData.weather[0].description}</P>}
      {error && !geolocation.lat && !geolocation.lon && (
        <P className="u">click to get weather info</P>
      )}
      {error && !loading && geolocation.lat && geolocation.lon && <P>Error</P>}
    </Div>
  );
};

const Div = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: rgba(var(--bar), 50%);
  color: rgb(var(--white));
  padding: 0.5rem 1.5rem;
  width: fit-content;
  margin: 0 auto;
  border-radius: 0 0 var(--border-radius) var(--border-radius);

  & > img {
    width: var(--icon-size);
    height: var(--icon-size);
  }
`;

const P = styled.p`
  font-size: var(--fz-6);
  &.u {
    text-decoration: underline;
  }
`;

export default Weather;
