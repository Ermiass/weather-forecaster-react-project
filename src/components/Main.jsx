import React, { useEffect, useState } from "react";
import SearchLocation from "./SearchLocation";
import Weatherday from "./Weatherday";
import getLocation from "../Api";


const apiKey = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [weatherInfo, setWeatherInfo] = useState();
  const [searchTerm, setSearchTerm] = useState("dumfries, VA");
  

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getweather = () => {
    getLocation(searchTerm)
      .then((res) => {
        const { lat } = res.data[0];
        const { lon } = res.data[0];
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${apiKey}`
        )
          .then((res) => res.json())
          //  .then(res=>console.log(res))

          //  .then(res=>console.log(daysOfWeek[new Date(res.daily[0].dt).getDay()]))
          .then((data) =>
            setWeatherInfo(
              data.daily.map((df) => {
        
                console.log(df.dt);
                const newDay = new Date(df.dt * 1000);
                const localDay = newDay.toLocaleDateString("en-US");
                const currentDay = daysOfWeek[new Date(localDay).getDay()];
                //  console.log(new Date(localDay).getDay());
                console.log(newDay);

                return {
                  current: df.temp.day,
                  min: df.temp.min,
                  max: df.temp.max,
                  weatherType: df.weather ? df.weather[0].main : null,
                  weatherIcon: df.weather ? df.weather[0].icon : null,
                  daysOfWeek: currentDay,
                  // city: df.city.name,
                  // country: df.city.country,
                  desc: df.weather ? df.weather[0].description:null,
                  today:newDay,
                  humidity : df.humidity
              };
              }
              
              )
            )
          )
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
  };
  return (
    <div className="daycon">
      <div>
        <div className="search">
          <SearchLocation
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            handleFormSubmit={handleFormSubmit}
          />
        </div>
        <h1>
          {searchTerm
            ? "Weather Info for " + searchTerm + ":"
            : "Find weather by location"}
        </h1>
      </div>

      <div className="main">
        {weatherInfo &&
          weatherInfo.map((i, index) => (
            <div className="days" key={index}>
              <Weatherday
                min={Math.round(i.min)}
                max={Math.round(i.max)}
                weatherType={i.weatherType}
                weatherIcon={i.weatherIcon}
                daysOfWeek={i.daysOfWeek}
                current={Math.round(i.current)}
                city={i.city}
                country={i.country}
                desc = {i.desc}
                today={i.today}
                humidity={i.humidity}
               
              />
            </div>
          ))}
      </div>
      <div  >
     
      </div>
     
    </div>
  );
};

export default Main;
