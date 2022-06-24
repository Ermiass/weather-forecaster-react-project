import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import SearchLocation from './SearchLocation';
import Weatherday from './Weatherday';
import getLocation from '../Api';
import DetailWeather from './DetailWeather';
import Footer from './Footer';
import Header from './Header';

const DaysContainer = styled.div`
margin-left: 90px;
  margin-right: 30px;
  border-radius: 10px;
.search-box {
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 25px;
  padding-right: 15px;
  margin-right: 40px;

}

.days-wraper {
  display: flex;
  margin-top: 5px;
}
.weekdays-container {
  margin: 8px;
  background-color: rgb(116, 116, 244);
  border-radius: 15px;
  padding: 7px;
  box-shadow: 0px 0px 2px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  cursor:pointer;
}


`;

const apiKey = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Dumfries VA');
  const [selectedDay, setSelectedDay] = useState(null);
  const [city, setCity] = useState('');
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednsday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const getweather = () => {
    getLocation(searchTerm)
      .then((res) => {
        const { lat } = res.data[0];
        const { lon } = res.data[0];
        console.log((res));
        setCity(res.data[0].display_name);
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${apiKey}`
        )
          .then((res) => res.json())
          // .then((res) => console.log(res))

          //  .then(res=>console.log(daysOfWeek[new Date(res.daily[0].dt).getDay()]))
          .then((data) =>
            setWeatherInfo(
              data.daily.map((df) => {
                setSelectedDay(null);
                console.log(df.dt);
                const newDay = new Date(df.dt * 1000);
                const localDay = newDay.toLocaleDateString('en-US');
                const currentDay = daysOfWeek[new Date(localDay).getDay()];
                //  console.log(new Date(localDay).getDay());
                console.log(newDay);

                return {
                  newDay: df.newDay,
                  current: df.temp.day,
                  min: df.temp.min,
                  max: df.temp.max,
                  weatherType: df.weather ? df.weather[0].main : null,
                  weatherIcon: df.weather ? df.weather[0].icon : null,
                  daysOfWeek: currentDay,
                  // city: df.city.name,
                  country: df.timezone,
                  feelsLikeDay: df.feels_like.day,
                  feelsLikeNight: df.feels_like.night,
                  desc: df.weather ? df.weather[0].description : null,
                  humidity: df.humidity,
                  wind: df.wind_speed,
                  pressure: df.dew_point,
                };
              })
            ))
          .catch((erorr) => console.log(erorr));
      })
      .catch((erorr) => console.log(erorr));
  };

  useEffect(() => {
    getweather();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getweather();
    setSearchTerm('');
  };
  const refreshSearch = () => {
    setSearchTerm('Dumfries VA');
    setCity('Dumfries VA ');
    setSelectedDay('');
  };
  // console.log(selectedDay);
  return (

    <DaysContainer>
      <div>
        <Header refreshSearch={refreshSearch} />
        <div className="search-box">
          <SearchLocation
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            handleFormSubmit={handleFormSubmit}
            setSearchTerm={setSearchTerm}
          />
        </div>
        <h1>
          {city
            ? 'Weather Info for ' + city.split(',').slice(0, 1) + ':'
            : 'Find weather by location'}
        </h1>
      </div>

      <div className="days-wraper">
        {weatherInfo &&
          weatherInfo.map((i, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="weekdays-container" key={index}>
              <Weatherday
                newDay={i.newDay}
                min={Math.round(i.min)}
                max={Math.round(i.max)}
                weatherType={i.weatherType}
                weatherIcon={i.weatherIcon}
                daysOfWeek={i.daysOfWeek}
                current={Math.round(i.current)}
                // city={i.city}
                country={i.country}
                desc={i.desc}
                today={i.today}
                humidity={i.humidity}
                wind={i.wind}
                pressure={i.pressure}
                // isselected={i.currentDay === selectedDayy}
                selectedDayy={() =>
                  setSelectedDay(i)}
              />
            </div>
          ))}
      </div>
      <div className="noah" style={{ backgroundImage: `${selectedDay ? `url(${process.env.PUBLIC_URL}/images/${selectedDay.weatherType.toLowerCase()}.jpg)` : 'none'}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '12px' }}>
        {selectedDay ? (

          <DetailWeather
            min={Math.round(selectedDay.min)}
            max={Math.round(selectedDay.max)}
            weatherType={selectedDay.weatherType}
            weatherIcon={selectedDay.weatherIcon}
            daysOfWeek={selectedDay.daysOfWeek}
            current={Math.round(selectedDay.current)}
            desc={selectedDay.desc}
            humidity={selectedDay.humidity}
            feelsLikeDay={Math.round(selectedDay.feelsLikeDay)}
            feelsLikeNight={Math.round(selectedDay.feelsLikeNight)}
            wind={Math.round(selectedDay.wind)}
            pressure={Math.round(selectedDay.pressure)}
            newDay={moment(selectedDay.valid_month).format(' MMM, YYYY')}
          />

        )
          : (
            <h3>{daysOfWeek.length ? 'Click on a day above to view!' : null}</h3>
          )}
      </div>
      <Footer />
    </DaysContainer>

  );
};

export default Main;
