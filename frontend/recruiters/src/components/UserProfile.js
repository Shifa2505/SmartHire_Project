import React from 'react'
import './userprofile.css'
import { MdAttachEmail, MdSchool, MdWorkHistory } from "react-icons/md";
import { BsFillTelephoneFill, BsFillPenFill } from "react-icons/bs";
import { FaRegHandPointRight } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

function UserProfile() {
  return (
    <div className='user-profile-wrapper'>
        <div className='user-profile-top'>
            <div className='user-img-section'>
                <img src="https://i.ibb.co/C920Myb/man-ga63c9544a-640.jpg" 
                alt="man-ga63c9544a-640" border="0" className='user-img'></img>
            </div>
        </div>
        <div>

        </div>
        <div className='user-profile-bottom'>
            <h3 className='editable'>Nupoor Shetye<span className='edit-button'><BsFillPenFill/></span></h3>
            <h3 className='editable'><MdAttachEmail />shetyenupoor10@gmail.com<span className='edit-button'><BsFillPenFill/></span></h3>
            <h3 className='editable'><BsFillTelephoneFill />+91 8104418153<span className='edit-button'><BsFillPenFill/></span></h3>
            <div className='user-details-section'>
                <div className='user-education'>
                    <h2 className='editable'><MdSchool />Education Details</h2>
                    <p className='editable'><b>College : </b> Rajiv Gandhi Institute of Technology<span className='edit-button'><BsFillPenFill/></span></p>
                    <p className='editable'><b>Degree : </b>BTech in Computer Engineering<span className='edit-button'><BsFillPenFill/></span></p>
                </div>
                <div className='user-skills'>
                    <h2><GiSkills />Skills</h2>
                    <p className='editable'><FaRegHandPointRight/>Linux<span className='edit-button'><BsFillPenFill/></span></p>
                    <p className='editable'><FaRegHandPointRight/>Operating System<span className='edit-button'><BsFillPenFill/></span></p>
                    <p className='editable'><FaRegHandPointRight/>Java and Spring Boot<span className='edit-button'><BsFillPenFill/></span></p>
                </div>
                <div className='user-experience'>
                    <h2><MdWorkHistory/> Experience and Qualifications</h2>
                    <p className='editable'><b>Designation : </b>Computer Vision Intern<span className='edit-button'><BsFillPenFill/></span></p>
                    <p className='editable'><b>Company Name : </b>EdVerb Learning Pvt. Ltd<span className='edit-button'><BsFillPenFill/></span></p>
                    <p className='editable'><b>Total Experience : </b>3 months<span className='edit-button'><BsFillPenFill/></span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfile