import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date();
const currenthour = date.getHours();
const currentmin = date.getMinutes();


let greeting;
let timeday;

const customStyle = {
  backgroundColor: "",
  color: "",
}

const bor = {
  borderBottom: ""
}

if (currenthour < 12) {
  greeting = "GOOD MORNING";
  timeday = "am";
  customStyle.backgroundColor = "white";
  customStyle.color = "black";
  bor.borderBottom = "5px solid black";
} else if (currenthour < 18) {
  greeting = "GOOD AFTERNOON";
  timeday = "pm";
  customStyle.backgroundColor = "orange";
  customStyle.color = "white";
  bor.borderBottom = "5px solid white";
} else {
  greeting = "GOOD EVENING";
  timeday = "pm";
  customStyle.backgroundColor = "purple";
  customStyle.color = "white";
  bor.borderBottom = "5px solid white";
}

ReactDOM.render (
  <div className='main' style={customStyle}>
    <h1 className='heading' style={bor}>{greeting}</h1>
    <p className='time'>{currenthour}:{currentmin} {timeday}</p>
  </div>,
document.getElementById('root')
);