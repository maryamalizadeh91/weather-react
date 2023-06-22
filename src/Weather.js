import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

function Weather(props) {
  let apiKey = "a5acb752426cd8188485c35694980e3a";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response);
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }

  axios.get(url).then(handleResponse);
  return (
    <div className="Weather">
      <h2>Hello from weather component</h2>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}

export default Weather;
