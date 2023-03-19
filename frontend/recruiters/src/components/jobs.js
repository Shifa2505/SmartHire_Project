import React, { Component , useState} from "react";
import {useNavigate} from "react-router-dom";
import Company from "./company";
// import { TagInput } from 'react-tag-input';
import "./jobs.css";
import TagsInput from "./tagsInput";
import axios from 'axios';

export function Jobs() {

  const navigate = useNavigate();
  // const [tags, setTags] = useState([]);

  const[title, setTitle]= useState("");
  const[description, setDescription]= useState("");
  const[skills, setskills]= useState([]);
  const[salary, setSalary]= useState("");

  const submitjobDetails = async (e) => {
    e.preventDefault();
    let formdata = new FormData()
  
    formdata.append('Jname', title)
    formdata.append('Jdescription', description)
    formdata.append('Jskills', skills)
    formdata.append('Jsalary', salary)
    formdata.append("company_id", window.localStorage.getItem("company_id"))
    // console.log(formdata.values())

    const res = await axios.post('http://192.168.43.217:8000/api/add_job', formdata, {
  
      // mode: "cors",
    })
    var res_data = await res.data
    console.log(res_data);
    window.localStorage.setItem("company_id", res_data)
    navigate("/company")
  }

    return (
      <div className="jobsPage">
        <h1>POST JOB</h1>
        <div className="form container">
        <div className="companyForm">
        <label className="input">Job Title</label>
        <input type="text" name="job title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

        <label className="input">Job Description</label>
        <textarea className="input" name="company desc" rows = "4" cols="25" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>

        <label className="input">Required Skills</label>
        <TagsInput tags={skills} setTags={setskills}/>

        <label className="input">Salary</label>
        <input type="number" name="salary" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/>

        <button className="btn btn-primary" onClick={(e)=>{submitjobDetails(e)}}>
          Submit
        </button>
        </div>
        </div>
      </div>
    );
}

export default Jobs;