import React, {useState, useEffect} from "react"
import T1 from "./templates/template_1"
import { useRecoilState } from 'recoil';
import { userState } from './user_session_state';

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

    useEffect(() => {
        fetch(`/prompt/${user_id}`)
            .then(response => response.json())
            .then(data => {
                setTitle(data.title);
                setAbout(data.about);
                setDescription1(data.description1);
                setDescription2(data.description2);
                setDescription3(data.description3);
                setQuote(data.quote);
                setHeroImage(data.heroImage);
                setImage1(data.image1);
                setImage2(data.image2);
                setImage3(data.image3);
                setImage4(data.image4);
                setImage5(data.image5);
            })
            .catch(error => console.error('Error:', error));
    }, []);
    
  return (
    <div>
     <T1 title={title} description1={description1} description2={description2} description3={description3} image1={image1} image2={image2} image3={image3} image4={image4} heroImage={heroImage} about={about} />
    </div>
  )
};

export default AIWebsite;
