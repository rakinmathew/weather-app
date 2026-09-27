import React, { useState } from "react";
import axios from "axios";
import Search from "./Components/Search";
import WeatherCard from "./Components/WeatherCard";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  // const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("City not found. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center   bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300">
        <div className="bg-black/90 text-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <p className="text-3xl font-bold text-center mb-6">Weather App</p>
          <Search fetchWeather={fetchWeather} />
          {loading && <p className="text-center mt-4">Loading.....</p>}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {weather && <WeatherCard weather={weather} />}
        </div>
      </div>
    </div>
  );
};

export default App;
