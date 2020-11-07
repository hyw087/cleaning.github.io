import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = ({ logout }) => {
    const cureentUser = JSON.parse(sessionStorage.getItem('User'));
    const onLogout = () => {
        logout();
        sessionStorage.clear();
        window.location.href = '/';
    };
    console.log(cureentUser);
    return (
        <header className="navbar">
            <nav>
                <div className="navbar-left">
                    <p>로고</p>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li className="nav-menu">
                            <Link to="/">홈</Link>
                        </li>
                        <li className="nav-menu">
                            <Link to="/About">회사소개</Link>
                        </li>
                        <li className="nav-menu">
                            <Link to="/Service">서비스</Link>
                        </li>
                        <li className="nav-menu">
                            <Link to="/Contact">견적</Link>
                        </li>
                        <li className="nav-menu">
                            <Link to="/Price">공지사항</Link>
                        </li>
                        {
                            (() => {
                                // 받아온 프롭스로 정보가 있으면 if문 실행
                                // if (user) {
                                if (cureentUser) {
                                    return (
                                        <div className="login_part">
                                            {/**
                                             * @todo 로그아웃버튼 만들기
                                             * @todo 로그아웃 실행 시 홈으로 리다이렉트
                                             */}
                                            <li id="login" className="info">
                                                <Link
                                                    to="/MemberModifiy"
                                                    target="_self"
                                                >
                                                    정보변경
                                                </Link>
                                            </li>
                                            <li id="login">
                                                <Link
                                                    to="/"
                                                    target="_self"
                                                    onClick={onLogout}
                                                >
                                                    로그아웃
                                                </Link>
                                            </li>
                                        </div>
                                    );
                                }
                                //if문이 끝났으니 원래 함수 실행 > 데이터가 없을 경우
                                return (
                                    <div className="login_part">
                                        <li id="login" className="login">
                                            <Link to="/Login" target="_self">
                                                로그인
                                            </Link>
                                        </li>
                                        <li id="login">
                                            <Link to="/Signup" target="_self">
                                                회원가입
                                            </Link>
                                        </li>
                                    </div>
                                );
                            })()
                            // (() => { code })()  / iife 검색
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
