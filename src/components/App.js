import React, { Component } from "react";
import "../styles/App.css";
import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
