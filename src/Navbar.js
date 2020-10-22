import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../src/Navbar.css';



const Navbar = ({user, logout}) => {
    const history = useHistory();
    const onLogout = () => {
        logout();
        history.push("/");
    }
    return (
        <header className="navbar">
            <nav>
                <div className="navbar-left">
                    <p>로고</p>
                </div>
                <div className="navbar-right">
                <ul>
                    <li className="nav-menu">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-menu"><Link to="/About">About</Link></li>
                    <li className="nav-menu"><Link to="/DetailService">Service</Link></li>
                    <li className="nav-menu"><Link to="/Contact">Contact</Link></li>
                    <li className="nav-menu"><Link to="/Price">Price</Link></li>
                    {
                        (() => {
                            // 받아온 프롭스로 정보가 있으면 if문 실행
                            if (user) {
                                return (
                                    <div className="login_part">
                                    {/**
                                     * @todo 로그아웃버튼 만들기
                                     * @todo 로그아웃 실행 시 홈으로 리다이렉트 
                                    */}
                                        <li id="login" className="info"><Link to="/MemberModifiy" target="_self">Info</Link></li>
                                        <li id="login"><Link to="/" target="_self" onClick={onLogout}>Logout</Link></li>
                                    </div>
                                )
                            }
                            //if문이 끝났으니 원래 함수 실행 > 데이터가 없을 경우 
                            return (
                                <div className="login_part">
                                    <li id="login" className="login"><Link to="/Login" target="_self">LogIn</Link></li>
                                    <li id="login"><Link to="/Signup" target="_self">SignUp</Link></li>
                                </div>
                            )
                        })()
                        // (() => { code })()  / iife 검색
                    }
                </ul>
                </div>    
            </nav>
        </header>
    )
}

export default Navbar;