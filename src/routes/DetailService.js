import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import '../DetailService.css'
import service_ic01 from '../assets/images/service_ic01.png'
import service_ic02 from '../assets/images/service_ic02.png'
import school from '../assets/images/school.png'
import hospital2 from '../assets/images/hospital2.png'
import restaurant from '../assets/images/restaurant.png'
import service_ic05 from '../assets/images/service_ic05.png'
import Navbar from '../Navbar'
import top from '../assets/images/sub_visual07.jpg'

const DetailService = () => {

    return (
    <>
        <Navbar />
        <img src={top} className="top_img"/>
        <span className="top_title">Main Service</span>
    <section className="service">
        <div className="con">
                <Link to="#" target="_blank">
                <div className="img">
                    <span className="hov">
                        <img src={service_ic01}  className="icon"/>
                        <div className="introduce">
                            <span className="intro"></span>
                                 <strong className="tit">주거시설</strong>
                                <br/>
                                바로가기 +  
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        <div className="con">
            <Link to="#" target="_blank">
                <div className="img2">
                    <span className="hov">
                        <img src={service_ic02} className="icon"/>
                        <div className="introduce">
                            <span className="intro"></span>
                                <strong>공공시설</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        <div className="con">
            <Link to="#" target="_blank">
                <div className="img3">
                    <span className="hov">
                        <img src={school} className="icon"/>
                        <div className="introduce">
                            <span className="intro"></span>
                                <strong>교육시설</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        <div className="con">
            <Link to="#" target="_blank">
                <div className="img4">
                    <span className="hov">
                        <img src={hospital2} className="icon"/>
                        <div className="introduce">
                            <span className="intro"></span>
                                <strong>의료시설</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        <div className="con">
            <Link to="#" target="_blank">   
                <div className="img5">
                    <span className="hov">
                        <img src={restaurant} className="icon"/>
                        <div className="introduce">
                            <span className="intro"></span>
                                <strong>요식업</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        <div className="con">
            <Link to="#" target="_blank">
                <div className="img6">
                    <span className="hov">
                        <img src={service_ic05} className="icon"/>
                        <div className="introduce">
                            <span className="intro"></span>
                                <strong>프리미엄</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        <Route>
            {/* <House/> */}
        </Route>
    </section>
    </>
    )
}

export default DetailService
