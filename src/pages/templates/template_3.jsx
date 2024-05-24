import React from "react"
import Hero from "../../components/Hero"
import Gallery from "../../components/Gallery"
import "./template.scss"
import Description from "../../components/Description";
import About from "../../components/About";
import ParallaxImage from "../../components/ParallaxImage";

const T3 = ({ title, description1, description2, description3, image1, image2, image3, image4, heroImage, about }) => {
    return (
        <div className="T3-body">
            <Hero
                title={title}
                fontFamily='Poppins'
                image={heroImage}
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

            <About title="ABOUT" text={about} textColor="black" fontFamily='Poppins' />
            <Gallery images={[image1, image2, image3, image4]} text={description1} backgroundColor="#f1f1f1" fontFamily='Playfair Display' />

            <Description
                text={description2}
                image={image2}
                textColor="white"
                fontFamily='Poppins'
                // backgroundColor={colors[1]}
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
            <ParallaxImage imageUrl={heroImage} />
            <Description
                text={description3}
                image={image3}
                textColor="white"
                fontFamily='Poppins'
                // backgroundColor={colors[0]}
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
