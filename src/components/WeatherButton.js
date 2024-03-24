import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div class="menu-container">
      <Button
        variant={`${selectedCity == null ? "outline-warning" : "warning"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>

      {cities.map((city) => (
        <Button
          variant={`${selectedCity == city ? "outline-warning" : "warning"}`}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;