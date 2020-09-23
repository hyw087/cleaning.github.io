import React from 'react'
import House from '../src/assets/images/house.png';
import Building from '../src/assets/images/building.png';
import University from '../src/assets/images/university.png';
import Hospital from '../src/assets/images/hospital.png';
import Dish from '../src/assets/images/dish.png';
import '../src/Service.css'

const Work = () => {
    return (
        <div>
            <section className="Service-body">
                <p><b>what</b>we do</p>
                <div className="Service-part">
                    <div>
                    <img src={House} alt=""/>
                    <h3>일반시설</h3>
                    <p>여기에 설명을 입력합시다 = =</p>
                    </div>
                    <div>
                    <img src={Building} alt=""/>
                    <h3>공공시설</h3>
                    <p>여기에 설명을 입력합시다 = =</p>
                    </div>
                    <div>
                    <img src={University} alt=""/>
                    <h3>교육시설</h3>
                    <p>여기에 설명을 입력합시다 = =</p>
                    </div>
                    <div>
                    <img src={Hospital} alt=""/>
                    <h3>의료시설</h3>
                    <p>여기에 설명을 입력합시다 = =</p>
                    </div>
                    <div>
                    <img src={Dish} alt=""/>
                    <h3>요식시설</h3>
                    <p>여기에 설명을 입력합시다 = =</p>
                    </div>
                </div>
                </section>
        </div>
    )
}

export default Work
