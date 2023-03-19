import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'

function Header() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/login")
    }

  return (
    <div className='header-component-wrapper'>
        <div className='header-component-text'>
            <div className='header-greeting'>
                <h1 className='header-greeting-1'>The latest technical skills. Yours for the taking.</h1>
                <h2 className='header-greeting-2'><i>Sharpen your edge with project-based online courses and expert feedback.</i></h2>
                <h2 className='header-greeting-3'>Learn from the best instructors in class</h2>
                <div>
                    <button type='button' className='header-btn' onClick={handleClick}>GET STARTED</button>
                </div>
            </div>
        </div>
        <div className='header-component-image'>
            <div className='header-image-collage'>
                <img src='./image1.jpg' className='header-image1'/>
                <img src='./image2.jpg' className='header-image2'/>
            </div>
            <img src='./image3.jpg' className='header-image3'/>
        </div>
    </div>
  )
}

export default Header