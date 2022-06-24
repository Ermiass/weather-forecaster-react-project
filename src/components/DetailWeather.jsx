import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectedDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // margin-top: 10px;
  width: 100%;
  height: 295px;
  border: .5px solid #36454f ;
  border-radius: 12px;
  // background-color: rgb(116, 116, 244);
  color: white;
  .current-temp {
    font-size: 35px;
  }
  .weather-detail {
    font-size: 25px;
  }
  .detail_icon {
    top: 0;
    width: 80px;
    height: 80px;
  }
`;

const DetailWeather = ({
  min,
  desc,
  max,
  weatherType,
  weatherIcon,
  daysOfWeek,
  current,
  feelsLikeDay,
  feelsLikeNight,
  humidity,
  wind,
  pressure,
  newDay
}) => {
  return (
    <SelectedDay>
      <div className="weather-detail">
        Weather Detail for {daysOfWeek} {newDay}
      </div>
      <div className="current-temp">{current}</div>
      <img
        className="detail_icon"
        src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
        alt={weatherType}
      />
      <strong>{weatherType}</strong>
      <strong>Humidity: {humidity}%</strong>
      <strong>description: {desc}</strong>
      <strong>
        Min:{min}°F | FeelsLikeNight:{feelsLikeNight}°F
      </strong>
      <strong>
        Max:{max}°F | FeelsLikeDay:{feelsLikeDay}°F
      </strong>
      <strong>
        {' '}
        Wind speed:{wind}mph | Wind Presure:{pressure}m/s
      </strong>
    </SelectedDay>
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
