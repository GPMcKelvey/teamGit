import React, {useState, useEffect} from 'react';
import {ListGroup, ListGroupItem, ListGroupItemHeading, Button} from 'reactstrap';


const WeatherResult = (props) => {

    console.log(props);
    const [toggle, setToggle] = useState(false);

    const handleClick = (e) => {
        if(toggle === true){
            setToggle(false);
        }else {
            setToggle(true);}
    }

  useEffect (()=>{
      setToggle(false);
  }, []);
 

    return (
        <div>
            {
                props.result.map(r=>{ 
                    let temp = Math.floor((r.main.temp - 273.15)*(9/5)+32);
                    let tempC = Math.floor(r.main.temp - 273.15);
                    let maxTemp = Math.floor((r.main.temp_max - 273.15)*(9/5)+32);
                    let maxTempC = Math.floor(r.main.temp_max - 273.15);
                    let minTemp = Math.floor((r.main.temp_min - 273.15)*(9/5)+32);
                    let minTempC = Math.floor(r.main.temp_min - 273.15);




                    return(
                        
                <ListGroup>
                    <ListGroupItemHeading>Today's Weather</ListGroupItemHeading>
                    <ListGroupItem>{r.weather[0].description}</ListGroupItem>
                    <ListGroupItem>Relative Humidity: {r.main.humidity}%</ListGroupItem>
                    <ListGroupItem>Current Temperature: {toggle ? `${temp} F` : `${tempC} C`} </ListGroupItem>
                    <ListGroupItem>Maximum Temperature: {toggle ? `${maxTemp} F` : `${maxTempC} C`} </ListGroupItem>
                    <ListGroupItem>Minimum Temperature: {toggle ? `${minTemp} F` : `${minTempC} C`} </ListGroupItem>
                    <Button onClick={handleClick}>Fahrenheit/Celsius</Button>
                </ListGroup>
                        
                    )
                })
            }
        </div>
    )
}

export default WeatherResult;