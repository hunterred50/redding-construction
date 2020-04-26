import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './columns.css';

const colImg = {
  objectFit: "cover",
  width: "250px",
  height: "250px",
  marginBottom: "15px"
}

const Columns = () => {
  return (
    <Container style={{position: "relative", top: 700}}>
      <Row className="justify-content-md-center">
        <Col onClick={e => window.location='/residential'} style={{cursor: "pointer"}}>
          <img className="imag" alt="residential construction pic" src="https://gdurl.com/7HbE" style={colImg}/>
          <h3>Residential Construction</h3>
          <p>We offer residential construction services. Click more to learn more.</p>
        </Col>
        <Col onClick={e => window.location='/commercial'} style={{cursor: "pointer"}}>
          <img className="imag" alt="commercial construction pic" src="https://gdurl.com/QbGi" style={{...colImg, objectPosition: "30% 50%"}}/>
          <h3>Commercial Construction</h3>
          <p>Click here to learn about our commercial services.</p>
        </Col>
        <Col onClick={e => window.location='/landscaping'} style={{cursor: "pointer"}}>
          <img className="imag" alt="landscaping pic" src="https://gdurl.com/3WfC" style={colImg}/>
          <h3>Landscaping</h3>
          <p>We also offer residential and commercial landscaping. Click here to learn more.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Columns;