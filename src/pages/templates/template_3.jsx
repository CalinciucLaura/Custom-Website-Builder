import React from "react"
import Hero from "../../components/Hero"
import Gallery from "../../components/Gallery"
import "./template.scss"
import Description from "../../components/Description";
import { useEffect, useState } from "react";


const T3 = ({ images }) => {
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
    return (
        <div className="T3-body">
            <Hero
                title={["Enjoy Your ", <br key="br" />, "Dream House"]}
                fontFamily='Poppins'
                image={images[1]}
                button='true'
                textButtonColor='black'
                backgroundColorButton='white'
                style={{ textAlign: 'left', color: 'white' }}
            />
            {/* To add 3 dominant colors
            <div className="colorsBar">
                <div />
                <div />
                <div />
            </div>

            <div className="imagesContainer" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${images[0]})` }}>
                <img src={images[2]} />
                <img src={images[3]} />
                <img src={images[4]} />
            </div> */}

            <Gallery images={images} backgroundColor="white" fontFamily="Poppins" />
        </div>
    )
};

export default T3;
