import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import './Slider.css'

const Slider = (props) => {
    const {name, description, image, id} = props.place;

    const history = useHistory();

    const handleBooking = () =>{
        history.push(`/booking/${id}`)
    }
 
  

    return (
        
        <div className="main-slider">
            
            <div className="card">
              <Card.Img variant="top" src={image} />
              <h3 className="text-white">{name}</h3>
                <button onClick={handleBooking} className="head-button">Book now</button>
               
              </div>               
        
        </div>
        
    );
};

export default Slider;