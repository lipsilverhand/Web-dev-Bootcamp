import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render (
  <div className='main'>
    <h1 className="heading" contentEditable="true">My Favorite Foods</h1>
    <div className='list'>
      <div className='sep'>
        <p>Pizza</p>
        <img className='im' src='images/pizza.jpg'/>
      </div>
      <div className='sep'>
        <p>Sushi</p>
        <img className='im' src='images/sushi.jpg'/>
      </div>
      <div className='sep'>
        <p>Noodles</p>
        <img className='im' src='images/noodle.jpg'/>
      </div>
    </div>
    <p className='copy'>@Copyright lip_silverhand 2024</p>
  </div>,
document.getElementById('root')  
);