import React from 'react'
import '../SignUpCom.css';
import {CompleteIc} from '../assets/images/ic_join.png';

const SignUpComp = () => {
    return (
    <div class="join_complete">
        <div className="join_complete_contents">
            <strong>회원가입이 완료되었습니다.</strong>
            <p>프로젝트 회원이 되신 것을 축하합니다.</p>
            <img src={CompleteIc} alt=""/>
        </div>
    </div>
    )
}

export default SignUpComp
