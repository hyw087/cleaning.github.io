import React from 'react'
import { Link, Route } from 'react-router-dom'
import '../DetailService.css'
import service_ic01 from '../assets/images/service_ic01.png'
import service_ic02 from '../assets/images/service_ic02.png'
import school from '../assets/images/school.png'
import hospital2 from '../assets/images/hospital2.png'
import restaurant from '../assets/images/restaurant.png'
import service_ic05 from '../assets/images/service_ic05.png'

const DetailService = () => {
    return (
        <div class="service">
        <div class="con">
                <Link to="#" target="_blank">
                <div class="img">
                    <span class="hov">
                        <img src={service_ic01}  class="icon"/>
                        <div class="introduce">
                            <span class="intro"></span>
                                 <strong class="tit">주거시설</strong>
                                <br/>
                                바로가기 +  
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        <div class="con">
            <a href="#" class="link">
                <div class="img2">
                    <span class="hov">
                        <img src={service_ic02} class="icon"/>
                        <div class="introduce">
                            <span class="intro"></span>
                                <strong>공공시설</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </a>
        </div>
        <div class="con">
            <a href="#" class="link">
                <div class="img3">
                    <span class="hov">
                        <img src={school} class="icon"/>
                        <div class="introduce">
                            <span class="intro"></span>
                                <strong>교육시설</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </a>
        </div>
        <div class="con">
            <a href="#" class="link">
                <div class="img4">
                    <span class="hov">
                        <img src={hospital2} class="icon"/>
                        <div class="introduce">
                            <span class="intro"></span>
                                <strong>의료시설</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </a>
        </div>
        <div class="con">
            <a href="#" class="link">
                <div class="img5">
                    <span class="hov">
                        <img src={restaurant} class="icon"/>
                        <div class="introduce">
                            <span class="intro"></span>
                                <strong>요식업</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </a>
        </div>
        <div class="con">
            <a href="#" class="link">
                <div class="img6">
                    <span class="hov">
                        <img src={service_ic05} class="icon"/>
                        <div class="introduce">
                            <span class="intro"></span>
                                <strong>프리미엄</strong>
                                <br/>
                                바로가기 +
                        </div>
                    </span>
                </div>
            </a>
        </div>
        <Route>
            {/* <House/> */}
        </Route>
    </div>
    )
}

export default DetailService
