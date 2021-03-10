import React, {useEffect, useState} from 'react';


import WeatherResult from './WeatherResult'

const OpenWeather = (props) => {

    
    const [result, setResult] = useState([]);


    const key = '8d98acf691039a289253daf08a562f83';
    let lat = props.latitude;
    let lon = props.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

    console.log(url);

    const fetchResult = async () => {
        await fetch (url)
        .then(res => res.json())
        .then(json => {
            setResult(json);
            //console.log(json);
            //console.log(url);
            })
    };

    useEffect (() => { 
        fetchResult();
    }, []);
    
    console.log(result);
    console.log(lat, lon);


    return (
        <div>
            weather
            <WeatherResult result= {result} />
        </div>
    )
}

export default OpenWeather;