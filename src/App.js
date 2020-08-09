import React,  { useState } from 'react'
 const api = {
  base: "https://api.openweathermap.org/data/2.5/"
 }
 const apiKey = process.env.REACT_APP_API_KEY
 
//  api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
 function App() {
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ weather, setWeather ] = useState({});
  
  const search = (e) => {
    if(e.key === "Enter"){
      fetch(`${api.base}weather?q=${searchTerm}&units=metric&appid=${apiKey}`)
      .then( res=> res.json())
      .then( data => {
        setWeather ( data )
        setSearchTerm( "" )
        console.log( data )
      })
    }
  }
  const date = new Date()
  return (
    <div className={ typeof weather.main !="undefined" ? ( weather.main.temp > 16 ?  "app warm" : "app" ) : "app" }>
      <div className="search-box">
        <input
          className="search-bar"
          type='text'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyPress={search}
        />
      </div>
      {(typeof weather.main!= "undefined") ? 
         (
        <div>
          <div className="location">
            <div> { date.toLocaleDateString()}</div>
            <div> {weather.name}, {weather.sys.country} </div>
          </div>
          <div className="weather">
            <div> {weather.main.temp} </div>
            <div> {weather.weather[0].description} </div>
            <div> humidity : {weather.main.humidity} </div>
          </div>
        </div>
      ) : ("")} 
    </div>
  )
}
export default App
