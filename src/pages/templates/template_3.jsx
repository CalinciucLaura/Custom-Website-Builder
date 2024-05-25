import React from "react"
import Hero from "../../components/Hero"
import Gallery from "../../components/Gallery"
import "./template.scss"
import Description from "../../components/Description";
import About from "../../components/About";
import ParallaxImage from "../../components/ParallaxImage";

const T3 = ({ title, description1, description2, description3, image1, image2, image3, image4, heroImage, about, colors }) => {
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

            <About title="ABOUT" text={about} textColor="black" fontFamily='Poppins' backgroundColor={colors[2]} textAlign={"center"} />
            <Gallery images={[image1, image2, image3, image4]} text={description1} backgroundColor={colors[0]} fontFamily='Poppins' color='white' />

            <Description
                text={description2}
                image={image2}
                textColor="white"
                fontFamily='Poppins'
                backgroundColor={colors[1]}
                widthImage='50%'
                widthText='50%'
                fontSizeTitle='48px'
                fontSizeParagraph='16px'
                lineHeightP='32px'
                button='true'
                backgroundColorButton='transparent'
                textButtonColor='black'
                fontFamilyButton='Poppins'
                swichObjects='false'
                style={{ height: '40%', color: 'black', fontWeight: '800' }} />
            <ParallaxImage image={heroImage} />
            <Description
                text={description3}
                image={image3}
                textColor="white"
                fontFamily='Poppins'
                backgroundColor={colors[2]}
                widthImage='40%'
                widthText='50%'
                fontSizeTitle='48px'
                fontSizeParagraph='16px'
                lineHeightP='32px'
                button='true'
                backgroundColorButton='transparent'
                textButtonColor='white'
                fontFamilyButton='Poppins'
                swichObjects='true'
                style={{ height: '20%', color: 'white', fontWeight: '800' }} />
        </div>

    )
};

export default T3;
