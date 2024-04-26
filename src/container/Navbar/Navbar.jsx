import React from 'react'
import './Navbar.css';
import logo from '../../utils/images/logo.png';

const Navbar = () => {
  return (
    <div className = "app_Navbar">
        <div className='app_Navbar-logo'>
            <img src={logo} alt="logo" />
            <h1>SoftTools</h1>
        </div>
        <ul className='app_Navbar-link'>
            <li> <a href="#Home">Home</a></li>
            <li> <a href="#SDLC Phases">SDLC Phases</a></li>
            <li> <a href="#About us">About us</a></li>
            <li> <a href="#contact us">contact us</a></li>
        </ul>

        <div className='app_Navbar-loginside'>
            <button className='app_Navbar-signup'>sign up</button>
            <div className='app_Navbar-space'></div>
            <button className='app_Navbar-login'>Login</button>
        </div>
      
    </div>
  )
}

export default Navbar
