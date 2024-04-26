import React from 'react'
import { customer1 ,customer2 ,customer3, Larrow, Rarrow } from '../../image'

import './Review.css'

const Review = () => {
  return (
    <div className='app_review'>
      <div className='app_review-heading'>
        <h1>Customer Reviews</h1>
        <div>
          <img src={Larrow} alt="left" />
          <img src={Rarrow} alt="right" />
        </div>
      </div>
      <div className='app_review-main'> 
      <div className='app_review-pic'>
      <img src={customer1} alt="pic" />
        <div className='app_review-cust'>
          <p>
            I has completely transformed the way I approach my design projects. The tool's ability to generate unique and innovative designs is simply mind-boggling.
          </p>
          <p>
            Elizabeth Taylor <br />
            Product Manager
          </p>
        </div>
        </div>

        <div className='app_review-pic'>
        <img src={customer2} alt="pic" />
        <div className='app_review-cust'>
          <p>
          I appreciate the flexibility it provides, allowing me to adjust parameters and fine-tune the generated designs to meet my specific requirements..
          </p>
          <p>
          Ashley Watson <br />
          Product Designer
         </p>
        </div>
        </div>
        
        <div className='app_review-pic'>
        <img src={customer3} alt="pic" />
        <div className='app_review-cust'>
          <p>
          The AI tool's speed and efficiency are impressive. It rapidly generates multiple design options, saving me valuable time and effort in the ideation phase.
          </p>
          <p>
          Caleb Jones <br />
              CEO
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Review
