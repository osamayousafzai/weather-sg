import { combineReducers } from "redux";
//List of reducers to be combined
import FirstReducer from "./first_reducers";
import WeatherReducer from "./reducer_weather";

const rootReducer = combineReducers({
  // List of reducers seperated by commas
  FirstReducer,
  weather: WeatherReducer
});

export default rootReducer;
