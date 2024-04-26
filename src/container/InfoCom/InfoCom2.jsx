import React from 'react'
import './Infocom2.css';

const InfoCom2 = ({ title, text, img }) => {
    return (
        <div className='app_info2'>
            <div className='app_info-main2'>
                <p>FEATURE</p>
                <h1> {title} </h1>
                <p>{text}</p>
            </div>
            <div className='app_info-feature2'>
                <img src={img} alt="img" />
            </div>
        </div>
    )
}

export default InfoCom2
