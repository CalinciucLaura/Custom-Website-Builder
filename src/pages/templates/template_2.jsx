import React from "react";
import Hero from "../../components/Hero";
import "./template.scss"
import Description from "../../components/Description";

const T2 = ({ title, description1, description2, description3, image1, image2, image3, image4, heroImage, colors }) => {
    return (
        <>
            <div className="T2-body" >
                <Hero
                    className="template-2-hero"
                    image={heroImage}
                    title={title}
                    fontFamily='Tiro Devanagari Sanskrit'
                    fontWeight='100'
                    style={{ color: 'white' }}
                />
                <div className="empty-div" style={{ backgroundColor: colors[1] }}></div>
                <Description
                    number='01'
                    text={description1}
                    image={image2}
                    textColor="white"
                    fontFamily='Times New Roman'
                    widthImage='50%'
                    widthText='50%'
                    fontSizeTitle='60px'
                    fontSizeParagraph='25px'
                    lineHeightP='40px'
                    button='true'
                    backgroundButton='transparent'
                    textButtonColor='black'
                    fontFamilyButton='Poppins'
                    swichObjects='false'
                    section="description1"
                    backgroundColor={colors[1]}
                    style={{ height: '550px' }} />
                <div className="empty-div" style={{ backgroundColor: colors[1] }}></div>
                <div className="empty-div" style={{ backgroundColor: colors[1] }}></div>
                <Description
                    number='02'
                    text={description2}
                    image={image3}
                    section="description2"
                    textColor="white"
                    fontFamily='Times New Roman'
                    widthImage='50%'
                    widthText='50%'
                    fontSizeTitle='60px'
                    fontSizeParagraph='25px'
                    lineHeightP='40px'
                    button='true'
                    backgroundButton='transparent'
                    textButtonColor='black'
                    fontFamilyButton='Poppins'
                    backgroundColor={colors[1]}
                    swichObjects='true'
                    style={{ height: '550px' }} />
                <div className="empty-div" style={{ backgroundColor: colors[1] }}></div>
                <div className="empty-div" style={{ backgroundColor: colors[1] }}></div>
                <Description
                    number='03'
                    text={description3}
                    image={image4}
                    textColor="white"
                    fontFamily='Times New Roman'
                    widthImage='50%'
                    widthText='50%'
                    fontSizeTitle='60px'
                    fontSizeParagraph='25px'
                    lineHeightP='40px'
                    button='true'
                    backgroundButton='transparent'
                    textButtonColor='black'
                    fontFamilyButton='Poppins'
                    backgroundColor={colors[1]}
                    swichObjects='false'
                    section="description3"
                    style={{ height: '550px' }} />
                <div className="empty-div" style={{ backgroundColor: colors[1] }}></div>
                <div className="empty-div" style={{ backgroundColor: colors[1] }}></div>
            </div >
        </>

    );
};

export default T2;

