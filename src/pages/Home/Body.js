import React from 'react';
import { Button } from 'react-bootstrap';
import { useMediaQuery } from "react-responsive";
import './body.css';

const container = {
  position: "relative",
  textAlign: "left",
}

const Body = () => {
  const isMobile = useMediaQuery({ query: "(max-device-width: 500px)" });
  return (
    <div style={container}>
      <div style={{backgroundColor: "#aaaa", width: "100%", height: "100%"}} />
      <div className={isMobile ? "outerDivOnImageMobile" : "outerDivOnImage"}>
        <div className="divOnImage">
          <h1 style={{color: "white"}}>Quality construction<br/>with a hint of southern charm.</h1>
          <Button className="bttn" style={{backgroundColor: "#724A41", borderRadius: "0", border: "0", boxShadow: "5px 5px 5px #272822"}}>click here to learn more.</Button>
        </div>
      </div>
    </div>
)}

export default Body;