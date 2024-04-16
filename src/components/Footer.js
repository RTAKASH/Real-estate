import React from 'react'
import { useState } from 'react';
import "../css/Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-content'>
     <h1>Make your dreams a <span>reality</span></h1>
     <button className='button5'>Work with us<img src="path.png"/></button>
     </div>
     <img src="Rect.png" className='rect'/>
      <div className='footer-links'>
      <div className='footer-img'>
      <img src="logo-icon.png"className='footer-image'/>
      <img src ="shape.png"className='footer-image2'/>
      </div>
      <div className='media-links'>
        <img src="FACEBOOK.png"/>
        <img src="twitter.png"/>
        <img src="004-instagram.png"/>
      </div>
      <div className='footer-links1'>
      <h1>Column Heading</h1>
      <ul className='links'>
        <li>Link goes here</li>
        <li>Link goes here</li>
        <li>Link goes here</li>
        <li>Link goes here</li>
      </ul>
      </div>
      <div className='footer-links2'>
      <h1>Column Heading</h1>
      <ul className='links'>
        <li>Link goes here</li>
        <li>Link goes here</li>
        <li>Link goes here</li>
        <li>Link goes here</li>
      </ul>
      </div>
      <div className='footer-links3'>
      <h1>Column Heading</h1>
      <ul className='links'>
        <li>Link goes here</li>
        <li>Link goes here</li>
        <li>Link goes here</li>
        <li>Link goes here</li>
      </ul>
      </div>
     </div>
     </div>
  )
}

export default Footer