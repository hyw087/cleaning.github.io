import React from 'react'
import AboutImg from '../src/assets/images/AboutUs_one.jpg';
import './About.css'

const About = () => {
    return (
        <div className="About">
            <h1><span>about</span>   us</h1>
            <div className="About-content">
                <img src={AboutImg} alt=""/>
            </div>
            <div className="About-text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, fugiat in nemo dolores optio, deserunt minima amet voluptatem delectus sequi eius dolore natus porro? Omnis incidunt dicta corrupti inventore reiciendis.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, fugiat in nemo dolores optio, deserunt minima amet voluptatem delectus sequi eius dolore natus porro? Omnis incidunt dicta corrupti inventore reiciendis.
                </p>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default About
