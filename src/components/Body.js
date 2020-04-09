import React from 'react';
import Paper from '@material-ui/core/Paper';

const Body = () => {
  return (
    <div>
      <Paper elevation={3}/>
      <div style={{maxWidth: "100%", height: "100%"}}>
        <div style={{backgroundColor: "#aaaa", width: "100%", height: "100%"}} />
        <img alt="" src="https://gdurl.com/7HbE" style={{objectFit: "cover"}}/>
      </div>
    </div>
)}

export default Body;