import React, {useEffect, useState} from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Description from "../../components/Description";
import Quote from "../../components/Quote";
import Gallery from "../../components/Gallery";
import "./template.css"


const T1 = ({images}) =>{
   
    const [colors, setColors] = useState(null);

    useEffect(() => {
        fetch('/colors')
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                setColors(data)
                console.log(data)
            } else {
                console.log('No colors received from server')
            }
        })
        .catch(error => console.log('Error fetching colors:', error))
    }, [])

    
    if (!colors) {
        console.log('Loading colors...')
        return null // or return a loading spinner
    }
    
    console.log(colors[0])
    return (
        <div className="T1-body">
        <Hero  image={images[0]} title="Modern Design"  fontFamily='Playfair Display' button='true' textButtonColor='black' backgroundColorButton='white' style={{textAlign:'center', color:'white'}}/>
        <About title="ABOUT" text="Locus Design is an architecture and interior design studio based in London, specialising in the fully integrated design and delivery unique private residences. As a studio we are passionate about the interplay between architecture, interior design and landscape, and the role thy can play in the enjoyment of everyday life in the home." textColor="white" fontFamily='Playfair Display' style={{backgroundColor: colors[0]}}/>
        <Description 
        title="Services"
        text="We offer a full range of services, from architecture and interior design to landscape and furniture design. We work closely with our clients to understand their needs and aspirations, and to develop a clear brief and design vision. We then work collaboratively with our clients and specialist consultants to deliver the project from concept to completion." 
        backgroundColor={colors[1]} 
        image={images[1]}
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
        swichObjects='true'
        style={{textAlign:'center'}}/>

        <Description 
        title="Projects"
        text="We offer a full range of services, from architecture and interior design to landscape and furniture design. We work closely with our clients to understand their needs and aspirations, and to develop a clear brief and design vision. We then work collaboratively with our clients and specialist consultants to deliver the project from concept to completion." 
        image={images[2]} 
        backgroundColor={colors[1]} 
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
        
        <Quote text="We are passionate about the interplay between architecture, interior design and landscape, and the role they can play in the enjoyment of everyday life in the home." author="John Doe" backgroundColor={colors[2]} textColor="white" fontFamily='Playfair Display'/>
        <Gallery images={[images[3], images[4],images[5], images[6]] }backgroundColor="#f1f1f1" fontFamily='Playfair Display'/> 
        </div>
    );
};

export default T1;