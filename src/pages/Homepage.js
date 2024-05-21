import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import { FaMagic } from "react-icons/fa";
import Navbar from './navbar/Navbar';
import { userState } from './user_session_state';
import { useRecoilValue } from 'recoil';

const HomePage = () => {
 const [user_id] = useRecoilValue(userState);
 const [web_id, setWebId] = useState(undefined);


const handleSubmit = (event) =>{
  event.preventDefault();
 
  const text = document.getElementById('searchQueryInput').value;
  console.log(text);

  fetch(`/prompt/${user_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({text})
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setWebId(data);
  })
  .catch(error => console.error('Error:', error));
}

const getWebsite = () => {
  fetch(`/prompt/${user_id}`, {
    mode: 'no-cors'
  })
  .then(res => res.json())
  .then(data => {
    if (data && data.length > 0) {
      console.log(data);
    } else {
      console.log('No text received from server')
    }
  })
  .catch(error => console.log('Error fetching text:', error))
}


 return(
    <div className='homepage'>
      <Navbar loginBtn={true} logoutBtn={true}/>
      <div className='block'>
        <h1>Generate Your Website <br/><span>Now with AI.</span></h1>
        <p> Build, edit and publish a beautiful website <br/> without any design or code experience.</p>
        
      <form onSubmit={handleSubmit}>  
      <div className='inputBox'>
          <input type="text" id="searchQueryInput" placeholder="Search"/>
    </div>
    <button id="searchQuerySubmit" onClick={getWebsite}><FaMagic /> Generate</button>
      </form>      
      </div>
    </div>
 )
}


export default HomePage;