import React, { useEffect, useState } from 'react';
import '../LogIn.css';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

// 프롭스로 받은 onLogin이 아들 아들이 값을 받아서 다시 아부지한테 보냄
const LogIn = ({onLogin}) => {
    const [tempUser, setTempUser] = useState(null);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const onChangeId = e => {
        setId(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    const handleClick = () => {
        console.log(tempUser);
        // console.log(users.emergencyContacts[0]);
        // console.log(onLogin);
        onLogin(tempUser);
        history.push("/");
    }

    useEffect(() => {
        const fetchUsers = async (i) => {
            try {
                console.log("asd");
                const response = await axios.get('https://raw.githubusercontent.com/ddidce/cleaning.github.io/master/data.json');
                setTempUser(response.data.emergencyContacts[0]);
                // console.log(onLogin);
                for(i = 0 ; i< response.data.length; i++) {
                    // console.log(`${response.data[i].id} ${response.data[i].password}`);
                }
                
            } catch (error) {
                alert("에러입니다,");
            }
        }
        fetchUsers()
    },[])

    // console.log({
    //     id,
    //     password
    // });
    return (
    <div id="A_Container_Wrap">
        <div className="inner member">
            <h3 className="sub_tit">로그인</h3>
            <p className="sub_txt">고객감동을 최고의 가치로 여기는 프로젝트에 오신 것을 환영합니다.</p>
            <form name="loginform" action="" method="post" className="login_form">
                {/* <input type="hidden" name="strBackUrl" />
                <input type="hidden" name="logcheck" /> */}
                <input type="text" name="strId" placeholder="아이디" onChange={onChangeId} value={id}/>
                <input type="password" name="strPw" placeholder="비밀번호" onChange={onChangePassword} value={password}/>
                <button type="button" onClick={handleClick}>로그인</button>
                <ul>
                    <li className="list_after"><Link to="/SignUp">회원가입</Link></li>
                    <li className="list_after2"><Link to="">아이디 찾기</Link></li>
                    <li><Link to="">비밀번호 찾기</Link></li>
                </ul>
            </form>
        </div>
    </div>
    )
}

export default LogIn;
