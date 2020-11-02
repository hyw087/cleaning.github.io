import React from 'react';
import Footer from '../Footer';
import '../AboutCustom.css';
// import { Navbar } from 'react-bootstrap';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const AS = () => {
    return (
        <div>
            {/* 네비게이션 바 */}
            <Navbar />

            <main>
                <section>
                    <div className="sub_visual sub_visual07">
                        <div className="inner">
                            <h2>고객지원</h2>
                            <ul className="sub_tab">
                                <li>
                                    <Link to="/AboutCustom">상담문의</Link>
                                </li>
                                <li>
                                    <Link to="/Es">견적신청</Link>
                                </li>
                                <li>
                                    <Link to="/AS">불만접수 및 A/S접수</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="sub_tit">불만접수 및 A/S</h3>

                    <div className="praise_top">
                        <div>
                            <p>
                                서비스에 불만 및 A/S받을 내용에 대해
                                작성해주세요.
                            </p>

                            {/* <li> */}
                            <Link to="">접수하기</Link>
                            {/* </li> */}
                        </div>
                    </div>
                </section>
            </main>
            {/* 푸터 */}
            <Footer />

            {/* <Route path="/" component={Home} exact /> */}
        </div>
    );
};

export default AS;
