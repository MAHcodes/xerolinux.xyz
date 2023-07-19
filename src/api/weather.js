import axios from "axios";
const BASE_URL = "https://api.openweathermap.org/";
const API_KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  params: {
    appid: API_KEY,
  },
});
