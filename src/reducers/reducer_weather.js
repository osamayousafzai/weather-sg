import { FETCH_WEATHER } from "../actions";

const WeatherReducer = (state = [], action) => {
  console.log("CP1: Aciton received", action);
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
    default:
      return state;
  }
};

export default WeatherReducer;
