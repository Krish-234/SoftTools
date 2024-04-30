import React from 'react'
import './Comp.css'


const Comp = ({img,title}) => {
  return (
    <div className='app_comp'>
      <div className='app_comp-container'>
      <div className='app_comp-img'>
        <img src={img} alt="" />
      </div>
      <div className='app_comp-text'>
        <h2>{title}</h2>
        <button>View</button>
      </div>
      </div>
    </div>
  )
}

export default Comp
