import React from "react";
import Hero from "../../components/Hero";
import heroImage from "../../assets/images/15.jpg";
import "./template.css"
import Description from "../../components/Description";
import descriptionImage1 from "../../assets/images/18.jpg" ;
import descriptionImage2 from "../../assets/images/19.jpg" ;
import descriptionImage3 from "../../assets/images/21.jpg" ;

const T2 = () => {
    return (
        <div className="T2-body">
        <Hero 
        className="template-2-hero"
        image={heroImage} 
        title="Be Prepared For The Mountains And Beyond!" 
        fontFamily='Tiro Devanagari Sanskrit'
        fontWeight='100'
        style={{color: 'white'}}
        />
        <div className="empty-div"></div>
        <Description
        number = '01'
        title="What level of hiker are you?" 
        text="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?" 
        image={descriptionImage1} 
        textColor="white" 
        fontFamily='Tiro Devanagari Sanskrit' 
        widthImage='40%' 
        widthText='40%' 
        fontSizeTitle='48px' 
        fontSizeParagraph = '16px'
        lineHeightP = '32px' 
        button ='true'
        backgroundButton = 'transparent'
        textButtonColor = 'yellow'
        fontFamilyButton = 'Poppins'
        swichObjects='false'
        style={{height: '550px'}}/>
        <div className="empty-div"></div>
        <div className="empty-div"></div>
        <Description 
        number = '02'
        title="Picking the right Hiking Gear!" 
        text="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
        Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet." 
        image={descriptionImage2} 
        textColor="white" 
        fontFamily='Tiro Devanagari Sanskrit' 
        widthImage='40%' 
        widthText='40%' 
        fontSizeTitle='48px' 
        fontSizeParagraph = '16px'
        lineHeightP = '32px' 
        button ='true'
        backgroundButton = 'transparent'
        textButtonColor = 'yellow'
        fontFamilyButton = 'Poppins'
        swichObjects='true'
        style={{height: '550px'}}/>
        <div className="empty-div"></div>
        <div className="empty-div"></div>
        <Description 
        number = '03'
        title="Understand Your Map & Timing" 
        text="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.." 
        image={descriptionImage3} 
        textColor="white" 
        fontFamily='Tiro Devanagari Sanskrit' 
        widthImage='40%' 
        widthText='40%' 
        fontSizeTitle='48px' 
        fontSizeParagraph = '16px'
        lineHeightP = '32px' 
        button ='true'
        backgroundButton = 'transparent'
        textButtonColor = 'yellow'
        fontFamilyButton = 'Poppins'
        swichObjects='false'
        style={{height: '550px'}}/>
        <div className="empty-div"></div>
        <div className="empty-div"></div>
        </div>
        
   );
};

export default T2;

