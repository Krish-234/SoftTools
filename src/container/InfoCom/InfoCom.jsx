import React from 'react'
import './Infocom.css';

const InfoCom = ({title , text , img}) => {
  return (
    <div className='app_info'>
      <div className='app_info-feature'>
        <img src={img} alt="img" />
        </div>
        <div className='app_info-main'>
          <p>FEATURE</p>
          <h1> {title} </h1>
          <p>{text}</p>
        </div>
    </div>
  )
}

export default InfoCom
