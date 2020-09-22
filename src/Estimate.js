import React from 'react'
import Facebook from '../src/images/facebook-logo.png';
import Twitter from '../src/images/twitter.png';
import Instagram from '../src/images/instagram.png';

const Estimate = () => {
    return (
        <div>
            <section>
                <h2>무료 견적 요청</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <button>지금 견적 받기</button>
                <div>
                    <img src={Facebook} alt=""/>
                    <img src={Twitter} alt=""/>
                    <img src={Instagram} alt=""/>
                </div>
            </section>
        </div>
    )
}

export default Estimate
