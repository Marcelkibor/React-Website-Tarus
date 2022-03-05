import './App.css';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Navigate from './components/Navigate';
import HomeCont from './components/HomeCont';
import Sal from './resources/David.jpg'
import Hicon from './resources/sal.gif'
import { Grid, makeStyles } from '@material-ui/core';
import Hme from './resources/bgHome.png' 
import Agenda from './components/Agenda';
import Updates from './components/Updates';
import Footer from './components/Footer';

const myStyles = makeStyles((theme) => ({
  images: {
    backgroundImage: `url(${Sal})`,
    height: '90vh',
    width: '100%',    
    position:'relative',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  [theme.breakpoints.down('sm')]:{
backgroundImage:'none',
height: '0px',
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
imgHIDE:{

  height: '100%'
},
Agenda:{
  textAlign:'center',
  height:'100vh',
},
Updates:{
  textAlign:'center',
  height:'100vh',
  backgroundColor:'yellow',
}

  }));

function App(){ 
const classes = myStyles();
  return (
    <Grid container-fluid spacing={2}>
<Row>
  <Navigate/>
</Row>
<Row>
  <div className={classes.images}></div>
  <div className={classes.hmeTxt}>
  <p>David Tarus</p>
  <img src={Hicon} alt = 'image here' className={classes.imgHIDE}/>
  </div>
</Row>
<Row className={classes.Agenda} id ='agenda'>
  <Agenda/>
</Row>
<Row id ='updates' className={classes.Updates}>
  <Updates/>
</Row>
<Row>
  <Footer/>
</Row>
    </Grid>

  );
}

export default App;
