import React, { useState } from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div>
                <div className="sidebar-toggle">
                    
                    <p onClick={toggleDropdown} className='sidebar-open-btn' href="#Nav-Link"><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></p>

      {isOpen && (
        <div className='sidebar-container'>
        <div className="navbar-lists">
        <a className='sidebar-close-btn' href="#Nav-Link"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
      <Link className="navlinks" to="/property">Property</Link>
      <Link className="navlinks" to="/property">Property</Link>
      <Link className="navlinks" to="/property">Property</Link>
      <Link className="navlinks" to="/property">Property</Link>
      <Link className="navlinks" to="/property">Property</Link>
      <button className='work'>Work with us <img src="path.png" alt="Path" /></button>
    </div>
        </div>
      )}
    </div>


            
        </div>
    );
};

export default Sidebar;