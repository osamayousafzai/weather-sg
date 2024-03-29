import axios from 'axios';

export const ADD_TEXT_T0_SCREEN = 'ADD_TEXT_T0_SCREEN';
export const FETCH_WEATHER = 'FETCH_WEATHER';

const API_KEY = process.env.REACT_APP_API_KEY;

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},fi`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};

export const addTextToScreen = () => {
  return {
    type: ADD_TEXT_T0_SCREEN,
    payload: ADD_TEXT_T0_SCREEN,
  };
};
