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
    const [images, setImages] = useState(undefined);
    const { user_id } = useParams();
    const [title, setTitle] = useState(undefined);
    const [about, setAbout] = useState(undefined);
    const [description1, setDescription1] = useState(undefined);
    const [description2, setDescription2] = useState(undefined);
    const [description3, setDescription3] = useState(undefined);
    const [quote, setQuote] = useState(undefined);


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

        fetch(`/images/${user_id}`, {
            mode: 'no-cors'
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setImages(data)
                } else {
                    console.log('No images received from server')
                }
            })
            .catch(error => console.log('Error fetching colors:', error))

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
            <Hero image={images[0]}
                title={title} fontFamily='Playfair Display' button='true' textButtonColor='black' backgroundColorButton='white' style={{ textAlign: 'center', color: 'white' }} />
            <About title="ABOUT" text={about} textColor="white" fontFamily='Playfair Display' style={{ backgroundColor: colors[0] }} />
            <Description
                title="Services"
                text={description1}
                backgroundColor={colors[1]}
                image={images[1]}
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
                swichObjects='true'
                style={{ textAlign: 'center' }} />

            <Description
                title="Projects"
                text={description2}
                image={images[2]}
                backgroundColor={colors[1]}
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
            <Gallery images={[images[3], images[4], images[5], images[2]]} text={description3} backgroundColor="#f1f1f1" fontFamily='Playfair Display' />
        </div>
    );
}

export default T1;