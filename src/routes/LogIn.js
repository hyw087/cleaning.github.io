/** @format */

import React, { useEffect, useState } from "react";
import "../LogIn.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

// 프롭스로 받은 onLogin이 아들 아들이 값을 받아서 다시 아부지한테 보냄
const LogIn = ({ onLogin }) => {
  const [tempUser, setTempUser] = useState(null);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const resUser = sessionStorage.setItem("User", JSON.stringify(tempUser));
  console.log(resUser);

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  console.log(id);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    onLogin(tempUser);
    if (id === tempUser.id && password === tempUser.password) {
      alert(`${tempUser.name}님 환영합니다.`);
      history.push("/");
    } else {
      alert("아이디 및 비밀번호를 다시 확인해 주세요.");
    }
  };

  useEffect(() => {
    const fetchUsers = async (i) => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/ddidce/cleaning.github.io/master/data.json"
        );
        setTempUser(response.data.emergencyContacts[0]);

        for (i = 0; i < response.data.length; i++) {}
      } catch (error) {
        alert("에러입니다,");
      }
    };
    fetchUsers();
  }, []);

  return (
    <div id="A_Container_Wrap">
      <div className="inner member">
        <h3 className="sub_tit">로그인</h3>
        <p className="sub_txt">
          고객감동을 최고의 가치로 여기는 프로젝트에 오신 것을 환영합니다.
        </p>
        <form name="loginform" action="" method="post" className="login_form">
          <input
            type="text"
            name="strId"
            placeholder="아이디"
            onChange={onChangeId}
            value={id}
          />
          <input
            type="password"
            name="strPw"
            placeholder="비밀번호"
            onChange={onChangePassword}
            value={password}
          />
          <button type="button" onClick={handleClick}>
            로그인
          </button>
          <ul>
            <li className="list_after">
              <Link to="/SignUp">회원가입</Link>
            </li>
            <li className="list_after2">
              <Link to="">아이디 찾기</Link>
            </li>
            <li>
              <Link to="">비밀번호 찾기</Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
