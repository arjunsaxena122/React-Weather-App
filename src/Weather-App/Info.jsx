import React from "react";
import "./weather.css";
export default function Info({ weatherData }) {
  return (
    <div>
      <h1 className="text-center my-10 text-2xl">Weather Data</h1>
      <div id="info">
        <p>City Name : {weatherData.name}</p>
        <p>City Humidity : {weatherData.humidity}</p>
        <p>City Pressure : {weatherData.pressure}</p>
        <p>City Temperature : {weatherData.temp}</p>
        <p>City Wind Speed : {weatherData.speed}</p>
      </div>
    </div>
  );
}
