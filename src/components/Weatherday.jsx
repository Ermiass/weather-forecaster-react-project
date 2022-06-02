import React from 'react'

const Weatherday = ({min,max,weatherType,weatherIcon}) => {
  return (
      <div >
     <div><img src={`https://openweathermap.org/img/w/${weatherIcon}.png`} alt={weatherType} /></div>
    <div>Min:{min}°F Max:{max}°F</div>
    <div>{weatherType}</div>
      </div>
   
  )
}

export default Weatherday