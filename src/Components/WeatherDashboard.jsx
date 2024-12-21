/*import React, { useState } from "react";
import axios from "axios";
import clear from "../images/Clear.jpg";
import cloudy from "../images/Cloudy.jpg";
import fog from "../images/fog.png";
import raining from "../images/raining.jpeg";
import snowy from "../images/snow.jpg";
import stormy from "../images/Stormy.jpg";
import sunny from "../images/Sunny.jpg";
import neutral from "../images/neutral.jpeg";
import humid from "../images/humid.avif";

const WeatherDashboard = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!location) return;
    const apiKey = "155cba840620a463e6daca3fe699163d"; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError("Location not found. Please try again.");
    }
  };

  const getWeatherCondition = (weather) => {
    switch (weather) {
      case "clear": clear
        return { description: "clear", bgColor: "bg-yellow-300" };
        case "fog": fog
        return { description: "fog", bgColor: "bg-yellow-300" };
        case "Stormy": stormy
        return { description: "stormy", bgColor: "bg-yellow-300" };
        case "Sunny": sunny
        return { description: "Sunny", bgColor: "bg-yellow-300" };
        case "snowy": snowy
        return { description: "snowy", bgColor: "bg-yellow-300" };
      case "Clouds": cloudy
        return { description: "Cloudy", bgColor: "bg-gray-300" };
      case "Rain": raining
        return { description: "Raining", bgColor: "bg-blue-400" };
      case "Humidity": humid
        return { description: "Humid", bgColor: "bg-green-400" };
      default: neutral
        return { description: "Unknown", bgColor: "bg-gray-200" };
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Weather Dashboard</h1>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <div
          className={`p-6 rounded-lg shadow-md text-center ${getWeatherCondition(weatherData.weather[0].main).bgColor}`}
        >
          <h2 className="text-2xl font-semibold mb-4">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p className="text-lg">{getWeatherCondition(weatherData.weather[0].main).description}</p>
          <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
          <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-lg">Wind Speed: {weatherData.wind.speed} m/s</p>
          <p className="text-lg">Local Time: {new Date().toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;





import React, { useState } from "react";
import axios from "axios";
import clear from "../images/Clear.jpg";
import cloudy from "../images/Cloudy.jpg";
import fog from "../images/fog.png";
import raining from "../images/raining.jpeg";
import snowy from "../images/snow.jpg";
import stormy from "../images/Stormy.jpg";
import sunny from "../images/Sunny.jpg";
import neutral from "../images/neutral.jpeg";
import humid from "../images/humid.avif";

const WeatherDashboard = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!location) return;
    const apiKey = "155cba840620a463e6daca3fe699163d"; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError("Location not found. Please try again.");
    }
  };

  const getWeatherCondition = (weather) => {
    switch (weather) {
      case "Clear":
        return { description: "Clear", bgColor: "bg-yellow-300", image: clear };
      case "Mist":
      case "Fog":
        return { description: "Foggy", bgColor: "bg-gray-400", image: fog };
      case "Thunderstorm":
        return { description: "Stormy", bgColor: "bg-gray-600", image: stormy };
      case "Sunny":
        return { description: "Sunny", bgColor: "bg-yellow-300", image: sunny };
      case "Snow":
        return { description: "Snowy", bgColor: "bg-blue-200", image: snowy };
      case "Clouds":
        return { description: "Cloudy", bgColor: "bg-gray-300", image: cloudy };
      case "Rain":
      case "Drizzle":
        return { description: "Rainy", bgColor: "bg-blue-400", image: raining };
      case "Humidity":
        return { description: "Humid", bgColor: "bg-green-400", image: humid };
      default:
        return { description: "Unknown", bgColor: "bg-gray-200", image: neutral };
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Weather Dashboard</h1>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <div
          className={`p-6 rounded-lg shadow-md text-center ${getWeatherCondition(weatherData.weather[0].main).bgColor}`}
          style={{
            backgroundImage: `url(${getWeatherCondition(weatherData.weather[0].main).image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p className="text-lg">{getWeatherCondition(weatherData.weather[0].main).description}</p>
          <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
          <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-lg">Wind Speed: {weatherData.wind.speed} m/s</p>
          <p className="text-lg">Local Time: {new Date().toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;*/













import React, { useState } from "react";
import axios from "axios";
import clear from "../images/Clear.jpg";
import cloudy from "../images/Cloudy.jpg";
import fog from "../images/fog.png";
import raining from "../images/raining.jpeg";
import snowy from "../images/snow.jpg";
import stormy from "../images/Stormy.jpg";
import sunny from "../images/Sunny.jpg";
import neutral from "../images/neutral.jpeg";
import humid from "../images/humid.avif";

const WeatherDashboard = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!location) return;
    const apiKey = "155cba840620a463e6daca3fe699163d"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError("Location not found. Please try again.");
    }
  };

  const getWeatherCondition = (weather) => {
    switch (weather) {
      case "Clear":
        return { description: "Clear", bgColor: "bg-yellow-300", image: clear };
      case "Mist":
      case "Fog":
        return { description: "Foggy", bgColor: "bg-gray-400", image: fog };
      case "Thunderstorm":
        return { description: "Stormy", bgColor: "bg-gray-600", image: stormy };
      case "Sunny":
        return { description: "Sunny", bgColor: "bg-yellow-300", image: sunny };
      case "Snow":
        return { description: "Snowy", bgColor: "bg-blue-200", image: snowy };
      case "Clouds":
        return { description: "Cloudy", bgColor: "bg-gray-300", image: cloudy };
      case "Rain":
      case "Drizzle":
        return { description: "Rainy", bgColor: "bg-blue-400", image: raining };
      case "Humidity":
        return { description: "Humid", bgColor: "bg-green-400", image: humid };
      default:
        return { description: "Unknown", bgColor: "bg-gray-200", image: neutral };
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-gray-800"
      style={{
        backgroundImage: weatherData
          ? `url(${getWeatherCondition(weatherData.weather[0].main).image})`
          : `url(${neutral})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-bold mb-6">Weather Dashboard</h1>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <div className="p-6 rounded-lg shadow-md text-center bg-white bg-opacity-70">
          <h2 className="text-2xl font-semibold mb-4">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p className="text-lg">{getWeatherCondition(weatherData.weather[0].main).description}</p>
          <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
          <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-lg">Wind Speed: {weatherData.wind.speed} m/s</p>
          <p className="text-lg">Local Time: {new Date().toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;


