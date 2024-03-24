import React, { useEffect, useState } from 'react';

async function readData(event){
  event.preventDefault();
  let text = document.getElementById('text').value;
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
    let title = document.querySelector('h2');
    title.innerHTML = data[0];
    let aboutText = document.querySelector('p');
    aboutText.innerHTML = data[1];
  })
  .catch(error => console.error('Error:', error));

}

const HomePage = () => {
 return(
    <div>
      <h1>Generate Your Own Website</h1>
      <form onSubmit={readData}>
        <label>
          Generate your Website About:
          <input type="text" id="text" />
        </label>
        <button > Submit </button>
      </form>

      <h2></h2>
      <p></p>
    </div>
 )
}

export default HomePage;