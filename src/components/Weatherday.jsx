import React from "react";

const Weatherday = ({
  min,
  max,
  city,
  weatherType,
  country,
  weatherIcon,
  daysOfWeek,
  current,
  selectedDayy,
  today
}) => {
  return (
    <div onClick={selectedDayy}>
      {country}
      <strong>{daysOfWeek}</strong>
      <div>
        <strong>{current}</strong>
      </div>
      <img
        src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
        alt={weatherType}
      />
      <div className="temp-wrap">
        Min:{min}°F Max:{max}°F
      </div>
      <div>{weatherType}</div>
      {/* {today} */}
    </div>
  );
};

export default Weatherday;
