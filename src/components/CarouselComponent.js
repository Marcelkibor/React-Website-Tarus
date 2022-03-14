import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import car1 from '../resources/car1.jpg';
import car2 from '../resources/car2.jpg';
import car3 from '../resources/car3.jpg';
import { makeStyles } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent,Typography } from '@mui/material';
import { height, style } from '@mui/system';

const customStyles = makeStyles((theme)=>({
componentSpacer:{
 width:'80vw',
 height:'100%',
 display:'flex',
 alignItems:'center',
 textAlign:'center',
 [theme.breakpoints.down('sm')]:{
display:'block'
 },},

}));
function CarouselComponent() {
const classes = customStyles();
const resImg = 'img-fluid'
return (
<div>
<Carousel  autoPlay interval="6000" transitionTime="1000" showThumbs={false}>
<div className={classes.componentSpacer}>
  <img 
src={car1}
className ='carouselImages'
/>
<Card className='carouselCard'>
  <CardContent>
    <Typography>
    Coffee distribution program
    <br></br>is now underway as one of the thing
    </Typography>
  </CardContent>
</Card>
</div>
<div className={classes.componentSpacer}>
  <img 
src={car2} 
className = 'carouselImages'
/>
<Card className='carouselCard'>
  <CardContent>
    <Typography>
    Coffee distribution program <br></br>is now underway as one of the thing
    </Typography>
  </CardContent>
</Card>
</div>
<div className={classes.componentSpacer}>
  <img 
src={car3} 
className = 'carouselImages'
/>
<Card className='carouselCard'>
  <CardContent>
    <Typography>
    Coffee distribution program<br></br> is now underway as one of the thing
    </Typography>
  </CardContent>
</Card>
</div>
</Carousel>
</div>
  )
}
export default CarouselComponent