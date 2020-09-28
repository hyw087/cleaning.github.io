import React from 'react'
import '../src/Slide.css'
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
// import House from '../src/assets/images/house.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../src/assets/images/left-arrow.png';
import next from '../src/assets/images/next.png';

const sliderBar = {
    "overflow-y": "hidden",
}


function SampleNextArrow(props) {
    const { classNames, styles, onClick } = props;
    return ( 
        <div 
            className={classNames}
            style={{...styles, 
                    display:"block",
                    
                }}
            onClick={onClick}
        >
            <img src={next} alt=""
                className={classNames}
                style = {{...styles,
                    width:40, 
                    height:40,
                    position: "absolute",
                    bottom: "50%",
                    right : 0,
                }}
            />
        </div>
    )
}

function SamplePrevArrow(props) {
    const { classNames, styles, onClick } = props;
    return ( 
        <div 
            className={classNames}
            style={{...styles, 
                display:"block",
                top : "40%",
                position:"absolute",
                width:40, 
                height:40,
            }}
        onClick={onClick}
    >
        <img src={leftArrow} alt=""
            className={classNames}
            style = {{...styles,
                width:40, 
                height:40,
                position: "absolute",
                zIndex : 1
            }}
        />
        </div>
    )
}

const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow : <SamplePrevArrow />,
        nextArrow : <SampleNextArrow />,
    };
    return (  
        <div>
            <Slider {...settings} style={sliderBar}>
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


export default Slide;
