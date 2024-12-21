import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';  
import { useDate } from '../Utils/useDate';
import sun from '../assets/icons/sun.png';
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import wind from '../assets/icons/windy.png';
import '../index.css';

const WeatherCard = ({
  temperature = 'N/A',
  windspeed = 'N/A',
  humidity = 'N/A',
  place = 'N/A',
  heatIndex = 'N/A',  // Default value if not passed
  iconString = '',  // Default empty string if not passed
  conditions = '',
}) => {
  const [icon, setIcon] = useState(sun);  // Default to sun icon
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      const lowerCaseIcon = iconString.toLowerCase();
      if (lowerCaseIcon.includes('cloud')) {
        setIcon(cloud);
      } else if (lowerCaseIcon.includes('rain')) {
        setIcon(rain);
      } else if (lowerCaseIcon.includes('clear')) {
        setIcon(sun);
      } else if (lowerCaseIcon.includes('thunder')) {
        setIcon(storm);
      } else if (lowerCaseIcon.includes('fog')) {
        setIcon(fog);
      } else if (lowerCaseIcon.includes('snow')) {
        setIcon(snow);
      } else if (lowerCaseIcon.includes('wind')) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  return (
    <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4">
      <div className="flex w-full justify-center items-center gap-4 mt-12 mb-4">
        <img src={icon} alt="weather_icon" />
        <p className="font-bold text-5xl flex justify-center items-center">{temperature} &deg;C</p>
      </div>
      <div className="font-bold text-center text-xl">
        {place}
      </div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2">{time}</p>
      </div>
      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <div className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          Wind Speed <span className="font-normal">{windspeed} km/h</span>
        </div>
        <div className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">
          Humidity <span className="font-normal">{humidity} gm/m&#179;</span>
        </div>
      </div>
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold text-lg">Heat Index</p>
        <p className="text-lg">{heatIndex}</p>
      </div>
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  temperature: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  windspeed: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  humidity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  place: PropTypes.string.isRequired,
  heatIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconString: PropTypes.string,
  conditions: PropTypes.string.isRequired,
};

export default WeatherCard;
