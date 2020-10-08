import React from 'react'
import '../LogIn.css';

const LogIn = () => {
    return (
    <div id="A_Container_Wrap">
        <div class="inner member">
            <h3 class="sub_tit">로그인</h3>
            <p class="sub_txt">고객감동을 최고의 가치로 여기는 프로젝트에 오신 것을 환영합니다.</p>
            <form name="loginform" action="" method="post" class="login_form">
                <input type="hidden" name="strBackUrl" />
                <input type="hidden" name="logcheck" />
                <input type="text" name="strId" placeholder="아이디" />
                <input type="password" name="strPw" placeholder="비밀번호" />
                <button type="button" onclick="submit_check();">로그인</button>
                <ul>
                    <li className="list_after"><a href="#">회원가입</a></li>
                    <li className="list_after2"><a href="#">아이디 찾기</a></li>
                    <li><a href="#">비밀번호 찾기</a></li>
                </ul>
            </form>
        </div>
    </div>
    )
}

export default LogIn;
