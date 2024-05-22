import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import { FaMagic } from "react-icons/fa";
import Navbar from './navbar/Navbar';
import { userState } from './user_session_state';
import { useRecoilValue } from 'recoil';
import T1 from './templates/template_1';
import ProgressBar from './Bars/ProgressBar';

const HomePage = () => {
 const [user_id] = useRecoilValue(userState);
 const [web_id, setWebId] = useState('');
 const [title, setTitle] = useState('');
 const [about, setAbout] = useState('');
 const [description1, setDescription1] = useState('');
 const [description2, setDescription2] = useState('');
 const [description3, setDescription3] = useState(''); 
  const [quote, setQuote] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [image5, setImage5] = useState('');
  const [colors, setColors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = (event) =>{
  event.preventDefault();
  const text = document.getElementById('searchQueryInput').value;
  console.log(text);
  setIsSubmitted(true);
  setIsGenerated(false);

  fetch(`/prompt/${user_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({text})
  })
  .then(response => response.json())
  .then(data => {
    setWebId(data);
  })
  .catch(error => console.error('Error:', error));
}

useEffect(() => {
  if (user_id)
    { 
      fetch (`/get_id_web/${user_id}`)
      .then (res => res.json())
      .then (data => {
        if (data){
          setWebId(data[0]);
        }
       
      })
    }
}, []);

useEffect(() => {
  if (web_id)
    {
      fetch (`/prompt/${web_id}`)
      .then (res => res.json())
      .then (data => {
        setTitle(data[2]);
        setAbout(data[3]);
        setQuote(data[4]);  
        setDescription1(data[5]);
        setDescription2(data[6]);
        setDescription3(data[7]);
        setHeroImage(data[8]);
        setImage1(data[9]);
        setImage2(data[10]);
        setImage3(data[11]);
        setImage4(data[12]);
        setImage5(data[13]);
      })
    }
}
, []);

    useEffect(() => {
        fetch(`/colors/${web_id}`, {
            mode: 'no-cors'
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setColors(data)
                } else {
                    console.log('No colors received from server')
                }
            })
    }, [])

    if (title, about, quote, description1, description2, description3, heroImage, image1, image2, image3, image4, image5, colors) {
      setIsGenerated(true);
    }

    return (
      <div className='homepage'>
        {user_id ? <Navbar loginBtn={false} logoutBtn={true} /> : <Navbar loginBtn={true} logoutBtn={false} />}

        {!isGenerated ? 
        <>  
        <div className='block'>
          <h1>Generate Your Website <br/><span>Now with AI.</span></h1>
          <p> Build, edit and publish a beautiful website <br/> without any design or code experience.</p>
        <form onSubmit={handleSubmit}>  
        <div className='inputBox'>
            <input type="text" id="searchQueryInput" placeholder="Search"/>
      </div>
      <button id="searchQuerySubmit" onClick={handleSubmit}><FaMagic /> Generate</button>
        </form>     
  
        {/* Show progress bar when form is submitted */}
        {isSubmitted && !isGenerated && <ProgressBar />}
  
        </div> 
        </>:
        <T1 title={title} about={about} quote={quote} description1={description1} description2={description2} description3={description3} heroImage={heroImage} image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} colors={colors}/>
  }
        </div>
   )
}


export default HomePage;