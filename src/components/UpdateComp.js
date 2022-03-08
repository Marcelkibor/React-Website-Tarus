import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import straw from '../resources/straw.jpg';
import ova from '../resources/ova.jpg';
import pas from '../resources/pas.jpg'
import { Row,Col } from 'react-bootstrap';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import {makeStyles} from "@material-ui/core";
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
const ExpandMore = styled((props) => {
const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
marginLeft: 'auto',
transition: theme.transitions.create('transform', {
duration: theme.transitions.duration.shortest,
}),
}));
const useStyles = makeStyles((theme) => ({
cardSpacer: {
//  card styling for small and extra small -> okay and done
[theme.breakpoints.down('sm')]:{
width:'100vw',
height:'100%',
},
// card styling for medium devices
[theme.breakpoints.only('md')]:{
width:'40vw',
height:'100%',
},
// card styling for large devices
[theme.breakpoints.only('lg')]:{
  width:'40vw',
  height:'100%',
},
// card styling for extra large devices
[theme.breakpoints.only('xl')]:{

},
},
cardColumn:{
padding:'0% 0% 3% 0%',
},
imageTransform:{
'&:hover': {
transition: "transform 0.15s ease-in-out",
transform: "scale3d(1.2, 1.05, 1)",
},
},

}));

function UpdateComp() {
const [expanded, setExpanded] = React.useState(false);
const handleExpandClick = () => {
setExpanded(!expanded);
};
const classes = useStyles();

  return (

<div>
<Box style={{backgroundColor:'white',textAlign:'center'}}>
<Row>
<h3>Food Security</h3>
<p>Measures to ensure we reach 100% self sustainance of food security in MOSOP</p>
<Col className={classes.cardColumn}>
{/* Avocado card */}
<Card className = {classes.cardSpacer}>
<h5 style={{padding: '5% 0% 2% 5%'}}>
<b>Afya kwa wote</b>
</h5>
<CardMedia className={classes.imageTransform}
height="200"
component="img"
image = {ova}
alt="bed and breakfast"
/>
<CardContent >
<Typography variant="body2" color="text.secondary">
Natured carefully and selection is done from only the finest ones.
</Typography>
</CardContent>
<CardActions disableSpacing>
<ExpandMore
expand={expanded}
onClick={handleExpandClick}
aria-expanded={expanded}
aria-label=" Rooms Prices">
<ExpandMoreIcon />
</ExpandMore>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
<CardContent>
<Typography paragraph><b>Pricing :</b> Per Kg <b>300</b></Typography>  
<Typography paragraph><b>Variety:</b> Hass</Typography>    
</CardContent>
</Collapse>
</Card>
</Col>
<Col className={classes.cardColumn}>
{/* Strawbaerry card. */}
<Card className = {classes.cardSpacer}>
<h5 style={{padding: '5% 0% 2% 5%'}}>
<b>Kilimo Bora</b>
</h5>
<CardMedia className={classes.imageTransform}
component="img"
height="200"
image = {straw}
alt="Paella dish"
/>
<CardContent>
<Typography variant="body2" color="text.secondary">
Natured carefully and selection is done from only the finest ones.
</Typography>
</CardContent>
<CardActions disableSpacing>
<ExpandMore
expand={expanded}
onClick={handleExpandClick}
aria-expanded={expanded}
aria-label="show more">
<ExpandMoreIcon />
</ExpandMore>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
<CardContent>
<Typography paragraph><b>Pricing :</b> Per Palette <b>100</b></Typography>  
<Typography paragraph><b>Variety:</b> Chandelier Strawberry</Typography>     
</CardContent>
</Collapse>
</Card> 
</Col>
{/* Passion card done*/ }
<Col className={classes.cardColumn}>
<Card className = {classes.cardSpacer}>
<h5 style={{padding: '5% 0% 2% 5%'}}>
<b>Maendeleo za kisasa</b>
</h5>
<CardMedia className={classes.imageTransform}
component="img"
height="200"
image = {pas}
alt="Paella dish"
/>
<CardContent>
<Typography variant="body2" color="text.secondary">
It is easy to incorporate this fruit into a nutritious diet in multiple ways </Typography>
</CardContent>
<CardActions disableSpacing>
<ExpandMore
expand={expanded}
onClick={handleExpandClick}
aria-expanded={expanded}
aria-label="show more">
<ExpandMoreIcon />
</ExpandMore>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
<CardContent>
<Typography paragraph><b>Pricing :</b> Per Kg <b>300</b></Typography>  
<Typography paragraph><b>Variety:</b> Hass</Typography>  
</CardContent>
</Collapse>
</Card> 
</Col>

</Row>
</Box>
    </div>
  )
}

export default UpdateComp