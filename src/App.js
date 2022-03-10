import './App.css';
import T from './resources/T.png';
import { Col, Container, Row } from 'react-bootstrap';
import Navigate from './components/Navigate';
import HomeCont from './components/HomeCont';
import Sal from './resources/David.jpg';
import UpdateComp from './components/UpdateComp';
import Hicon from './resources/sal.gif';
import mp from './resources/devi.png';
import { Grid, makeStyles } from '@material-ui/core';
import Hme from './resources/bgHome.png' 
import Agenda from './components/Agenda';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { useState } from 'react';
import CarouselComponent from './components/CarouselComponent';
import DraftsIcon from '@mui/icons-material/Drafts';
import Call from '@mui/icons-material/WifiCalling3';
import { height } from '@mui/system';
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
    height:'60vh'
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
  height:'100%',
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
banner:{
width:'100%',
height:'16vh',
backgroundColor:'#f39c12',
display:'flex',
},
reachRow:{
backgroundColor:'#f9ca24',
height:'13vh',
alignItems:'center',
//  align row children to center position
},
BannerItems:{
  fontSize:'20px',
  fontFamily: 'Playfair Display, serif',
  [theme.breakpoints.down('sm')]:{
fontSize:'12px',
fontWeight:'bolder',
  },
},
reachOutText:{
fontSize: '30px',
fontWeight:'bolder',
fontFamily: 'Playfair Display, serif',
fontStyle: 'italic',
[theme.breakpoints.down('sm')]:{
fontSize:'25px'
},
},
}));
function App(){ 
const classes = myStyles();
  return (
<Router>
<Grid container-fluid="true" >
<Row className={classes.reachRow}>
<Col>
  <div>
  <h2><span className={classes.reachOutText}>&nbsp;&nbsp;&nbsp;Reach out to us:</span>  <DraftsIcon style={{fontSize:'50px', width:'5%'}}/>
  <span className ={classes.BannerItems}>kibormarcel90@gmail.com</span>
 <span><Call style={{fontSize:'50px', width:'5%'}}/></span>
 <span className ={classes.BannerItems}>0712345678</span>
  </h2>
  </div>
</Col>
</Row>
<Row id='navigate'>
<Navigate/>
</Row>
<Row className={classes.topRow}>
<div className={classes.images}></div>
<div className={classes.cont}>
<div className={classes.theHomeText}>
<h1>KARIBU MOSOP.</h1>
<p>
You, the people of mosop, spoke clearly. We want dignity;
we want to put enough food on our tables, and we want a lower cost of living.
</p> 
</div>
</div>
<div className={classes.disappearingImage}> 
<img src={mp} className= 'img-fluid' style={{height:'500px'}}/>
</div>
</Row>
<Row className={classes.Agenda} id ='agenda'>
<CarouselComponent/>
</Row>
<Row id ='updates'>
<UpdateComp/>
</Row>
<Row id = 'footer'>
<Footer/>
</Row>
</Grid>
<Routes>
  <Route path='/form'/>
</Routes>
</Router>
  );
}

export default App;
