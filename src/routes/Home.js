/** @format */

import React from "react";
import Service from "../Service";
import Slide from "../Slide";
import About from "../About";
import Footer from "../Footer";
import Video from "../assets/videos/mainVideo.mp4";
import "../Home.css";
import Navbar from "../Navbar";

const Home = ({ user, logout }) => {
  return (
    <div>
      {/* 네비게이션 바 */}

      <Navbar user={user} logout={logout} />
      <main>
        <section>
          <div className="main-font">
            <h1>PROFESSIONAL & RELIABLE</h1>
            <h1>building</h1>
            <h1>cleaning</h1>
          </div>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
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
  );
};

export default Home;
