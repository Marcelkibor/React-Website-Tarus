import React from 'react'
import '../App.css'
import Sal from '../resources/sal.gif' 
import {Navbar,Nav} from 'react-bootstrap';
function Navigate() {
  return (
    <div id ='navigation'>
  <Navbar expand="lg" className = 'navbar-custom'>
  <Navbar.Brand href="#home"><h4 style={{color:'white'}}>David Tarus</h4></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" style ={{magin:'25%'}}>  
  <Nav className="mr-auto items_spacer" >
  <Nav.Link  href="#agenda"className ='nav_items'>Agenda</Nav.Link>
  <Nav.Link  href="#updates"className ='nav_items'>Updates</Nav.Link> 
   <Nav.Link  href="#prog"className ='nav_items'>Programs</Nav.Link>  </Nav>  
  </Navbar.Collapse>
  </Navbar>
  </div>
  )
}

export default Navigate