import { text } from '@fortawesome/fontawesome-svg-core';
import React, {useEffect, useState } from 'react'
import DaumPostcode from 'react-daum-postcode';
import '../InfoInput.css'

// http://www.objgen.com/json/models/Pzu <- json파일
const InfoInput = () => {
    const [post, setPost] = useState(
        {
            zoneCode : [""],
            fullAddress : "",
            isDaumPost : false,
        }
    );
        // console.log(post)
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    // detailedAddress => deAddress
    const [deAddress, setDeAddress] = useState('');
    const [passwordError,setPasswordError] = useState(false);


    const onSubmit = e => {
        e.preventDefault();

        if(password !== passwordCheck) {
            return setPasswordError(true);

        }
    }
    console.log({
        id,
        password,
        passwordCheck,
        name,
        phone,
        email,
        deAddress,
        post,
        "zoneCode" : post.zoneCode,
    });

    const onChangeId = e => {
        setId(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    const onChangePasswordChk = e => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onPhoneNum = e => {
        setPhone(e.target.value);
    }

    const onEmail = e => {
        setEmail(e.target.value);
    }

    const onFullAddress = e => {
        setPost({
            fullAddress : e.target.value
        })
        this.props.bind(e.target.name, e.target.value);
    }

    const onDetailAddress = e => {
        setDeAddress(e.target.value);
    }
    
    const handleOpenPost = () => {
        setPost({
            ...post,
            isDaumPost : true,
            // [e.target] : e.target.value,
            // fullAddress : e.target.value,
        })
        // console.log([e.target]);
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
        
        //console.log(data.address);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        //console.log(data.fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        //console.dir(data);
    }

        const width = '450px';
        const height = '450px';
        const modalStyle = {
            position: "absolute",
            top: '50.4%',
            left: '21.9%',
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
                    isDaumPost={post.isDaumPost}
                    /> :
                null
            }
            <div>
                <form onSubmit={onSubmit}>
                    <div className="write_form">
                        <div className="row">
                            <label htmlFor="join_id" className="label">아이디 *</label>
                            <div className="input_box id">
                                <input id="join_id" type="text" maxLength="16" placeholder="아이디를 입력해주세요" value={id} onChange={onChangeId}/>
                                <button type="button">중복체크</button>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="join_pw" className="label">비밀번호 *</label>
                            <div className="input_box">
                                <input id="join_pw" type="password" maxLength="16"
                                    placeholder="비밀번호를 입력해주세요" value={password} onChange={onChangePassword}/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="join_pwck" className="label">비밀번호 확인 *</label>
                            <div  className="input_box">
                                <input type="password" maxLength="16" value={passwordCheck} onChange={onChangePasswordChk}/>
                                {passwordError && <div style={{color : "red"}}>비밀번호가 일치 하지 않습니다.</div>}
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="join_name" className="label">이름 *</label>
                            <div  className="input_box">
                                <input id="join_name" type="text" name="strName" maxLength="15" value={name} onChange={onChangeName}/>
                            </div>
                        </div>
                        <div className="row post_address">
                            <label htmlFor="join_address" className="label">주소 *</label>
                            <div className="input_box id">
                                <div id="react-root">
                                    <button type="button" id="portal-root" onClick={handleOpenPost}>우편번호 통합검색</button>
                                    <input type="text" name="strZip" id="extraAddress" />
                                </div>
                                <input type="text" name="strAddr1" id="fullAddress" maxLength="200"/>
                                <input type="text" name="strAddr2" id="strAddr2" maxLength="200"value={deAddress} onChange={onDetailAddress} />
                            </div>
                        </div>
                        <div className="row join_phone">
                            <label htmlFor="join_phone" className="label">휴대폰번호 *</label>
                            <div className="input_box phone">
                                <div className="phone_input">
                                    <input type="number" name="strMobil1" value={phone} onChange={onPhoneNum}/>
                                </div>
                                <div className="marketing">
                                    <strong>마케팅 활용 동의</strong>
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
                            <label htmlFor="join_email" className="label">이메일 *</label>
                            <div className="input_box email">
                                <div className="email_input">
                                    <input type="text" name="strEmail1" maxLength="50" value={email} onChange={onEmail}/>
                                </div>
                                <div className="marketing">
                                    <strong>마케팅 활용 동의</strong>
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
                </form>
            </div>
        </>
    )
}

export default InfoInput
