import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faMessage, faEarth } from '@fortawesome/free-solid-svg-icons'; 


import home from "../../Pages/Home/Home";
import profile from "../../Pages/Profile/Profile";
import announcement from "../../Pages/Announcement/Announcement";
import login from "../../Pages/Login/Login";
import './sidebar.css';	

function Sidebar() {
  return (
	<>
	  <nav className='sidebar'>
      <ul>
        <li className="dashboard-li"><img src="/logo.jpg" alt=""/><a href="#" className="logo">
          <span className="nav-item">Dashboard</span>
        </a></li>
        
		<li className="dashboard-li">
		  <NavLink to="/dashboard"><FontAwesomeIcon className='fa_icons' icon={faHome}/>Home</NavLink>
        </li>
        
		<li className="dashboard-li">
          <NavLink to="/profile"><FontAwesomeIcon className='fa_icons' icon={faUser}/>Profile</NavLink>
        </li>
        
		<li className="dashboard-li">
          <NavLink to="/chat"><FontAwesomeIcon className='fa_icons' icon={faMessage}/>Announcements</NavLink>
        </li>
        
		<li className="dashboard-li">
		  <NavLink to="/login"><FontAwesomeIcon className='fa_icons' icon={faEarth}/>Logout</NavLink>
        </li>
                
      </ul>
    </nav>
	</>
  )
}

export default Sidebar;
