import React, {useEffect, useState} from 'react';


import WeatherResult from './WeatherResult'

const OpenWeather = (props) => {

    
    const [result, setResult] = useState([]);
    const [display, setDisplay] = useState(false);

    console.log(result);


    const key = '7a1807114aad9a1d5ff9ab42661fc2d8';
    let lat = props.latitude;
    let lon = props.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

    console.log(url);

    const fetchResult = async () => {
       try{ await fetch (url)
        .then(res => res.json())
        .then(json => {
            setResult([...result, json]);
            setDisplay(true);
            //console.log(json);
            //console.log(url);
            })}catch (error){ console.log(error)}
    };

    useEffect (() => { 
        setDisplay(false);
        fetchResult();
    }, []);
    
    console.log(result);
    console.log(lat, lon);


    return (
        <div>
            weather
            {display ? <WeatherResult result= {result}/> : null} 
        </div>
    )
}

export default OpenWeather;