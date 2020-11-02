import React, { useState } from 'react'
import {Link, Route, Router} from 'react-router-dom';
import '../src/Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <nav>
                <div className="navbar-left">
                    <p>로고</p>
                </div>
                <div className="navbar-right">
                <ul>
                    <li className="nav-menu"> <Link to="/">Home</Link>
                    </li>
                    <li className="nav-menu"><Link to="/CompanyInfo">About</Link></li>
                    <li className="nav-menu"><Link to="/Service">Service</Link></li>
                    <li className="nav-menu"><Link to="/AboutCustom">Contact</Link></li>
                    <li className="nav-menu"><Link to="/Price">Price</Link></li>
                    <li id="login"><Link to="/Login" target="_self">LogIn</Link></li>
                    <li id="login"><Link to="/Signup" target="_self">SignUp</Link></li>
                </ul>
                </div>    
            </nav>
        </header>
    )
}

export default Navbar;