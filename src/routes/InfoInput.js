import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode';
import '../InfoInput.css'

const InfoInput = () => {
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

    const handleData = data => {
        console.log(data);
    }
    
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

        const width = '595px';
        const height = '450px';
        const modalStyle = {
            position: "absolute",
            top: 0,
            left: '250px',
            zIndex: "999",
            border: "1px solid #000000",
            overflow: "hidden"
        }
    return (
        <div>
            <form>
                <div className="write_form">
                    <div className="row">
                        <label for="join_id" className="label">아이디 *</label>
                        <div className="input_box id">
                            <input id="join_id" type="text" name="strId" maxlength="16" placeholder="아이디를 입력해주세요"/>
                            <button type="button">중복체크</button>
                        </div>
                    </div>
                    <div className="row">
                        <label for="join_pw" className="label">비밀번호 *</label>
                        <div className="input_box">
                            <input id="join_pw" type="password" name="strPwd" maxlength="16"
                                placeholder="비밀번호를 입력해주세요"/>
                        </div>
                    </div>
                    <div className="row">
                        <label for="join_pw" className="label">비밀번호 확인 *</label>
                        <div  className="input_box">
                            <input name="strPwd2" type="password" maxlength="16" />
                        </div>
                    </div>
                    <div className="row">
                        <label for="join_name" className="label">이름 *</label>
                        <div  className="input_box">
                            <input id="join_name" type="text" name="strName" maxlength="15"/>
                        </div>
                    </div>
                    <div className="row post_address">
                        <label for="join_address" className="label">주소 *</label>
                        <div className="input_box id">
                            <div onClick={handleOpenPost}>
                                <button type="button" >우편번호 통합검색</button>
                                {
                                    post.isDaumPost ? 
                                    <DaumPostcode 
                                        onComplete={handleComplete}
                                        autoClose
                                        width={width}
                                        height={height}
                                        style={modalStyle}
                                        isDaumPost={post.isDaumPost}
                                        /> :
                                    null
                                }
                                <input type="text" name="strZip" readonly id="extraAddress"/>
                            </div>
                            
                            <input type="text" name="strAddr1" id="fullAddress" maxlength="200" />
                            <input type="text" name="strAddr2" id="strAddr2" maxlength="200" />
                        </div>
                    </div>
                    <div class="row join_phone">
						<label for="join_phone" class="label">휴대폰번호 *</label>
						<div class="input_box phone">
							<div class="phone_input">
								<input type="number" name="strMobil1"/>
							</div>
							<div class="marketing">
								<strong>마케팅 활용 동의</strong>
								<div class="chk_box">
									<input className="chk_box_input" type="radio" id="marketing_phone01" name="strsmsok" value="Y" checked />
									<label for="marketing_phone01"><span></span><p>동의</p></label>
								</div>
								<div class="chk_box">
									<input className="chk_box_input" type="radio" id="marketing_phone02" name="strsmsok" value="N" />
									<label for="marketing_phone02"><span></span><p>미동의</p></label>
								</div>
							</div>
						</div>
					</div>
					<div class="row join_email">
						<label for="join_email" class="label">추가 이메일 *</label>
						<div class="input_box email">
							<div class="email_input">
								<input type="text" name="strEmail1" maxlength="50" />
							</div>
							<div class="marketing">
								<strong>마케팅 활용 동의</strong>
								<div class="chk_box">
									<input className="chk_box_input" type="radio" id="marketing_email01" name="strmailok" value="Y" checked />
									<label for="marketing_email01"><span></span><p>동의</p></label>
								</div>
								<div class="chk_box">
									<input className="chk_box_input" type="radio" id="marketing_email02" name="strmailok" value="N" />
									<label for="marketing_email02"><span></span><p>미동의</p></label>
								</div>
							</div>
						</div>
					</div>
				</div>
            </form>
        </div>
    )
}

export default InfoInput
