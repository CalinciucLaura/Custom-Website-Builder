import React from "react"
import Hero from "../../components/Hero"
import Gallery from "../../components/Gallery"
import "./template.scss"
import Description from "../../components/Description";
import About from "../../components/About";
import ParallaxImage from "../../components/ParallaxImage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const T3 = () => {
    const [colors, setColors] = useState(undefined);
    const [images, setImages] = useState(undefined);
    const { user_id } = useParams();
    const [title, setTitle] = useState(undefined);
    const [about, setAbout] = useState(undefined);
    const [description1, setDescription1] = useState(undefined);
    const [description2, setDescription2] = useState(undefined);
    const [description3, setDescription3] = useState(undefined);


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
        <div className="T3-body">
            <Hero
                title={title}
                fontFamily='Poppins'
                image={images[0]}
                button='true'
                textButtonColor='black'
                backgroundColorButton='white'
                style={{ textAlign: 'left', color: 'white' }}
            />
            {/* To add 3 dominant colors
            <div className="colorsBar">
                <div />
                <div />
                <div />
            </div>

            <div className="imagesContainer" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${images[0]})` }}>
                <img src={images[2]} />
                <img src={images[3]} />
                <img src={images[4]} />
            </div> */}

            <About title="ABOUT" text={about} textColor="black" fontFamily='Poppins' style={{ backgroundColor: colors[0] }} />
            <Gallery images={[images[3], images[4], images[5], images[2]]} text={description1} backgroundColor="#f1f1f1" fontFamily='Playfair Display' />

            <Description
                title="Picking the right Hiking Gear!"
                text={description2}
                image={images[5]}
                textColor="white"
                fontFamily='Poppins'
                backgroundColor={colors[1]}
                widthImage='50%'
                widthText='50%'
                fontSizeTitle='48px'
                fontSizeParagraph='16px'
                lineHeightP='32px'
                button='true'
                backgroundButton='transparent'
                textButtonColor='black'
                fontFamilyButton='Poppins'
                swichObjects='false'
                style={{ height: '550px', color: 'white', fontWeight: '800' }} />
            <ParallaxImage imageUrl={images[0]} />
            <Description
                title="Picking the right Hiking Gear!"
                text={description3}
                image={images[5]}
                textColor="white"
                fontFamily='Poppins'
                backgroundColor={colors[0]}
                widthImage='50%'
                widthText='50%'
                fontSizeTitle='48px'
                fontSizeParagraph='16px'
                lineHeightP='32px'
                button='true'
                backgroundButton='transparent'
                textButtonColor='black'
                fontFamilyButton='Poppins'
                swichObjects='true'
                style={{ height: '550px', color: 'white', fontWeight: '800' }} />
        </div>

    )
};

export default T3;
