import React from 'react'
import './Footer.css'

import logo from '../../utils/images/logo.png'

const Footer = () => {
  return (
    <div className='app_Footer'>
      <div className='app_Footer-logo'>
        <img src={logo} alt="logo" />
        <h1>SoftTools </h1>
        <p> All rights reserved.</p>
        </div>
        <ul className='app_Footer-link'>
            <li> <a href="#Home">Home</a></li>
            <li> <a href="#SDLC Phases">SDLC Phases</a></li>
            <li> <a href="#About us">About us</a></li>
            <li> <a href="#contact us">contact us</a></li>
        </ul>
        <ul className='app_Footer-link'>
            <li> <a href="#Facebook">Facebook</a></li>
            <li> <a href="#Instagram">Instagram</a></li>
            <li> <a href="#Twitter">Twitter</a></li>
            <li> <a href="#Linkedin">Linkedin</a></li>
        </ul>
        <ul className='app_Footer-link'>
            <li> <a href="#Privacy policy">Privacy policy</a></li>
            <li> <a href="#Terms of Service">Terms of Service</a></li>
        </ul>
        
    </div>
  )
}

export default Footer
