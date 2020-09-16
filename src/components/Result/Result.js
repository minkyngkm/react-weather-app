import React from 'react'
import styles from './Result.module.css'

export function Result({ weather }) {
    const date = new Date().toLocaleDateString()
    
    return(
        weather.sys && weather.name && weather.main && weather.weather ?
(
    <div className={styles.result}>
        <div className={styles.date}> {date}</div>
        <div className={styles.city}> {weather.name}, {weather.sys.country} </div>
        <div className={styles.degree}> {Math.round(weather.main.temp)}°</div>
        <div className={styles.description}> {weather.weather[0].description} </div>
        <div className={styles.humidity}>  humidity : {weather.main.humidity} %</div>
    </div>
) : "")
       
}