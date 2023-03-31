import React, { useState, useEffect } from "react";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const getWeatherData = async (latitude, longitude) => {
    const API_KEY = "YOUR_API_KEY";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
      setError("An error occurred while getting the weather data.");
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(`latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`);
      }, (error) => {
        console.error(error);
        setError("An error occurred while getting your location.");
      });
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  useEffect(() => {
    if (location) {
      const [latitude, longitude] = location.split("&");
      getWeatherData(latitude.split("=")[1], longitude.split("=")[1]);
    }
  }, [location]);

  const handleRefreshClick = () => {
    setLocation("");
    setWeather({});
    setError("");
    getLocation();
  };

  return (
    <div className="App">
      <h1>Current Weather</h1>
      {error && <p>{error}</p>}
      {weather.main && (
        <div>
          <p>Location: {weather.name}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
        </div>
      )}
      <button onClick={handleRefreshClick}>Refresh</button>
      <button onClick={getLocation}>Get Weather</button>
      <button onClick={() => alert("Thank you for using this app!")}>Close</button>
    </div>
  );
};

export default Weather;
