import React from 'react'
import styles from './Result.module.css'

export function Result({ weather }) {
    const date = new Date()
    weather.sys.country !== undefined ?
    (
        <div className={styles.result}>
            <div className={styles.date}> {date.toLocaleDateString()}</div>
            <div className={styles.city}> {weather.name}, {weather.sys.country} </div>
            <div className={styles.degree}> {Math.round(weather.main.temp)}°</div>
            <div className={styles.description}> {weather.weather[0].description} </div>
            <div className={styles.humidity}>  humidity : {weather.main.humidity} %</div>
        </div>
    )
    : ""
}

// typeof weather.main != "undefined"  ?
// (
//     <div className={styles.result}>
//         <div className={styles.date}> {date.toLocaleDateString()}</div>
//         <div className={styles.city}> {weather.name}, {weather.sys.country} </div>
//         <div className={styles.degree}> {Math.round(weather.main.temp)}°</div>
//         <div className={styles.description}> {weather.weather[0].description} </div>
//         <div className={styles.humidity}>  humidity : {weather.main.humidity} %</div>
//     </div>
// )
// : ("")
