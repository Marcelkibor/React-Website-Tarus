import React from 'react'
import { Carousel } from 'react-bootstrap'
import car1 from '../resources/car1.jpg';
import car2 from '../resources/car2.jpg';
import car3 from '../resources/car3.jpg';
function CarouselComponent() {
  return (

    <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="img-fluid"
      src={car1}
      alt="First slide"
      style={{maxHeight:'500px',width:'80vw'}}
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
       className="img-fluid"
      src={car2}
      alt="Second slide"
      style={{maxHeight:'500px',width:'80vw'}}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
       className="img-fluid"
      src={car3}
      alt="Third slide"
      style={{maxHeight:'500px',width:'80vw'}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default CarouselComponent