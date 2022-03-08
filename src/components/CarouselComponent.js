import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import car1 from '../resources/car1.jpg';
import car2 from '../resources/car2.jpg';
import car3 from '../resources/car3.jpg';
import { makeStyles } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const customStyles = makeStyles((theme)=>({
imageCarousel:{
width :'70vw',
height:'500px',
},
}));
function CarouselComponent() {
const classes = customStyles();
return (
<div>
<Carousel  autoPlay interval="100" transitionTime="1000" showThumbs={false}>
<div>
<img 
src={car1}
className ='img-fluid'
style={{width:'100vw', height:'90vh'}}
/>
</div>
<div>
<img 
src={car2} 
className ='img-fluid'
style={{width:'100vw', height:'90vh'}}
/>
</div>
<div style={{height:'50x'}}>
<img
src={car3}
className ='img-fluid'
style={{width:'100vw', height:'90vh'}}
/>
</div>
</Carousel>
</div>
  )
}

export default CarouselComponent