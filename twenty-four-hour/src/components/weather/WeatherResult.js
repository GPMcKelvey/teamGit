import React, {useState, useEffect} from 'react';
import {ListGroup, ListGroupItem, ListGroupItemHeading, Button} from 'reactstrap';


const WeatherResult = (props) => {

    console.log(props.result)

//    let temp = Math.floor((props.result.main.temp - 273.15)*(9/5)+32);
//    let tempC = Math.floor(props.result.main.temp - 273.15);

 

    return (
        <div>
            weather results
            {/* <ListGroup>
                <ListGroupItemHeading>Weather</ListGroupItemHeading>
                <ListGroupItem>{props.result.weather.description}</ListGroupItem>
                <ListGroupItem>Temperature: {temp}</ListGroupItem>
                <ListGroupItem>Relative Humidity: {props.result.main.humidity}</ListGroupItem>
            </ListGroup> */}
        </div>
    )
}

export default WeatherResult;