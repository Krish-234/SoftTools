import React from 'react'
import { sphase } from '../../image'
import Comp from '../Comp/Comp'
import { planning, DesignP, Development, Testing, Deployment, Maintenance} from '../../image'

import './SDLCphases.css'

const SDLCphases = () => {
  return (
    <div className='app_phases' id='Phases'>
      <div className='app_phases-img'>
        <img src={sphase} alt="img" />
      </div>
      <div className='app_phases-container'>
        <div className='app_phases-comp'>
          <Comp img={planning} title = "Planning and Requirement"/>
          <Comp img={DesignP} title = "Design"/>
          <Comp img={Development} title = "Development"/>
        </div>  
        <div className='app_phases-comp'>
        <Comp img={Testing} title = "Testing"/>
        <Comp img={Deployment} title = "Deployment"/>
        <Comp img={Maintenance} title = "Maintenance"/>
        </div>
        <div className='space2'></div>
      </div>
      
    </div>
  )
}

export default SDLCphases
