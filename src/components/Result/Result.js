import React from 'react'
import './Result.css'

export function Result({ weather }) {
    const date = new Date()
    return (
    typeof weather.main != "undefined"  ?
        (
            <div className="info">
                <div className="date"> {date.toLocaleDateString()}</div>
                <div className="city"> {weather.name}, {weather.sys.country} </div>
                <div className="degree"> {Math.round(weather.main.temp)}°</div>
                <div className="description"> {weather.weather[0].description} </div>
                <div className="humidity">  humidity : {weather.main.humidity} %</div>
            </div>
        )
        : ("")
    
    )
}