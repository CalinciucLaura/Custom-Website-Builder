import React from "react";
import Hero from "../../components/Hero";
import "./template.scss"
import Description from "../../components/Description";

const T2 = ({ title, description1, description2, description3, image1, image2, image3, image4, heroImage }) => {
    return (
        <>
            <div className="T2-body" >
                <Hero
                    className="template-2-hero"
                    image={heroImage}
                    title={title}
                    fontFamily='Tiro Devanagari Sanskrit'
                    fontWeight='100'
                // style={{ color: 'white', '--hero-bg-color':  }}
                />
                <div className="empty-div"></div>
                <Description
                    number='01'
                    text={description1}
                    image={image2}
                    textColor="white"
                    fontFamily='Tiro Devanagari Sanskrit'
                    widthImage='40%'
                    widthText='40%'
                    fontSizeTitle='48px'
                    fontSizeParagraph='16px'
                    lineHeightP='32px'
                    button='true'
                    backgroundButton='transparent'
                    textButtonColor='black'
                    fontFamilyButton='Poppins'
                    swichObjects='false'
                    style={{ height: '550px' }} />
                <div className="empty-div"></div>
                <div className="empty-div"></div>
                <Description
                    number='02'
                    text={description2}
                    image={image3}
                    textColor="white"
                    fontFamily='Tiro Devanagari Sanskrit'
                    widthImage='40%'
                    widthText='40%'
                    fontSizeTitle='48px'
                    fontSizeParagraph='16px'
                    lineHeightP='32px'
                    button='true'
                    backgroundButton='transparent'
                    textButtonColor='black'
                    fontFamilyButton='Poppins'
                    swichObjects='true'
                    style={{ height: '550px' }} />
                <div className="empty-div"></div>
                <div className="empty-div"></div>
                <Description
                    number='03'
                    text={description3}
                    image={image4}
                    textColor="white"
                    fontFamily='Tiro Devanagari Sanskrit'
                    widthImage='40%'
                    widthText='40%'
                    fontSizeTitle='48px'
                    fontSizeParagraph='16px'
                    lineHeightP='32px'
                    button='true'
                    backgroundButton='transparent'
                    textButtonColor='black'
                    fontFamilyButton='Poppins'
                    swichObjects='false'
                    style={{ height: '550px' }} />
                <div className="empty-div"></div>
                <div className="empty-div"></div>
            </div >
        </>

    );
};

export default T2;

