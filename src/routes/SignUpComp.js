import React from 'react'
import '../SignUpCom.css';
import CompleteIc from '../assets/images/ic_join.png';

const SignUpComp = () => {
    return (
    <div class="join_complete">
        <div className="join_complete_contents">
            <strong>회원가입이 완료되었습니다.</strong>
            <p>프로젝트 회원이 되신 것을 축하합니다.</p>
            <img src={CompleteIc} />
        </div>
        {/* <div class="btn_box">
            <div>
                <button type="button" class="btn_list" onclick="location.href='/';">메인으로</button>
                <button type="button" class="btn_ok" onclick="location.href='login.asp';">로그인</button>
            </div>
        </div> */}
    </div>
    )
}

export default SignUpComp
