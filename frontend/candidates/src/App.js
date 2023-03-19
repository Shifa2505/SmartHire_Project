import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const handleFile = (e) => {

    let file = e.target.files[0];

    setFile(file);

  }

  const handleUpload = async (e) => {
    e.preventDefault();
    let formdata = new FormData()
  
    formdata.append('pdf', file)
    formdata.append('name', "Shifa")
    // console.log(formdata.values())

    const res = await axios.post('http://192.168.43.217:8000/api/add_applicant', formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      // mode: "cors",
    })
    var res_data = await res.data
    console.log(res_data);
    setData(res_data)
  }

    // .then((response)=>response.data)
    //   // console.log((response));
    //   // const data = JSON.parse(response.data);
    //   // console.log((data));
    //   // setData(data)})

    //   // const data = JSON.parse('{"name": "A J", "email": "shifashaikh2505@gmail.com", "mobile_number": "8591377345", "skills": ["C", "System", "Hotel", "P", "Design", "R", "Coding", "Python", "Website", "Security", "Communication", "Java", "Css", "Markdown", "Html", "Engineering"], "college_name": null, "degree": ["SECONDARY SCHOOL", "BACHELOR OF ENGINEERING"], "designation": null, "experience": null, "company_names": ["AUTUMN TECH LABS", "E X P E R I E N C E"], "no_of_pages": 1, "total_experience": 0, "_id": {"$oid": "6415f8bac0123d0cc958cbbd"}}');
    // .then((data)=>{console.log(data)})
    //   .catch(function (error) {
    //   console.log(error);
    //   });}

  return (
    <div className="App">
      <div className='user_info_container'>
        <div className='user_info'>
          <h1>SHIFA SHAIKH</h1>
          
        </div>
        <div className='info'>
            <div>
              <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
              <span> Borivali, Mumbai</span>
            </div>
            <div>
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
              <a href="mailto:shifashaikh2505@gmail.com">shifashaikh2505@gmail.com</a>
            </div>
            <div>
              <FontAwesomeIcon className='icon' icon={faPhone} />
              <a href="tel:+91 8591377345">8591377345</a>
            </div>
          </div>
      </div>  
      <section className='upload_resume'>
        <div className='resume'>
          <h2>Upload Resume</h2>
          <form encType='multipart/form-data'>
            <div className='selection'>
              <label>Select Resume</label>
              <input type="file" name="file" onChange={handleFile}/>
            </div>
            <br/>
            <button type='button' className='btn' onClick={handleUpload}>Upload</button>
          </form>
        </div>
      </section>   
      <h1>{data?.name}</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" defaultValue={data.name} onChange={(e)=>{console.log("name changed");var x=data;x.name=e.target.value;setData(x)}}/>

        <label>Email:</label>
        <input type="email" name="email" value={data.email} />

        <label>Mobile Number:</label>
        <input type="tel" name="mobile_number" value={data.mobile_number} />

        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;
