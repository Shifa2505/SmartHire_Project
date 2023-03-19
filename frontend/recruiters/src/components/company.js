import React, { Component ,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Jobs from "./jobs";
import "./company.css";
import axios from 'axios';


export function Company () {

  const navigate = useNavigate();

  const[name, setName]= useState("");
  const[description, setDescription]= useState("");
  const[location, setLocation]= useState("");
 
   const submitCompanyDetails = async (e) => {
   e.preventDefault()
   if(name =="" || description == "" || location == ""){
    alert("All fields are mandatory");
    return
   }
    let formdata = new FormData()
  
    formdata.append('name', name)
    formdata.append('description', description)
    formdata.append('location', location)
    // console.log(formdata.values())

    const res = await axios.post('http://192.168.43.217:8000/api/add_company', formdata, {
  
      // mode: "cors",
    })
   var res_data = await res.data
    console.log(res_data);
    window.localStorage.setItem("company_id", res_data)
    navigate("/jobs")
  }

    return (
        <div className="mainCompanyPage">
        <h1>Company Details</h1>
        <div className="form container">
        <div className="companyForm">
        <label className="input">Company Name</label>
        <input type="text" name="company name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
        <br />
        <label className="input">Company Description</label>
        <textarea className="input" name="company desc" rows = "4" cols="25" value={description} onChange={(e)=>{setDescription(e.target.value)}} required/>
        <br />
        <label className="input">Company Location</label>
        <input type="text" name="company location" value={location} onChange={(e)=>{setLocation(e.target.value)}} required/>
        <br />
        <button className="btn btn-primary" onClick={(e)=>{submitCompanyDetails(e)}}>
          Submit
        </button>
        </div>
      </div>
      </div>
    );
}

export default Company;