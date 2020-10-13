import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
import '../MemberModifiy.css'

const MemberModifiy = () => {
    const [post, setPost] = useState(
        {
            name: "",
            phone: "",
            address: "",
            zoneCode : "",
            fullAddress : "",
            isDaumPost : false,
            isRegister : false,
            register: [],
        }
        )
        // console.log(post);
    
    const handleOpenPost = () => {
        setPost({
            ...post,
            isDaumPost : true,
        })
    }

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
            if (data.zonecode !== '') {
            extraAddress += data.zonecode;
            }
            if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? '' : '');
        }
        document.getElementById("extraAddress").value = extraAddress;
        document.getElementById("fullAddress").value = fullAddress;
        
        console.dir(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        console.dir(data);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        }
        const width = '450px';
        const height = '450px';
        const modalStyle = {
            position: "absolute",
            top: '39.4%',
            left: '25%',
            border: "1px solid #000000",
            zIndex : 100,
            // overflow: "hidden"
        }
    return (
        <>
        {
            post.isDaumPost ? 
            <DaumPostcode 
                onComplete={handleComplete}
                autoClose
                width={width}
                height={height}
                style={modalStyle}
                isDaumPost={post.isaumPost}
                /> :
            null
        }
            <div className="infoModi">
            <h3 class="sub_tit">회원정보관리</h3>
            <form method="post" name="joinform" id="joinform" class="join_form" enctype="multipart/form-data">
                <input type="hidden" name="pwd_check" id="pwd_check" value="" />
                <div class="write_form">
                    <div class="row">
                        <label for="join_id" class="label">아이디 *</label>
                        <div class="input_box id">
                            <p class="value">dddidce1</p>
                        </div>
                    </div>
                    <div class="row pw_modify">
                        <label for="join_pw" class="label">새 비밀번호 *</label>
                        <div class="input_box">
                            {/* <button type="button" onclick={myFunction} className="btn_pw_change">비밀번호 변경 +</button> */}
                                <input id="new_pw" type="password" name="strPwd" maxlength="16" placeholder="8~16자의 영문소문자/숫자/특수문자를 사용하세요." onchange="pwdcheck(this.value);" />
                            {/* <ul class="pw_box" id="myDropdown">
                                <li>
                                    <label for="new_pw">새 비밀번호 *</label>
                                </li>
                                <li>
                                    <label for="new_pw_check">새 비밀번호 확인 *</label>
                                    <input id="new_pw_check" name="strPwd2" type="password" maxlength="16" onchange="pwdcheck2(this.value);" />
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    <div class="row">
                        <label for="join_name" class="label">이름 *</label>
                        <div class="input_box name">
                            <input type="text" id="join_name" name="strName" maxlength="15" value="곽유신" />
                        </div>
                    </div>
                    <div className="row post_address">
                                <label htmlFor="join_address" className="label">주소 *</label>
                                <div className="input_box id">
                                    <div id="react-root">
                                        <button type="button" id="portal-root" onClick={handleOpenPost}>우편번호 통합검색</button>
                                        <input type="text" name="strZip" readOnly id="extraAddress"/>
                                    </div>
                                    <input type="text" name="strAddr1" id="fullAddress" maxLength="200" />
                                    <input type="text" name="strAddr2" id="strAddr2" maxLength="200" />
                                </div>
                            </div>
                    <div class="row join_phone">
                        <label for="write_phone" class="label input_height">연락처 *</label>
                        <div class="input_box phone">
                            <div class="phone_input">
                                    <input type="number" name="strMobil1" maxlength="3" value="01049426071"/>
                            </div>
                            <div className="marketing">
                                <strong className="cur">마케팅 활용 동의</strong>
                                <div className="chk_box">
                                    <input className="chk_box_input" type="radio" id="marketing_phone01" name="strsmsok" value="Y" checked />
                                    <label htmlFor="marketing_phone01"><span></span><p>동의</p></label>
                                </div>
                                <div className="chk_box">
                                    <input className="chk_box_input" type="radio" id="marketing_phone02" name="strsmsok" value="N" />
                                    <label htmlFor="marketing_phone02"><span></span><p>미동의</p></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row join_email">
                                <label htmlFor="join_email" className="label">추가 이메일 *</label>
                                <div className="input_box email">
                                    <div className="email_input">
                                        <input type="text" name="strEmail1" maxLength="50" value="ddidce@gmail.com" />
                                    </div>
                                    {/* Member => Member Modifiy */}
                                    <div className="marketing Member">
                                        <strong className="cur">마케팅 활용 동의</strong>
                                        <div className="chk_box">
                                            <input className="chk_box_input" type="radio" id="marketing_email01" name="strmailok" value="Y" checked />
                                            <label htmlFor="marketing_email01"><span></span><p>동의</p></label>
                                        </div>
                                        <div className="chk_box">
                                            <input className="chk_box_input" type="radio" id="marketing_email02" name="strmailok" value="N" />
                                            <label htmlFor="marketing_email02"><span></span><p>미동의</p></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
                <div class="btn_box">
                    <div>
                        <button type="button" class="btn_ok" onclick="inputCheck();">수정완료</button>
                    </div>
                </div>
            </form>
        </div>
    </>
    )
}

export default MemberModifiy
