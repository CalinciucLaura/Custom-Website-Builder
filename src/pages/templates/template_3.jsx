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
    const [colors, setColors] = useState(null);
    const [images, setImages] = useState(null);
    const { user_id } = useParams();

    useEffect(() => {
        // if(user_id === undefined) return;

        fetch(`/colors/${user_id}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setColors(data)
                    console.log(data)
                    console.log(user_id)
                } else {
                    console.log('No colors received from server')
                }
            })

        fetch(`/images/${user_id}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setImages(data)
                    console.log(data)
                } else {
                    console.log('No images received from server')
                }
            })
            .catch(error => console.log('Error fetching colors:', error))
    }, [user_id])


    if (!colors) {
        console.log('Loading colors...')
        return null
    }

    return (
        <div className="T3-body">
            <Hero
                title={["Enjoy Your ", <br key="br" />, "Dream House"]}
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

            <About title="ABOUT" text="Locus Design is an architecture and interior design studio based in London, specialising in the fully integrated design and delivery unique private residences. As a studio we are passionate about the interplay between architecture, interior design and landscape, and the role thy can play in the enjoyment of everyday life in the home." textColor="black" fontFamily='Poppins' style={{ backgroundColor: colors[0] }} />
            <Gallery images={images} backgroundColor={colors[1]} fontFamily="Poppins" color='white' />

            <Description
                title="Picking the right Hiking Gear!"
                text="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.                Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
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
                text="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.                Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
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
