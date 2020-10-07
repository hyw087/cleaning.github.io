import React from 'react'
import '../InfoInput.css'

const InfoInput = () => {
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
                            <div>
                                <input type="text" name="strZip" readonly />
                                <button type="button">우편번호 통합검색</button>
                            </div>
                            <input type="text" name="strAddr1" id="strAddr1" maxlength="200" />
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
