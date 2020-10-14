import React, { useEffect, useState } from 'react'
import '../LogIn.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [users, setUsers] = useState(null);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = e => {
        setId(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    const handleClick = (i) => {
        // for(let i = 0; i<users.)
        if(id === users[i].id && password === users[i].password) {
            for(let i =0; i<users.length; i++) {
                alert("로그인완료되었습니다.");
            }
        } else {
            alert("실패입니다.")
        }
        console.log(users[0].id , users[0].password);
    }

    useEffect(() => {
        const fetchUsers = async (i) => {
            try {
                const response = await axios.get(`http://localhost:4000/emergencyContacts`);
                setUsers(response.data);
                for(i = 0 ; i< response.data.length; i++) {
                    // console.log(`${response.data[i].id} ${response.data[i].password}`);
                }
                
            } catch (error) {
                alert("에러입니다,");
            }
        }
        fetchUsers()
    },[])

    console.log({
        id,
        password
    });
    return (
    <div id="A_Container_Wrap">
        <div class="inner member">
            <h3 class="sub_tit">로그인</h3>
            <p class="sub_txt">고객감동을 최고의 가치로 여기는 프로젝트에 오신 것을 환영합니다.</p>
            <form name="loginform" action="" method="post" class="login_form">
                {/* <input type="hidden" name="strBackUrl" />
                <input type="hidden" name="logcheck" /> */}
                <input type="text" name="strId" placeholder="아이디" onChange={onChangeId} value={id}/>
                <input type="password" name="strPw" placeholder="비밀번호" onChange={onChangePassword} value={password}/>
                <button type="button" onClick={handleClick}>로그인</button>
                <ul>
                    <li className="list_after"><Link to="/SignUp">회원가입</Link></li>
                    <li className="list_after2"><a href="#">아이디 찾기</a></li>
                    <li><a href="#">비밀번호 찾기</a></li>
                </ul>
            </form>
        </div>
    </div>
    )
}

export default LogIn;
