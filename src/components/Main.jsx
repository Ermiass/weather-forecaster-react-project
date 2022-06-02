import React, { useEffect, useState } from "react"
import SearchLocation from "./SearchLocation"
import Weatherday from "./Weatherday"
import getLocation from "../Api"


const apiKey = process.env.REACT_APP_API_KEY;

const Main = () => {
     const [weatherInfo, setWeatherInfo] = useState()
     const [searchTerm, setSearchTerm] = useState('dumfries, VA')

    const getweather=()=>{

  getLocation(searchTerm)
  .then(res=>{
 const { lat } = res.data[0];
 const { lon } = res.data[0];
   fetch
    
    //  (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${apiKey}`)
   .then(res=>res.json())
  //  .then(res=>console.log(res)) 
   .then(data=>setWeatherInfo(data.daily.map(df=>{
      return {
       min: df.temp.min,
       max: df.temp.max,
       weatherType:df.weather ? df.weather[0].main : null,
       weatherIcon:df.weather ? df.weather[0].icon : null
     }

   })))
   .catch((erorr)=>console.log(erorr));
  })
  .catch((erorr)=>console.log(erorr))
    };
    useEffect(()=>{
      getweather()
    },[])

const handleSearch = (e)=> {
  setSearchTerm(e.target.value);
};
const handleFormSubmit = e => {
  e.preventDefault();
  getweather()
  // (searchTerm);
}

  return (
    
    <div>
      <SearchLocation searchTerm={searchTerm} handleSearch={handleSearch} handleFormSubmit={handleFormSubmit}/>
        <div className="main">
    { !!weatherInfo && weatherInfo.map((i, index)=>(<div className="days" key={index}>
      <Weatherday min={i.min} max={i.max} weatherType={i.weatherType} weatherIcon={i.weatherIcon} />
    </div>))}
   
    </div>
    </div>
  
  )
}

export default Main