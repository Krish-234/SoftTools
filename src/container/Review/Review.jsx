import React from 'react'
import { customer1 ,customer2 ,customer3, Larrow, Rarrow } from '../../image'
import CustomerReview from './CustomerReview.jsx'
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
     
        <CustomerReview img={customer1}
         review="I has completely transformed the way I approach my design projects. The tool's ability to generate unique and innovative designs is simply mind-boggling." 
         Cname = "Elizabeth Taylor" position="Product Manager"/>

        <CustomerReview img={customer2}
                  review="I appreciate the flexibility it provides, allowing me to adjust parameters and fine-tune the generated designs to meet my specific requirements." 
                  Cname = "Ashley Watson" position="Product Designer"/>

        <CustomerReview img={customer3}
                  review="The AI tool's speed and efficiency are impressive. It rapidly generates multiple design options, saving me valuable time and effort in the ideation phase." 
                  Cname = "Caleb Jones" position="CEO"/>

      </div>
    </div>
  )
}

export default Review
