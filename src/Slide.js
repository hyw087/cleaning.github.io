import React from 'react'
import '../src/Slide.css'
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
// import House from '../src/assets/images/house.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (  
        <div className="s">
            <Slider {...settings}>
                <div className="slider">
                    <h2>평가</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus consequuntur, tempore, error ex odit aliquam necessitatibus suscipit eveniet odio magnam corrupti repellendus voluptatibus culpa, repellat molestiae? Maxime ipsam quaerat nihil.</p>
                    <p>KYS</p>
                </div>
                <div className="slider">
                    <h2>평가</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus consequuntur, tempore, error ex odit aliquam necessitatibus suscipit eveniet odio magnam corrupti repellendus voluptatibus culpa, repellat molestiae? Maxime ipsam quaerat nihil.</p>
                    <p>PHW</p>
                </div>
                <div className="slider">
                    <h2>평가</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus consequuntur, tempore, error ex odit aliquam necessitatibus suscipit eveniet odio magnam corrupti repellendus voluptatibus culpa, repellat molestiae? Maxime ipsam quaerat nihil.</p>
                    <p>SN</p>
                </div>
            </Slider>
        </div>
    )
}


export default Slide
