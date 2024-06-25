import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import { FaMagic } from "react-icons/fa";
import Navbar from './navbar/Navbar';
import { userState } from './user_session_state';
import { useRecoilValue } from 'recoil';
import T1 from './templates/template_1';
import ProgressBar from './Bars/ProgressBar';
import T2 from './templates/template_2';
import T3 from './templates/template_3';
import { useNavigate } from 'react-router-dom';

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
  const [isGenerated, setIsGenerated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [idTemplate, setIdTemplate] = useState(1);  
  const [colors, setColors] = useState([])
  const navigate = useNavigate();

  // isSubmitted means the user has submitted the form
  // isGenerated means the website has been generated

  const handleSubmit = (text) => {
    // console.log(text);
    // setIsGenerated(false);
    // setIsSubmitted(true);

    fetch(`/prompt/${user_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    })
      .then(response => response.json())
      .then(data => {
        setWebId(data);
        navigate(`/generator/preview/${data}`);
      })
      .catch(error => console.error('Error:', error));
  }

  // useEffect(() => {
  //   if (user_id) {
  //     fetch(`/get_id_web/${user_id}`)
  //       .then(res => res.json())
  //       .then(data => {
  //         if (data) {
  //           setWebId(data[0]);
  //         }

  //       })
  //   }
  // }, []);

  // useEffect(() => {
  //   if (web_id) {
  //     fetch(`/prompt/${web_id}`)
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(JSON.stringify(data[15]));
  //         setTitle(data[2]);
  //         setAbout(data[3]);
  //         setQuote(data[4]);
  //         setDescription1(data[5]);
  //         setDescription2(data[6]);
  //         setDescription3(data[7]);
  //         setHeroImage(data[8]);
  //         setImage1(data[9]);
  //         setImage2(data[10]);
  //         setImage3(data[11]);
  //         setImage4(data[12]);
  //         setImage5(data[13]);
  //         setColors(JSON.parse(data[15]));
  //         setIsGenerated(true);
          
  //       });
  //     }
  // }, [web_id]);

  const changeTemplate = () => {
    if (idTemplate === 1) {
      setIdTemplate(2);
    } else if (idTemplate === 2) {
      setIdTemplate(3);
    } else {
      setIdTemplate(1);
    }
  }

  const saveTemplate = () => {
    fetch(`/save/${web_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({idTemplate})
    })
      .then(response => response.json())
      .then(data => {
        navigate('/')
      })
      .catch(error => console.error('Error:', error));
  }

  return (
    <>
      <div className='homepage'>
      <Navbar loginBtn={false} logoutBtn={true} /><Block handleSubmit={handleSubmit} />
{/* 
        {isSubmitted === false && isGenerated === false &&
        (
         
        )}
        {isSubmitted === true && (
          <>
            {isGenerated == false && (
              <div className='progressBar'>
                <ProgressBar />
              </div>
            )}
            {isGenerated == true && (
              <>
                <Navbar />
                <button className='btn btn-primary' style={{marginRight: '10px'}} onClick={saveTemplate}>Save Template</button>
                <button className= 'btn btn-secondary' onClick={changeTemplate}>Change Template</button>
                <br/>
                <br/>
                {idTemplate === 1 && (
                <T1 title={title} about={about} quote={quote} description1={description1} description2={description2} description3={description3} heroImage={heroImage} image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} colors={colors}/>
                )}
                {idTemplate === 2 && (
                <T2 title={title} about={about} heroImage = {heroImage} description1={description1} description2={description2} description3={description3} image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} colors={colors} />
                )}
                {idTemplate === 3 && (
                <T3 title={title} about={about} description1={description1} description2={description2} description3={description3} heroImage={heroImage} image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} colors={colors} />
                )}
                </>
             )}
          </>
        )} */}

      </div>
    </>
  )
}

const Block = ({ handleSubmit }) => {
  const [input, setInput] = useState('');
  return (
    <div className='block'>
      <h1>Generate Your Website <br /><span>Now with AI.</span></h1>
      <p> Build, edit and publish a beautiful website <br /> without any design or code experience.</p>
      <div>
        <div className='inputBox'>
          <input type="text" placeholder="Generate a website about .." value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        <button id="searchQuerySubmit" onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit(input);
        }}><FaMagic /> Generate</button>
      </div>
    </div>
  );
}

export default HomePage;