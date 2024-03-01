import React from "react";
import Hero from "../../components/Hero";
import "./template.scss"
import Description from "../../components/Description";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const T2 = () => {
    const [colors, setColors] = useState(undefined);
    const [images, setImages] = useState(undefined);
    const { user_id } = useParams();

    useEffect(() => {
        if (user_id === undefined) return;
        fetch(`http://localhost:5000/colors/${user_id}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setColors(data)
                    console.log(data)
                } else {
                    console.log('No colors received from server')
                }
            })

        fetch(`http://localhost:5000/images/${user_id}`)
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

    if (colors === undefined) return (<>I'm processing on the backend :-)</>);
    return (
        <>
            <div className="T2-body" style={{ backgroundColor: colors[0] }}>
                <Hero
                    className="template-2-hero"
                    image={images[0]}
                    title="Be Prepared For The Mountains And Beyond!"
                    fontFamily='Tiro Devanagari Sanskrit'
                    fontWeight='100'
                    style={{ color: 'white', '--hero-bg-color': colors[1] }}
                />
                <div className="empty-div"></div>
                <Description
                    number='01'
                    title="What level of hiker are you?"
                    text="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
                    image={images[1]}
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
                    title="Picking the right Hiking Gear!"
                    text="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
        Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
                    image={images[2]}
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
                    title="Understand Your Map & Timing"
                    text="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
                    image={images[3]}
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
            </div>
        </>

    );
};

export default T2;

