import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import axios from "../api/weather";
import useFetch from "../hooks/useFetch";

const Weather = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [locationState, setLocationState] = useState(true);

  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const updateDateId = setInterval(
      (function updateDate() {
        const dateInstance = new Date();
        const timeString = `${days[dateInstance.getDay()]}, ${
          months[dateInstance.getMonth()]
        } ${dateInstance.getDate()}, ${dateInstance.getFullYear()} | ${(
          "0" + dateInstance.getHours()
        ).substr(-2)}:${("0" + dateInstance.getMinutes()).substr(-2)}`;
        setCurrentTime(timeString);
        return updateDate;
      })(),
      30 * 1000
    );

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

  const fetchWeather = useCallback(() => {
    if (geolocation.lat && geolocation.lon) return;
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setLocationState(true);
        setGeolocation({
          lat: p.coords.latitude,
          lon: p.coords.longitude,
        });
      },
      () => {
        setLocationState(false);
      }
    );
  }, [geolocation.lat, geolocation.lon]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return (
    <Div onClick={fetchWeather}>
      <P>{currentTime}</P>
      <Flex>
        <img
          src={`http://openweathermap.org/img/w/${
            resData?.weather[0].icon || "02d"
          }.png`}
          alt=""
        />
        {resData && <P>{`${(resData.main?.temp - 273.15).toFixed(1)} °C`}</P>}
        {loading && <P>Loading...</P>}
        {resData && <P>{resData.weather[0].description}</P>}
        {error && !geolocation.lat && !geolocation.lon && (
          <P className="u">
            {locationState
              ? "click to get weather info"
              : "location access blocked"}
          </P>
        )}
        {error && !loading && geolocation.lat && geolocation.lon && (
          <P>Error</P>
        )}
      </Flex>
    </Div>
  );
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: no-wrap;
`;

const Div = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  color: rgb(var(--white));
  padding: 0.5rem 1.5rem;
  width: fit-content;
  margin-block: auto;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  opacity: 0.9;

  position: absolute;
  inset: 0;
  margin: auto;

  & img {
    width: var(--icon-size);
    height: var(--icon-size);
  }
`;

const P = styled.p`
  font-size: var(--fz-5);
  &.u {
    text-decoration: underline;
  }
`;

export default Weather;
