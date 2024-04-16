import React, { useState } from 'react';
import { Link ,Route,Routes} from 'react-router-dom';
import '../css/Nav.css';
import Property from './Property';
import Sidebar from './Sidebar/Sidebar';

const Nav = () => {

  
  return (
    <div className='nav'>
     <div className='navbar'>
     <div className='logo'>
        <img className="image" src="logo-icon.png" alt="Logo" />
        <img className="image1" src="shape.png" alt="Shape" />
      </div>
      <div className='navlink-container'>
        <div className="navbar-list">
          <Link className="navlinks" to="/property">Property</Link>
          <Link className="navlinks" to="/property">Property</Link>
          <Link className="navlinks" to="/property">Property</Link>
          <Link className="navlinks" to="/property">Property</Link>
          <button className='work'>Work with us <img src="path.png" alt="Path" /></button>
        </div>
        <Sidebar></Sidebar>
      </div>
     </div>
    </div>
  );
}

export default Nav;