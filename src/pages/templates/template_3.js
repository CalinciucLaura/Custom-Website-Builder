import React from "react";
import Hero from "../../components/Hero";
import "./template.css"
import Description from "../../components/Description";
import descriptionImage1 from "../../assets/images/22.jpg" ;
import descriptionImage2 from "../../assets/images/24.jpg" ;
import heroImage from "../../assets/images/23.jpg" ;
import EmptyDiv from "../../components/EmptyDiv";

const T2 = () => {
    return (
        <div className="T3-body">
        
        <Description
        className="template-3-description"
        title="MAKING YOUR OWN BAKERY" 
        text="Pancakes are a great way to start your morning. They are easy to make and delicious." 
        image={descriptionImage1} 
        backgroundColor="#111820"
        textColor="#EBE8E7" 
        fontFamily='Poppins' 
        widthImage='65%' 
        widthText='35%' 
        fontSizeTitle='60px' 
        fontSizeParagraph = '15px'
        // paragraphColor = 'green'
        lineHeightP = '20px' 
        button ='false'
        backgroundButton = 'transparent'
        textButtonColor = 'yellow'
        fontFamilyButton = 'Poppins'
        swichObjects='false'
        style={{height: '550px', textAlign: 'center'}}/>

        <EmptyDiv style={{height: '50px', backgroundColor: '#111820'}}/>
        <Hero 
        className="template-3-hero"
        image={heroImage} 
        title="WEEKEND DISCOUNT" 
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        fontFamily='Poppins'
        fontWeight='bold'
        button = 'true'
        style={{textAlign: 'center', color: 'white'}}/>

       <EmptyDiv style={{height: '50px', backgroundColor: '#111820'}}/>

       <Description
        className="template-3-description"
        title="MAKING YOUR OWN BAKERY" 
        text="Pancakes are a great way to start your morning. They are easy to make and delicious." 
        image={descriptionImage2} 
        backgroundColor="#111820"
        textColor="#EBE8E7" 
        fontFamily='Poppins' 
        widthImage='65%' 
        widthText='35%' 
        fontSizeTitle='60px' 
        fontSizeParagraph = '15px'
        // paragraphColor = 'green'
        lineHeightP = '20px' 
        button ='false'
        backgroundButton = 'transparent'
        textButtonColor = 'yellow'
        fontFamilyButton = 'Poppins'
        swichObjects='true'
        style={{height: '550px', textAlign: 'center'}}/>
        <EmptyDiv style={{height: '50px', backgroundColor: '#111820'}}/>
        <Hero 
        className="template-3-hero"
        title="HEALTHY RECIPES"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        fontFamily='Poppins'
        fontWeight='bold'
        button = 'true'
        buttonBackgroundColor = '#111820'
        textButtonColor='white'
        style={{textAlign: 'center', backgroundColor: '#cbb49c', color: '#111820'}}/>
        
        </div>
        
   );
};

export default T2;

