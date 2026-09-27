import React, { useState } from "react";

const Search = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() !== "") {
      fetchWeather(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Enter the city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 p-2 border border-gray-300 outline-none rounded-l-xl border-r-0"
      />
      <button
        className="flex bg-blue-500 cursor-pointer p-2 border border-l-0 outline-none  hover:bg-blue-600 rounded-r-xl"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
