import React, {useState, useEffect} from 'react';
import {ListGroup, ListGroupItem, ListGroupItemHeading, Button} from 'reactstrap';


const WeatherResult = (props) => {

    console.log(props);

  
 

    return (
        <div>
            {
                props.result.map(r=>{ 
                    let temp = Math.floor((r.main.temp - 273.15)*(9/5)+32);
                    let tempC = Math.floor(r.main.temp - 273.15);

                    return(
                        
                <ListGroup>
                    <ListGroupItemHeading>Weather</ListGroupItemHeading>
                    <ListGroupItem>{r.weather.description}</ListGroupItem>
                    <ListGroupItem>Temperature: {temp} F</ListGroupItem>
                    <ListGroupItem>Relative Humidity: {r.main.humidity}</ListGroupItem>
                </ListGroup>
                        
                    )
                })
            }
        </div>
    )
}

export default WeatherResult;