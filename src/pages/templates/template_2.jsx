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
    const [title, setTitle] = useState(undefined);
    const [description1, setDescription1] = useState(undefined);
    const [description2, setDescription2] = useState(undefined);
    const [description3, setDescription3] = useState(undefined);

    useEffect(() => {
        if (user_id === undefined) return;
        fetch(`/colors/${user_id}`, {
            mode: 'no-cors'
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setColors(data)
                } else {
                    console.log('No colors received from server')
                }
            })

        fetch(`/images/${user_id}`, {
            mode: 'no-cors'
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setImages(data)
                } else {
                    console.log('No images received from server')
                }
            })
            .catch(error => console.log('Error fetching colors:', error))

        fetch(`/prompt/${user_id}`, {
            mode: 'no-cors'
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    data.forEach(element => {
                        setTitle(element[0])
                        setDescription1(element[1])
                        setDescription2(element[2])
                        setDescription3(element[3])
                    });
                } else {
                    console.log('No text received from server')
                }
            })
            .catch(error => console.log('Error fetching text:', error))

    }, [user_id])

    if (colors === undefined) return (<>I'm processing on the backend </>);
    return (
        <>
            <div className="T2-body" style={{ backgroundColor: colors[0] }}>
                <Hero
                    className="template-2-hero"
                    image={images[0]}
                    title={title}
                    fontFamily='Tiro Devanagari Sanskrit'
                    fontWeight='100'
                    style={{ color: 'white', '--hero-bg-color': colors[1] }}
                />
                <div className="empty-div"></div>
                <Description
                    number='01'
                    title="What level of hiker are you?"
                    text={description1}
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
                    text={description2}
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
                    text={description3}
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

