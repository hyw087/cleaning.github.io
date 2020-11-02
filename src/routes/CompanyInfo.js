import React from 'react';
import Footer from '../Footer';
import unnamed from '../assets/images/unnamed.jpg';
import happiness_img01 from '../assets/images/happiness_img01.png';
import happiness_img02 from '../assets/images/happiness_img02.png';
import happiness_img03 from '../assets/images/happiness_img03.png';
import promise_icon01 from '../assets/images/promise_icon01.png';
import promise_icon02 from '../assets/images/promise_icon02.png';
import promise_icon03 from '../assets/images/promise_icon03.png';
import bi_icon05 from '../assets/images/bi_icon05.png';
import bi_icon04 from '../assets/images/bi_icon04.jpg';
import bi_icon01 from '../assets/images/bi_icon01.png';
import bi_icon02 from '../assets/images/bi_icon02.png';
import bi_icon03 from '../assets/images/bi_icon03.png';
import '../CompanyInfo.css';

// import { Navbar } from 'react-bootstrap';
import Navbar from '../Navbar';

const CompanyInfo = () => {
    return (
        <div>
            {/* 네비게이션 바 */}
            <Navbar />

            <main>
                <section>
                    <div id="A_Container_Wrap">
                        <div className="sub_visual sub_visual01">
                            <div className="con_Box">
                                <h2>BUILDING CLEANING</h2>
                            </div>
                        </div>
                        <div className="con_Box">
                            <h3 className="sub_tit">회사소개</h3>

                            <div className="pro">
                                <div className="img_boxes">
                                    <img
                                        src={unnamed}
                                        width="1200"
                                        height="500"
                                        border="0"
                                        alt=""
                                    />
                                </div>

                                <div className="intro">
                                    <div className="txt_area">
                                        <p>
                                            고객 여러분 안녕하십니까?
                                            <br />
                                            <br />
                                            저희 제일종합관리서비스는 2000년
                                            제일안전서비스로 창사한 이래 20년간
                                            교보생명 전사옥을 비롯하여 전국 주요
                                            오피스빌딩 100여 개의 보안, 안내,
                                            미화, 주차, 신변보호 부문을 전담,
                                            지원하는 시설관리 전문기업입니다.
                                            <br />
                                            <br />
                                            최근에는 건물미화관리 품질과 서비스
                                            수준을 평가하는 척도인
                                            미화산업국제표준(CIMS) 인증을
                                            세계청결산업협회(ISSA)로부터
                                            획득하였으며, 2020년에는 20년간
                                            축적된 빌딩관리 고객서비스의
                                            노하우를 바탕으로 하루가 다르게
                                            변하는 트렌드와 시대의 변화에
                                            대처하기 위해 홈클리닝 사업에
                                            진출함으로써 개인 고객에게도
                                            고품질의 서비스를 제공하게
                                            되었습니다.
                                            <br />
                                            <br />
                                            깨끗한 세상을 위한 걸음에 앞장서며
                                            고객감동을 위한 변화와 혁신을
                                            실행하는 기업 제일종합관리서비스는
                                            언제나 여러분 곁에 함께하겠습니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pro_area">
                                <p>
                                    <strong>
                                        홈클리닝! 이제는 전문가가 필요한
                                        때입니다.
                                    </strong>
                                </p>
                                <p>
                                    <br />
                                    "내 집처럼 꼼꼼하게 확실히 청소한다" 라는
                                    전문성을 지닌 가치와 철학을 추구합니다.
                                </p>
                            </div>
                            <div className="happiness_area">
                                <strong>Add to your daily happiness</strong>
                                <ul>
                                    <li>
                                        <div className="img_box">
                                            <img src={happiness_img01} />
                                            <strong>Professional</strong>
                                        </div>
                                        <div className="txt_box">
                                            <p>
                                                전문교육과 경험으로 쌓은 노하우,
                                                자신있는 청소 전문가
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img_box">
                                            <img src={happiness_img02} />
                                            <strong>Smart</strong>
                                        </div>
                                        <div className="txt_box">
                                            <p>
                                                빠르고 정확하게 고객과 소통하는
                                                똑똑한 기업
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img_box">
                                            <img src={happiness_img03} />
                                            <strong>Trust</strong>
                                        </div>
                                        <div className="txt_box">
                                            <p>
                                                친환경 세제 사용, 파손보험,
                                                불만족 시 재방문, 신뢰할 수 있는
                                                기업
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="promise_area">
                                <h4 className="con_tit"> 세가지 약속</h4>
                                <ul>
                                    <li>
                                        <div className="img_box">
                                            <img src={promise_icon01} />
                                        </div>
                                        <div className="txt_box">
                                            <strong>하나</strong>
                                            <p>
                                                전문적인 클리닝 서비스로 우리 집
                                                환경을 바꾸겠습니다.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img_box">
                                            <img src={promise_icon02} />
                                        </div>
                                        <div className="txt_box">
                                            <strong>둘</strong>
                                            <p>
                                                적극적인 모니터링과 소통으로
                                                고객님의 목소리에 귀
                                                기울이겠습니다.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img_box">
                                            <img src={promise_icon03} />
                                        </div>
                                        <div className="txt_box">
                                            <strong>셋</strong>
                                            <p>
                                                한번으로 끝나지 않는, 우리 집
                                                파트너가 되겠습니다.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="big_img">
                                <img src={bi_icon05} />
                            </div>

                            <div className="bi_area">
                                <h4 className="con_tit">BI 소개</h4>
                                <div className="con_box">
                                    <img
                                        src={bi_icon04}
                                        width="700"
                                        height="500"
                                        border="0"
                                        alt=""
                                    />

                                    <ul className="bi_txt">
                                        <li>
                                            <div className="img_box">
                                                <img src={bi_icon01} />
                                            </div>
                                            <div className="txt_box">
                                                <strong>ALL SPACE</strong>
                                                <p>
                                                    사람과 공간이 조화롭게
                                                    공존할 수 있도록 깨끗한
                                                    공간에서 건강한 생활을
                                                    만들겠습니다.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img_box">
                                                <img src={bi_icon02} />
                                            </div>
                                            <div className="txt_box">
                                                <strong>CHECK</strong>
                                                <p>
                                                    가족을 비롯해 같은 공간을
                                                    공유하고 있는 모든 사람의
                                                    안전을 책임지겠습니다.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img_box">
                                                <img src={bi_icon03} />
                                            </div>
                                            <div className="txt_box">
                                                <strong>BLUE BIRD</strong>
                                                <p>
                                                    쾌적한 공간을 만들기 위한
                                                    차별화된 서비스로 최선을
                                                    다해 고객감동을
                                                    추구하겠습니다.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* 푸터 */}
            <Footer />

            {/* <Route path="/" component={CompanyInfo} exact /> */}
        </div>
    );
};

export default CompanyInfo;
