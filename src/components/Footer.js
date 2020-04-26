import React from 'react';
import './components.css';

const Footer = () => {
  return (
    <div style={{marginTop: 1000, backgroundColor: "rgb(117, 94, 73)"}}>
      <div className="footer">
        <div className="item1">
          <h3 style={{paddingBottom: 20}}>Redding Construction & Landscaping LLC</h3>
          Phone number: <b>(850) 596-8343</b><br/>
          Email: <b>reddingconstruction1@yahoo.com</b>
        </div>
        <div className="item2">
          <b>Site Map</b><br/>
          <a href="/">Home</a><br/>
          <a href="/residential">Residential Construction</a><br/>
          <a href="/commercial">Commercial Construction</a><br/>
          <a href="/landscaping">Landscaping</a><br/>
        </div>
      </div>
    </div>
  )
}

export default Footer
