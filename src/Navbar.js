import React from 'react';
import {Link} from 'react-router-dom';
import '../src/Navbar.css';

const Navbar = ({user}) => {
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
                    <li className="nav-menu"><Link to="/Service">Service</Link></li>
                    <li className="nav-menu"><Link to="/Contact">Contact</Link></li>
                    <li className="nav-menu"><Link to="/Price">Price</Link></li>
                    {
                        (() => {
                            // 받아온 프롭스로 정보가 있으면 if문 실행
                            if (user) {
                                return (
                                    <>
                                    {/**
                                     * @todo 로그아웃버튼 만들기
                                     * @todo 로그아웃 실행 시 홈으로 리다이렉트 
                                    */}
                                        <li id="login"><Link to="/Login" target="_self">Info</Link></li>
                                        <li id="login"><Link to="/Signup" target="_self">Logout</Link></li>
                                    </>
                                )
                            }
                            //if문이 끝났으니 원래 함수 실행 > 데이터가 없을 경우 
                            return (
                                <>
                                    <li id="login"><Link to="/Login" target="_self">LogIn</Link></li>
                                    <li id="login"><Link to="/Signup" target="_self">SignUp</Link></li>
                                </>
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