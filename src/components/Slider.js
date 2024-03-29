import React from 'react'
import Carousel  from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({start}) => { 
  
  return (
    <Carousel fade>
     {start.map((item,i) => {
      
        return(<Carousel.Item key={i}>
            <img 
            className="d-block w-100"
            src={item}
             alt=" "
             />
            </Carousel.Item>)
          
         
     })}
    </Carousel>

    
 
 )};



export default Slider;