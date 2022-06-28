import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoadingSpinner from './LoadingSpinner';

const Days = styled.div`
.days {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  // cursor:pointer;
  padding: 10px;
  :hover {
    // cursor: pointer;
    border-color: #00B5E2;
    }}
.temp-wrap {
  text-align: center;
  display: flex;
  align-items: center;
  }
.weekdays{
  font-size:1.1rem;
  // color:red;
}
 `;
const Weatherday = ({
  min,
  max,
  weatherType,
  weatherIcon,
  daysOfWeek,
  current,
  selectedDayy,

}) => {
  return (
    <Days onClick={selectedDayy}>
      <div className="days">
        <strong className="weekdays">{daysOfWeek}</strong>
        <strong>{current}</strong>
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
};
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
