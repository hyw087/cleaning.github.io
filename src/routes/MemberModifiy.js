/* eslint no-use-before-define: 0 */
import React, { useEffect, useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
import '../MemberModifiy.css'
import axios from 'axios';


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
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error , setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setUsers(null);
                setLoading(true);
                const response = await axios.get(
                  'https://jsonplaceholder.typicode.com/users'  
                );
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchUsers();
    },[]);

    if(loading) return <div>로딩중,.</div>
    if(error) return <div>에러발생,.</div>
    if(!users) return null;
    
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
            <h3 className="sub_tit">회원정보관리</h3>
            <form method="post" name="joinform" id="joinform" className="join_form" encType="multipart/form-data">
                <input type="hidden" name="pwd_check" id="pwd_check" value="" />
                <div className="write_form">
                    <div className="row">
                        <label htmlFor="join_id" className="label">아이디 *</label>
                        <div className="input_box id">
                            <input className="value" value={users[0].id} readOnly/>
                        </div>
                    </div>
                    <div className="row pw_modify">
                        <label htmlFor="join_pw" className="label">새 비밀번호 *</label>
                        <div className="input_box">
                            {/* <button type="button" onclick={myFunction} classNameName="btn_pw_change">비밀번호 변경 +</button> */}
                                <input id="new_pw" type="password" name="strPwd" maxLength="16" placeholder="8~16자의 영문소문자/숫자/특수문자를 사용하세요." />
                            {/* <ul className="pw_box" id="myDropdown">
                                <li>
                                    <label htmlFor="new_pw">새 비밀번호 *</label>
                                </li>
                                <li>
                                    <label htmlFor="new_pw_check">새 비밀번호 확인 *</label>
                                    <input id="new_pw_check" name="strPwd2" type="password" maxLength="16" onchange="pwdcheck2(this.value);" />
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="join_name" className="label">이름 *</label>
                        <div className="input_box name">
                            <input type="text" id="join_name" name="strName" maxLength="15" value={users[0].name} readOnly />
                        </div>
                    </div>
                    <div className="row post_address">
                                <label htmlFor="join_address" className="label">주소 *</label>
                                <div className="input_box id">
                                    <div id="react-root">
                                        <button type="button" id="portal-root" onClick={handleOpenPost}>우편번호 통합검색</button>
                                        <input type="text" name="strZip"  id="extraAddress" value={users[0].address.zipcode}/>
                                    </div>
                                    <input type="text" name="strAddr1" id="fullAddress" maxLength="200" value={users[0].address.street}     />
                                    <input type="text" name="strAddr2" id="strAddr2" maxLength="200" value={users[0].address.suite} />
                                </div>
                            </div>
                    <div className="row join_phone">
                        <label htmlFor="write_phone" className="label input_height">연락처 *</label>
                        <div className="input_box phone">
                            <div className="phone_input">
                                <input type="text" name="strMobil1" value={users[0].phone} readOnly/>
                            </div>
                            <div className="marketing">
                                <strong className="cur">마케팅 활용 동의</strong>
                                <div className="chk_box">
                                    <input className="chk_box_input" type="radio" id="marketing_phone01" name="strsmsok" value="Y" defaultChecked />
                                    <label htmlFor="marketing_phone01"><span></span><p>동의</p></label>
                                </div>
                                <div className="chk_box">
                                    <input className="chk_box_input" type="radio" id="marketing_phone02" name="strsmsok" value="N" readOnly />
                                    <label htmlFor="marketing_phone02"><span></span><p>미동의</p></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row join_email">
                                <label htmlFor="join_email" className="label">추가 이메일 *</label>
                                <div className="input_box email">
                                    <div className="email_input">
                                        <input type="text" name="strEmail1" maxLength="50" value={users[0].email} readOnly />
                                    </div>
                                    {/* Member => Member Modifiy */}
                                    <div className="marketing Member">
                                        <strong className="cur">마케팅 활용 동의</strong>
                                        <div className="chk_box">
                                            <input className="chk_box_input" type="radio" id="marketing_email01" name="strmailok" value="Y" defaultChecked readOnly/>
                                            <label htmlFor="marketing_email01"><span></span><p>동의</p></label>
                                        </div>
                                        <div className="chk_box">
                                            <input className="chk_box_input" type="radio" id="marketing_email02" name="strmailok" value="N" readOnly/>
                                            <label htmlFor="marketing_email02"><span></span><p>미동의</p></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className="btn_box">
                    <div>
                        <button type="button" className="btn_ok">수정완료</button>
                    </div>
                </div>
            </form>
        </div>
    </>
    )
}

export default MemberModifiy
