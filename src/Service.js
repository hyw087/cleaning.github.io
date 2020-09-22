import React from 'react'
import House from '../src/images/house.png';
import Building from '../src/images/building.png';
import University from '../src/images/university.png';
import Hospital from '../src/images/hospital.png';
import Dish from '../src/images/dish.png';

const Work = () => {
    return (
        <div>
            <section>
                <p><b>what</b>we do</p>
                <div>
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
