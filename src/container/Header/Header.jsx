import React from 'react'
import headerImg from '../../utils/images/headerImg.png';
import phases from '../../utils/images/phases.png';

import './Header.css'

const Header = () => {
  return (
    <>
    <div className='app_header'>
      <div className='app_header-info'>
        <h1>Welcome to the SoftTools</h1>
        <p>Your one-stop solution for all software testing tools used in Secure Software <br /> Development Life Cycle (SSDLC).</p>
        <button className='started-btn'>Get Started</button>
      </div>
      <div className='app_header-img'>
        <img src={headerImg} alt="img"/>
      </div>
    </div>
    <div className='space'></div>
  </>
  )
}

export default Header
