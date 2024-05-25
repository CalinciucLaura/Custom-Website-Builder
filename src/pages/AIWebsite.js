import React, {useState, useEffect} from "react"
import T1 from "./templates/template_1"
import { useRecoilState } from 'recoil';
import { userState } from './user_session_state';
import T2 from "./templates/template_2"
import T3 from "./templates/template_3"
import { useParams } from "react-router-dom";
import { Nav } from "reactstrap";
import Navbar from "./navbar/Navbar";
import EditBtn from "./buttons/EditBtn";

const AIWebsite = (props) => {
    const [user_id, setUserState] = useRecoilState(userState);
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
    const [idTemplate, setIdTemplate] = useState('');
    const web_id  = useParams().id;
   
    useEffect(() => {
        if (!web_id) return;
        fetch(`/prompt/${web_id}`)
            .then(response => response.json())
            .then(data => {
                setTitle(data[2]);
                setAbout(data[3]);
                setAbout(data[3]);
                setDescription1(data[4]);
                setDescription2(data[5]);
                setDescription3(data[6]);
                setQuote(data[7]);
                setHeroImage(data[8]);
                setImage1(data[9]);
                setImage2(data[10]);
                setImage3(data[11]);
                setImage4(data[12]);
                setImage5(data[13]);
                setIdTemplate(data[14]);             
            })
            .catch(error => console.error('Error:', error));
    }, [web_id]);
     
    var template;

    if (idTemplate == 1) {
         template = <T1 title={title} description1={description1} quote={quote} description2={description2} description3={description3} image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} heroImage={heroImage} about={about} />
    }
    else if (idTemplate == 2) {
        template = <T2 title={title} description1={description1} description2={description2} description3={description3} image1={image1} image2={image2} image3={image3} image4={image4} heroImage={heroImage} about={about} />
    }
    else
        template = <T3 title={title} description1={description1} description2={description2} description3={description3} image1={image1} image2={image2} image3={image3} image4={image4} heroImage={heroImage} about={about} />
    
  return (
    <div>
        <Navbar  />
        <button> Edit</button>
        {template}
    </div>
  )
};

export default AIWebsite;
