import React, {useState} from 'react';



const Weather = (props) => {

    //const [result, setResult] = useState([])

    const key = 'afbbc4307952a67728f72bcec865d932';
    let city = 'indianapolis'

    // const FetchWeather = () => {}

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    fetch (url)
        .then(res => res.json())
        .then(json => {
            //setResult(json);
            console.log(json)
        }).catch(err => console.log(err))


    return (
        <div className="main">
            <h1>weather</h1>
            {/* <FetchWeather /> */}
        </div>
    )
}

export default Weather;