import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Days = styled.div`
.days {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  cursor:pointer;
  padding: 10px;}
.temp-wrap {
  text-align: center;
  display: flex;
  align-items: center;
  }
 `;
function Weatherday({
  min,
  max,
  weatherType,
  weatherIcon,
  daysOfWeek,
  current,
  selectedDayy,
  country,
  newDay
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <Days onClick={selectedDayy}>
      <div className="days">
        <strong>{daysOfWeek}</strong>
        <div>{newDay}</div>
        <strong>{current}</strong>
        <strong>{country}</strong>
        <img
          src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
          alt={weatherType}
        />
        <div className="temp-wrap">
          Min:{min}°F Max:{max}°F
        </div>
        <div>{weatherType}</div>
      </div>

    </Days>
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
