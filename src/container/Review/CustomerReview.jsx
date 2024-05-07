import React from 'react'

const CustomerReview = ({img,review,Cname,position}) => {
  return (
      <div className='app_review-pic'>
      <img src={img} alt="pic" />
        <div className='app_review-cust'>
          <p>
            {review}
          </p>
          <p>
            {Cname} <br />
            {position}
          </p>
        </div>
        </div>
  )
}

export default CustomerReview
