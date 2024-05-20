import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import { Link } from 'react-router-dom';
import { FaMagic } from "react-icons/fa";
import Navbar from './navbar/Navbar';

async function readData(event){
  event.preventDefault();

  const text = document.getElementById('searchQueryInput').value;
  console.log(text);

  fetch(`/prompt`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({text})
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
}

const HomePage = () => {
 return(
    <div className='homepage'>
      <Navbar loginBtn={true} logoutBtn={true}/>
      <div className='block'>
        <h1>Generate Your Website <br/><span>Now with AI.</span></h1>
        <p> Build, edit and publish a beautiful website <br/> without any design or code experience.</p>
        
      <form onSubmit={readData}>  
      <div className='inputBox'>
          <input type="text" id="searchQueryInput" placeholder="Search"/>
    </div>
    <button id="searchQuerySubmit" type="submit"><FaMagic /> Generate</button>
      </form>      
      </div>
    </div>
 )
}

export default HomePage;