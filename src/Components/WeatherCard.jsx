import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div>
      <h2 className="mt-5 flex items-center justify-center text-2xl ">
        {weather.name}, {weather.sys.country}{" "}
      </h2>
      <div className="flex justify-center items-center mt-4 ">
        <img
          className="w-16 h-16"
       
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p className="text-3xl font-bold ">{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className="text-center text-gray-400 text-sm capitalize">
        {" "}
        {weather.weather[0].description}{" "}
      </p>
{/* To display humidity, wind speed, pressure */}
<div className="grid grid-cols-3 gap-3  mt-4  ">
    <div className="text-center">
        <p className="text-gray-400"> Humidity</p>
        <p className="font-bold">{weather.main.humidity}%</p>
    </div>
    <div className="text-center"> 
        <p className="text-gray-400">Wind</p>
        <p className="font-bold">{weather.wind.speed} m/s</p>
    </div>
    <div className="text-center">
        <p className="text-gray-400">Pressure</p>
        <p className="font-bold">{weather.main.pressure} hPa</p>
    </div>
    <div className="text-center">
        <p className="text-gray-400">Feels like</p>
        <p className="font-bold">{Math.round(weather.main.feels_like)}°C</p>
    </div>
    <div className="text-center">
        <p className="text-gray-400"> Latitude</p>
        <p className="font-bold">{weather.coord.lat}</p>
    </div>
    <div className="text-center">
        <p className="text-gray-400">Longitude</p>
        <p className="font-bold">{weather.coord.lon}</p>
    </div>
   
</div>

    </div>
  );
};

export default WeatherCard;
