import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Description from "../../components/Description";
import Quote from "../../components/Quote";
import Gallery from "../../components/Gallery";
import "./template.scss"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const T1 = () => {
    const [colors, setColors] = useState(undefined);
    const { user_id } = useParams();
    const [title, setTitle] = useState(undefined);
    const [about, setAbout] = useState(undefined);
    const [description1, setDescription1] = useState(undefined);
    const [description2, setDescription2] = useState(undefined);
    const [description3, setDescription3] = useState(undefined);
    const [quote, setQuote] = useState(undefined);
    const [heroImage, setHeroImage] = useState(undefined);
    const [image1, setImage1] = useState(undefined);
    const [image2, setImage2] = useState(undefined);
    const [image3, setImage3] = useState(undefined);
    const [image4, setImage4] = useState(undefined);
    const [image5, setImage5] = useState(undefined);

    useEffect(() => {
        if (user_id === undefined) return;
        fetch(`/colors/${user_id}`, {
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


        fetch(`/prompt/${user_id}`, {
            mode: 'no-cors'
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    data.forEach(element => {
                        setTitle(element[0])
                        setAbout(element[1])
                        setDescription1(element[2])
                        setDescription2(element[3])
                        setDescription3(element[4])
                        setQuote(element[5])
                        setHeroImage(element[6])
                        setImage1(element[7])
                        setImage2(element[8])
                        setImage3(element[9])
                        setImage4(element[10])
                        setImage5(element[11])

                    });
                } else {
                    console.log('No text received from server')
                }
            })
            .catch(error => console.log('Error fetching text:', error))

    }, [user_id])


    if (!colors) {
        console.log('Loading colors...')
        return null
    }
    return (
        <div className="T1-body">
            <Hero image={heroImage}
                title={title} fontFamily='Poppins' button='true' textButtonColor='black' backgroundColorButton='white' style={{ textAlign: 'center', color: 'white' }} />
            <About title="ABOUT" text={about} textColor="white" textAlign="center" fontFamily='Poppins' style={{ backgroundColor: colors[0] }} />
            <Description
                title="Services"
                text={description1}
                // backgroundColor={colors[1]}
                image={image1}
                textColor="black"
                fontFamily='Playfair Display'
                fontSizeTitle='80px'
                fontSizeParagraph='30px'
                lineHeightP='40px'
                button='true'
                backgroundColorButton='white'
                textButtonColor='black'
                fontFamilyButton='Poppins'
                widthImage='40%'
                widthText='60%'
                swichObjects='true'
                style={{ textAlign: 'left' }} />

            <Description
                title="Projects"
                text={description2}
                image={image2}
                // backgroundColor={colors[1]}
                textColor="black"
                fontFamily='Playfair Display'
                fontSizeTitle='40px'
                fontSizeParagraph='13px'
                lineHeightP='25px'
                button='true'
                backgroundColorButton='white'
                textButtonColor='black'
                fontFamilyButton='Poppins'
                widthImage='50%'
                widthText='50%'
                swichObjects='false'
                style={{ textAlign: 'center' }} />

            <Quote text={quote} backgroundColor={colors[2]} textColor="white" fontFamily='Playfair Display' />
            <Gallery images={[image3, image4, image5, image2]} text={description3} fontFamily='Playfair Display' />
        </div>
    );
}

export default T1;