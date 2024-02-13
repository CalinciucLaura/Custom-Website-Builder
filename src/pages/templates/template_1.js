import React from "react";
import Hero from "../../components/Hero";
import heroImage from "../../assets/images/1.jpg";
import descriptionImage1 from "../../assets/images/4.jpg";
import descriptionImage2 from "../../assets/images/2.jpg";
import About from "../../components/About";
import Description from "../../components/Description";
import Quote from "../../components/Quote";
import parallaxImage from "../../assets/images/5.jpg";
import ParallaxImage from "../../components/ParallaxImage";
import Gallery from "../../components/Gallery";
import galleryImage1 from "../../assets/images/10.jpg";
import galleryImage2 from "../../assets/images/7.jpg";
import galleryImage3 from "../../assets/images/8.jpg";
import galleryImage4 from "../../assets/images/9.jpg";
import "./template.css"


const T1 = (textColor, ImageD1) => {
   
    return (
        <div className="T1-body">
        <Hero  image={heroImage} title="Modern Design"  fontFamily='Playfair Display' button='true' textButtonColor='black' backgroundColorButton='white' style={{textAlign:'center', color:'white'}}/>
        <About title="ABOUT" text="Locus Design is an architecture and interior design studio based in London, specialising in the fully integrated design and delivery unique private residences. As a studio we are passionate about the interplay between architecture, interior design and landscape, and the role thy can play in the enjoyment of everyday life in the home." backgroundColor="#AEA198" textColor="white" fontFamily='Playfair Display'/>
        <Description 
        title="Services"
        text="We offer a full range of services, from architecture and interior design to landscape and furniture design. We work closely with our clients to understand their needs and aspirations, and to develop a clear brief and design vision. We then work collaboratively with our clients and specialist consultants to deliver the project from concept to completion." 
        image={ImageD1}
        backgroundColor="#f1f1f1" 
        textColor={textColor.textColor}
        fontFamily='Playfair Display'
        fontSizeTitle='40px'
        fontSizeParagraph = '13px'
        lineHeightP= '25px'
        button='true'
        backgroundColorButton='white'
        textButtonColor='black'
        fontFamilyButton = 'Poppins'
        widthImage= '50%' 
        widthText= '50%' 
        swichObjects='true'
        style={{textAlign:'center'}}/>

        <Description 
        title="Projects"
        text="We offer a full range of services, from architecture and interior design to landscape and furniture design. We work closely with our clients to understand their needs and aspirations, and to develop a clear brief and design vision. We then work collaboratively with our clients and specialist consultants to deliver the project from concept to completion." 
        image={descriptionImage1} 
        backgroundColor="#f1f1f1" 
        textColor="black" 
        fontFamily='Playfair Display'
        fontSizeTitle='40px'
        fontSizeParagraph = '13px'
        lineHeightP= '25px'
        button='true'
        backgroundColorButton='white'
        textButtonColor='black'
        fontFamilyButton = 'Poppins'
        widthImage= '50%' 
        widthText= '50%' 
        swichObjects='false'
        style={{textAlign:'center'}}/>
        
        <Quote text="We are passionate about the interplay between architecture, interior design and landscape, and the role they can play in the enjoyment of everyday life in the home." author="John Doe" backgroundColor="#A69285" textColor="white" fontFamily='Playfair Display'/>
       
        {/* <About title="PORTFOLIO" backgroundColor="#fafafa" textColor="#5a5d6c" fontFamily="Poppins"/> */}
        <Gallery images={[galleryImage1, galleryImage2, galleryImage3, galleryImage4,] }backgroundColor="#f1f1f1" fontFamily='Playfair Display'/> 
        {/* <ParallaxImage imageUrl={parallaxImage}/> */}
        {/* <Footer backgroundColor="#AEA198" textColor="white" fontFamily='Playfair Display'/> */}
        </div>
    );
};

export default T1;