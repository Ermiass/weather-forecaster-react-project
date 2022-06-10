import React from 'react';
import PropTypes from 'prop-types';

const DetailWeather = ({
  min,
  desc,
  max,
  weatherType,
  weatherIcon,
  daysOfWeek,
  current,
  humidity,
}) => {
  return (
    <div className="selectedDay">
      <p>
        <strong>weather detail for {daysOfWeek} </strong>
      </p>

      <strong>{current}</strong>
      <img
        src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
        alt={weatherType}
        className="detail_icon"
      />
      <div className="temp-wrap">
        <strong>
          Min:{min}°F Max:{max}°F
        </strong>
      </div>
      <p><strong>{desc}</strong></p>
      <p>
        <strong>Humidity {humidity}%</strong>
      </p>
    </div>
  );
};
DetailWeather.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  weatherType: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  daysOfWeek: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
};

export default DetailWeather;
