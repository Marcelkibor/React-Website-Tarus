import './App.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigate from './components/Navigate';
import HomeCont from './components/HomeCont';
import Sal from './resources/David.jpg';
import Hicon from './resources/sal.gif';
import mp from './resources/devi.png';
import { Grid, makeStyles } from '@material-ui/core';
import Hme from './resources/bgHome.png' 
import Agenda from './components/Agenda';
import Updates from './components/Updates';
import Footer from './components/Footer';
import CarouselComponent from './components/CarouselComponent';

const myStyles = makeStyles((theme) => ({
  topRow:{
position:'relative',
  },
  images: {
    backgroundImage: `url(${Sal})`,
    height: '90vh',
    width: '100%',    
    position:'relative',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  [theme.breakpoints.down('sm')]:{

  }  
  },
  hmeTxt:{
    textAlign:'center',
    position:'absolute',
    color:'white',
    fontSize:'50px',
    [theme.breakpoints.down('sm')]:{
      display:'none',
    },
},
mp:{
position:'absolute',
color:'white',

[theme.breakpoints.down('sm')]:{
  textAlign:'center',
},
},
mpRow:{
  position:'absolute',
},
theHomeText:{
fontSize: '25px',
fontFamily: 'Playfair Display, serif',
fontStyle: 'italic',
color:'white',
width:'500px',
[theme.breakpoints.down('sm')]:{
  fontSize: '20px',
  width:'75%',
}
},
Agenda:{
  textAlign:'center',
  height:'100vh',
},
Updates:{
  textAlign:'center',
},
cont:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  position:'absolute',
  paddingLeft: 'inherit',
  paddingRight: 'inherit',
  paddingTop:'inherit',
  left:'10vw',
 top:'30vh',
 [theme.breakpoints.down('sm')]:{
   top:'10vh',
   left:'0vw',
 }


},
imgCol:{
  [theme.breakpoints.down('sm')]:{
    display:'none',  
  },
},
disappearingImage:{
  display:'flex',
  position:'absolute',
  paddingLeft: 'inherit',
  paddingRight: 'inherit',
  paddingTop:'inherit',
 top:'5vh',
 [theme.breakpoints.down('sm')]:{
display:'none',
visibility: 'none'
 },
},
  }));

function App(){ 
const classes = myStyles();
  return (
<Grid container-fluid="true" >
<Row id='navigate'>
  <Navigate/>
</Row>
<Row className={classes.topRow}>
  <div className={classes.images}></div>
  <div className={classes.cont}>
    <p className={classes.theHomeText}>
      <h1>KARIBU MOSOP.</h1>
    You, the people of mosop, spoke clearly. We want dignity;
     we want to put enough food on our tables, and we want a lower cost of living. 
    </p>
  </div>
  <div className={classes.disappearingImage}> 
  <img src={mp} className= 'img-fluid' style={{height:'500px'}}/>
  </div>
</Row>
<Row className={classes.Agenda} id ='agenda'>
  <Agenda/>
  <CarouselComponent/>
</Row>
<Row id ='updates' style={{height:'100vh'}}>
  <Updates className={classes.Updates}/>
</Row>
<Row>
<Footer/>
</Row>
</Grid>
  );
}

export default App;
