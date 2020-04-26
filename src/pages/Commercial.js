import React from 'react';

const Commercial = () => {
  console.log('page reached');
  return (
    <div style={{position: "relative"}}>
      <p style={{color: "transparent"}}>h</p>
      <div style={{position: "absolute", marginTop: "200px", width: "100%"}}>
        <iframe title="googlemaps streetview" src="https://www.google.com/maps/embed?pb=!4v1587764272124!6m8!1m7!1suZRbp-gP53accKl02h0R2Q!2m2!1d30.23797483151755!2d-85.55682208252969!3f243.75571609755087!4f1.9816654959615647!5f1.4806372401440533" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"/>
      </div>
    </div>
  )
}

export default Commercial;
