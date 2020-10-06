import React from 'react'
import { Link } from 'react-router-dom'
import Service from '../Service';
import Slide from '../Slide'
import About from '../About'
import Footer from '../Footer';
import Video from '../assets/videos/mainVideo.mp4'
import '../Home.css';

const Home = () => {
  return (
    <div>
      {/* 네비게이션 바
      <Navbar /> */}
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
                        <li id="login"><Link to="/Signup" target="_blank">SignUp</Link></li>
                    </ul>
                  </div>    
              </nav>
          </header>
      <main>
        <section>
          <div className="main-font">
            <h1>PROFESSIONAL & RELIABLE</h1>
            <h1>building</h1>
            <h1>cleaning</h1>
          </div>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4"/>
          </video>
          <div className="bgWith"></div>
        </section>  
        {/* 회사소개 */}
        <About />
        {/* 기관 설명 */}
        <Service />
        {/* 슬라이드 바 */}
        <Slide />
      </main>
      {/* 푸터 */}
      <Footer />

      {/* <Route path="/" component={Home} exact /> */}
    </div>
  )
}

export default Home
