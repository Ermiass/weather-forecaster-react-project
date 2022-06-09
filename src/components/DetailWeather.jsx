import React from "react";

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

export default DetailWeather;
