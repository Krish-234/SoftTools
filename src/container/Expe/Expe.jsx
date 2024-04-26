import React from 'react'
import frame from '../../utils/images/Frame.png'
import './Expe.css';

const Expe = () => {
  return (
    <div className='app_Expe'>
    <div className='app_Expe-main'>
        <p>FEATURE</p>
        <h1> Experience the Best Testing Tools</h1>
        <p>Sign up for a free demo and discover how our tool can optimize your testing process.</p>
        <button className='app_Expe-btn'> Sign up </button>
    </div>
    <div className='app_Expe-feature'>
        <img src={frame} alt="img" />
    </div>
</div>
  )
}

export default Expe

