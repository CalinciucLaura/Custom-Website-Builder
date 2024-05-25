import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Description from "../../components/Description";
import Quote from "../../components/Quote";
import Gallery from "../../components/Gallery";
import "./template.scss"

const T1 = ({ title, about, quote, description1, description2, description3, heroImage, image1, image2, image3, image4, image5 }) => {
    console.log(image1, image2, image3, image4, image5, heroImage)
    return (
        <div className="T1-body">
            <Hero image={heroImage}
                title={title} fontFamily='Poppins' button='true' textButtonColor='black' backgroundColorButton='white' style={{ textAlign: 'center', color: 'white' }} />
            <About title="ABOUT" text={about} textColor="white" textAlign="center" fontFamily='Poppins' />
            <Description
                title="Did you know?"
                text={description1}
                // backgroundColor={colors[1]}
                image={image1}
                textColor="white"
                fontSizeTitle='40px'
                fontSizeParagraph='15px'
                lineHeightP='25px'
                button='true'
                backgroundColorButton='white'
                textButtonColor='black'
                fontFamilyButton='Poppins'
                widthImage='40%'
                widthText='30%'
                swichObjects='true'
                fontFamily='Poppins'
                style={{ textAlign: 'center' }} />

            <Description
                title="Fun Fact"
                text={description2}
                image={image2}
                // backgroundColor={colors[1]}
                textColor="white"
                fontFamily='Poppins'
                fontSizeTitle='40px'
                fontSizeParagraph='15px'
                lineHeightP='25px'
                button='true'
                backgroundColorButton='white'
                textButtonColor='black'
                fontFamilyButton='Poppins'
                widthImage='40%'
                widthText='30%'
                swichObjects='false'
                style={{ textAlign: 'center' }} />

            <Quote text={quote} textColor="white" fontFamily='Playfair Display' />
            <Gallery images={[image3, image4, image5, image2]} text={description3} fontFamily='Poppins' color='white' />
        </div>
    );
}

export default T1;