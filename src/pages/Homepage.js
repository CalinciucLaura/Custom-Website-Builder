import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import { Link } from 'react-router-dom';
import { FaMagic } from "react-icons/fa";

async function readData(event){
  event.preventDefault();
  let text = document.getElementById('text').value;
  console.log(text);

  if (text === '') {
    const block = document.querySelector('.block');
    const existingError = block.querySelector('.error');

    if (!existingError) {
      const messageError = document.createElement('h5');
      messageError.textContent = 'Please enter a text';
      messageError.className = 'error';
      block.appendChild(messageError);
    }
    return;
  }
  
  // fetch(`/prompt`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({text})
  // })
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(error => console.error('Error:', error));
}

const HomePage = () => {
 return(
    <div className='homepage'>
     
     {/* <video autoPlay muted loop id="myVideo">
      <source src={background} type="video/mp4" />
      </video> */}
      <div className='block'>
        <h1>Generate Your Website <br/><span>Now with AI.</span></h1>
        <p> Build, edit and publish a beautiful website <br/> without any design or code experience.</p>
        
      <form onSubmit={readData}>  
      <div className='inputBox'>
          <input type="text" id="searchQueryInput" placeholder="Search"/>
          <Link to="" style={{textDecoration: 'none'}}>
         <button id="searchQuerySubmit" type="submit"><FaMagic /> Generate</button>
    </Link>
    </div>
      </form>      
  
      </div>
    </div>
 )
}

export default HomePage;