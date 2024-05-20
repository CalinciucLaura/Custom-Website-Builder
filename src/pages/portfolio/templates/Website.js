import React, {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';
import Template from './Template'
import './website.scss'
import Navbar from "../../navbar/Navbar";
import { FaTrashCan } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import Section from "../../sections/Section";
import { useNavigate } from 'react-router-dom';
import { useRecoilValue} from 'recoil';
import { userState } from '../../user_session_state';

const Website = (props) => {
  const [user_id] = useRecoilValue(userState);
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phone, setPhone] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]); 
  const [linkedin, setLinkedin] = useState(undefined);
  const [github, setGithub] = useState(undefined);
  const [role, setRole] = useState(undefined);
  const [color, setColor] = useState(undefined);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

 
 
  useEffect(() => {
      if (user_id === undefined) return;
      fetch(`/portfolio/${user_id}`, {
          mode: 'no-cors'
      })
          .then(res => res.json())
          .then(data => {
              if (data && data.length > 0) {
                  setFirstName(data[2])
                  setLastName(data[3])
                  setEmail(data[4])
                  setPhone(data[5])
                  setAddress(data[6])
                  setDescription(data[7])
                  setImage(data[8])
                  setGithub(data[9])
                  setLinkedin(data[10])
                  setRole(data[11])
                  setColor(data[12])
              } else {
                  console.log('No info received from server')
              }
          })

      fetch(`/experience_education/${user_id}`, {
          mode: 'no-cors'
      })
          .then(res => res.json())
          .then(data => {              
              if (data) {
                  setEducation(data.education)
                  setExperience(data.experience)
              } else {
                  console.log('No info received from server')
              }
          })  

      fetch(`/skills/${user_id}`, {
          mode: 'no-cors'
      })
          .then(res => res.json())
          .then(data => {
              if (data) {
                  setSkills(data)
              } else {
                  console.log('No info received from server')
              }
          })
      fetch (`/projects/${user_id}`, {
        mode: 'no-cors'
      })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setProjects(data)
        } else {
          console.log('No info received from server')
        }
      })
  }, [user_id])

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        setImage(reader.result);
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        setImage('');
    }
}

const deleteEducation = (index) => {
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
}

const addEducation = () => {
    setEducation([...education, ['']]);
}

const handleEducationChange = (index, field, event) => {
    const newEducation = [...education];
    newEducation[index][field] = event.target.value;
    setEducation(newEducation);
}

const deleteExperience = (index) => {
    const newExperience = [...experience];
    newExperience.splice(index, 1);
    setExperience(newExperience);
}

const addExperience = () => {
    setExperience([...experience, ['']]);
}

const handleExperienceChange = (index, field, event) => {
    const newExperience = [...experience];
    newExperience[index][field] = event.target.value;
    setExperience(newExperience);
}

const deleteSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
}

const addSkill = () => {
    setSkills([...skills, ['']]);
}

const handleSkillChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index][0] = event.target.value;
    setSkills(newSkills);
}

const deleteProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
}

const addProject = () => {
    setProjects([...projects, ['']]);
}

const handleProjectChange = (index, field, event) => {
    const newProjects = [...projects];
    newProjects[index][field] = event.target.value;
    setProjects(newProjects);
}
const handleSave =  async() => {
    if (!firstName || !lastName || !email || !phone || !address || !description || !image || !role) {
        alert('Please fill all the fields');
        return;
    }
    
    console.log(user_id);

    const response = await  fetch(`/portfolio/${user_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            address: address,
            description: description,
            image: image,
            linkedin: linkedin,
            github: github,
            role: role,
            color: color,
        })
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    const educationResponse = await fetch(`/portfolio/${user_id}/education`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            education: education,
        })
    })

    if (!educationResponse.ok) {
        throw new Error(`HTTP error! status: ${educationResponse.status}`);
    }

    const educationData = await educationResponse.json();
    console.log(educationData);

    const experienceResponse = await fetch(`/portfolio/${user_id}/experience`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            experience: experience,
        })
    })

    if (!experienceResponse.ok) {
        throw new Error(`HTTP error! status: ${experienceResponse.status}`);
    }

    const experienceData = await experienceResponse.json();
    console.log(experienceData);

    const skillsResponse = await fetch(`/portfolio/${user_id}/skills`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            skills: skills,
        })
    })

    if (!skillsResponse.ok) {
        throw new Error(`HTTP error! status: ${skillsResponse.status}`);
    }

    const skillsData = await skillsResponse.json();
    console.log(skillsData);

    const projectsResponse = await fetch(`/portfolio/${user_id}/projects`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            projects: projects,
        })
    })

    if (!projectsResponse.ok) {
        throw new Error(`HTTP error! status: ${projectsResponse.status}`);
    }

    const projectsData = await projectsResponse.json();
    console.log(projectsData);

    navigate(`/portfolio/template/`)
}


  return (
    <div className="website"> 
        <br/>
        <div className="row web">
            <div className="col-md-9 template" >
              <Template 
                firstName={firstName} 
                lastName={lastName} 
                email={email} 
                phone={phone} 
                address={address} 
                description={description} 
                image={image} 
                experience={experience} 
                education={education} 
                skills={skills} 
                linkedin={linkedin} 
                github={github} 
                role={role} 
                color={color}
                projects={projects}
              />
            </div>
            <div className="col-md-3 edit-box" >
            <button className="btn btn-primary" onClick={handleSave} style={{float:'right', margin: '5px'}}>Save</button>
                <div className="form-group">
                    <h3>Personal Information</h3>
                    <label>First Name</label>
                    <input className="form-control" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label>Last Name</label>
                    <input className="form-control" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <label>Email</label>
                    <input className="form-control" type="text" value={email}onChange={(e) => setEmail(e.target.value)} />           
                    <label>Phone</label>
                    <input className="form-control" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <label>Location</label>
                    <input className="form-control" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <label>Description</label>
                    <textarea rows="5" className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <label>Image</label>
                    <input className="form-control" type="file" onChange={handleImageChange} />
                    <br/>
                    {image && <img src={image} alt="Preview" />}
                    <label>Github</label>
                    <input className="form-control" type="text" value={github} onChange={(e) => setGithub(e.target.value)} />
                    <label>Linkedin</label>
                    <input className="form-control" type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                    <label>Role</label>
                    <input className="form-control" type="text" value={role} onChange={(e) => setRole(e.target.value)} />
                    <label>Color</label>
                    <input className="form-control" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                   
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h3>Experience</h3>
                        <button className="btn btn-primary" style={{ padding:'4px 6px'}} onClick={addExperience}><FiPlus style={{ fontWeight:'800'}} /></button>
                    </div>

                    {experience.map((item, index) => {
                    return (
                        <>
                        <div className="item" key={index}>
                        <div className="col-12 d-flex justify-content-between align-items-center">
                        <p><b>Experience {index+1}</b></p>
                        <button className="btn btn-danger" onClick={()=> deleteExperience(index)} ><FaTrashCan /></button>
                        </div>
                            <label>Start Date:</label>
                            <input className="form-control" type="date" value={item[2]} onChange={(event) => handleExperienceChange(index, 2, event)}/>
                            <label>End Date:</label>
                            <input className="form-control" type="date" value={item[3]} onChange={(event) => handleExperienceChange(index,3, event)}/>
                            <label>Company</label>
                            <input className="form-control" type="text" value={item[4]} onChange={(event) => handleExperienceChange(index,4, event)}/>
                            <label>Position</label>
                            <input className="form-control" type="text" value={item[5]} onChange={(event) => handleExperienceChange(index,5, event)}/>
                        </div>
                        <br/>
                        </>
                    )
                }
                )}
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h3>Education</h3>
                        <button className="btn btn-primary" style={{ padding:'4px 6px'}} onClick={addEducation}><FiPlus style={{ fontWeight:'800'}} /></button>
                    </div>
                    {education.map((item, index) => {
                    return (
                        <>
                        <div className="item" key={index}>
                        <div className="col-12 d-flex justify-content-between align-items-center">
                        <p><b>Education {index+1}</b></p>
                        <button className="btn btn-danger" onClick={() => deleteEducation(index)}><FaTrashCan /></button>
                        </div>
                            <label>Start Date:</label>
                            <input className="form-control" type="date" value={item[2]} onChange={(event) => handleEducationChange(index,2, event)}/>
                            <label>End Date:</label>
                            <input className="form-control" type="date" value={item[3]} onChange={(event) => handleEducationChange(index, 3, event)}/>
                            <label>Institution</label>
                            <input className="form-control" type="text" value={item[4]} onChange={(event) => handleEducationChange(index, 4,event)}/>
                            <label>Specialization</label>
                            <input className="form-control" type="text" value={item[5]} onChange={(event) => handleEducationChange(index, 5,event)}/>
                        </div>
                        <br/>
                        </>
                    )
                }
                )}
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h3>Skills</h3>
                        <button className="btn btn-primary" style={{ padding:'4px 6px'}} onClick={addSkill}><FiPlus style={{ fontWeight:'800'}} /></button>
                    </div>
                    {skills.map((item, index) => {
                    return (
                        <>
                        <div className="item" key={index}>
                        <div className="col-12 d-flex justify-content-between align-items-center">
                        <p><b>Skill {index+1}</b></p>
                        <button className="btn btn-danger" onClick={()=> deleteSkill(index)}><FaTrashCan /></button>
                        </div>
                            <label>Skill</label>
                            <input className="form-control" type="text" value={item[0]} onChange={(event) => handleSkillChange(index, event)}/>
                        </div>
                        <br/>
                        </>
                    )}
                )}
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h3>Projects</h3>
                        <button className="btn btn-primary" style={{ padding:'4px 6px'}} onClick={addProject}><FiPlus style={{ fontWeight:'800'}} /></button>
                    </div>
                    {projects.map((item, index) => {
                    return (
                        <>
                        <div className="item" key={index}>
                        <div className="col-12 d-flex justify-content-between align-items-center">
                        <p><b>Project {index+1}</b></p>
                        <button className="btn btn-danger" onClick={()=> deleteProject(index)}><FaTrashCan /></button>
                        </div>
                            <label>Name</label>
                            <input className="form-control" type="text" value={item[2]} onChange={(event) => handleProjectChange(index,2, event)}/>
                            <label>Description</label>
                            <input className="form-control" type="text" value={item[3]} onChange={(event) => handleProjectChange(index,3, event)}/>
                            <label>URL</label>
                            <input className="form-control" type="text" value={item[4]} onChange={(event) => handleProjectChange(index,4, event)}/>
                        </div>
                        <br/>
                        </>
                    )}
                )}
                    
                </div>
        </div>  
    </div>
    </div>
      )
};

export default Website;
