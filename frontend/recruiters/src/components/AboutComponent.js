import React from 'react'
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import './about.css'

function AboutComponent() {
  return (
    <div className='about-component-wrapper'>
      <div className='about-image'>
        <h1>Get Started with your Career Journey</h1>
        <img src='./rocket.png' alt='rocket image'></img>
      </div>     
      <div className='about-points'>
        <h3><BsFillBookmarkCheckFill />Propel your career, get a degree, or expand your knowledge at any level.</h3>
        <h3><BsFillBookmarkCheckFill />Acquire the skills needed to establish a fruitful career</h3>
        <h3><BsFillBookmarkCheckFill />Grow at your own pace and time</h3>
        <h3><BsFillBookmarkCheckFill />Connect with like minded people and build a culture of learning.</h3>
        <h3><BsFillBookmarkCheckFill />Trusted by over 1 lakh learners who are marking their journey with us</h3>
      </div>
    </div>
  )
}

export default  AboutComponent;