import React from 'react';
import './components.css';
import { Navbar as Bootnav, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  let location = useLocation();
  let home = false;
  if (location.pathname === '/')
    home = true;
  else
    home = false;

  const isMobile = useMediaQuery({ query: "(max-device-width: 500px)" });

  return (
    <div style={{width: "100%"}}>
      <div className={home ? "nav-bg-home" : isMobile ? "nav-bg-mobile" : "nav-bg"}>
        <Bootnav className={isMobile ? "navb-mobile" : "navb"} expand="md" variant="light" sticky="top">
          <Bootnav.Brand href="/">Redding Construction & {isMobile && <br/>}Landscaping LLC</Bootnav.Brand>
          <Bootnav.Toggle aria-controls="basic-navbar-nav" />
          <Bootnav.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/residential">Residential</Nav.Link>
            <Nav.Link href="/commercial">Commercial</Nav.Link>
            <Nav.Link href="/landscaping">Landscaping</Nav.Link>
            </Nav>
          </Bootnav.Collapse>
        </Bootnav>
      </div>
    </div>
  )
}

export default Navbar;