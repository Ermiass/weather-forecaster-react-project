import React from 'react';

import PropTypes from 'prop-types';

function Weatherday({
  min,
  max,
  weatherType,
  weatherIcon,
  daysOfWeek,
  current,
  selectedDayy,
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={selectedDayy}>
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
    </div>
  );
}
Weatherday.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  weatherType: PropTypes.string.isRequired,
  selectedDayy: PropTypes.func.isRequired,
  current: PropTypes.number.isRequired,
  daysOfWeek: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
};

export default Weatherday;
