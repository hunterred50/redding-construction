import React from 'react';
import { Button } from 'react-bootstrap';
import './body.css';

const container = {
  position: "relative",
  textAlign: "left",
  // marginBottom: "50px"
}

// const backImage = {
//   objectFit: "cover",
//   objectPosition: "50% 40%",
//   width: "100%",
//   height: "600px",
//   filter: "brightness(60%)"
// }

const divOnImage = {
  position: "absolute",
  fontSize: "18px",
  color: "white"
}

const Body = () => {
  return (
    <div style={container}>
      <div style={{backgroundColor: "#aaaa", width: "100%", height: "100%"}} />
      <div style={{width: "400px", height: "200px", position: "absolute", marginLeft: "150px", marginTop: "300px"}}>
        <div style={divOnImage}>
          <h1>Quality construction<br/>with a hint of southern charm.</h1>
          <Button className="bttn" style={{backgroundColor: "#724A41", borderRadius: "0", border: "0", boxShadow: "5px 5px 5px #272822"}}>click here to learn more.</Button>
        </div>
      </div>
    </div>
)}

export default Body;