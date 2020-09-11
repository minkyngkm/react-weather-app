import React, { useState } from 'react'
import { SearchBar } from './components/SearchBar/SearchBar';
import { Result } from './components/Result/Result';

const api = {
  base: "https://api.openweathermap.org/data/2.5/"
}
const apiKey = process.env.REACT_APP_API_KEY

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${searchTerm}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
          setWeather(data)
          setSearchTerm("")
        })
    }
  }
  const changeHandler = e => setSearchTerm(e.target.value)
  
  return (
      <div className={weather.main !== undefined ? (weather.main.temp > 16 ? "app warm" : "app") : "app"}>
        <SearchBar searchTerm={searchTerm} search={search} changeHandler={changeHandler}/>
        <Result weather={weather}/>
      </div>

  )
}
export default App
