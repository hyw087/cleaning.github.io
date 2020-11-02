import React from 'react';
import Footer from '../Footer';
import '../AboutCustom.css';
// import { Navbar } from 'react-bootstrap';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import somelike from '../assets/images/somelike.png';

const AboutCustom = () => {
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

                    <h3 className="sub_tit">상담문의</h3>

                    <div className="something">
                        <img
                            src={somelike}
                            width="600"
                            height="400"
                            border="0"
                            alt=""
                        />

                        <div className="something2">
                            <h1>오전 8시 ~ 오후 10시 (연중무휴)</h1>
                            <h4>
                                서울특별시 강남구 역삼동 819-10 세경빌딩 31층
                            </h4>
                            <p>
                                궁금한 사항이나 문의 사항에 대해 작성해주세요.
                                궁금한 사항 및 상세한 상담은 부담없이
                                전화주세요. 친절히 안내해 드리겠습니다.
                            </p>
                            <p> 5555-7777</p>
                            <div>
                                <Link to="">접수하기</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="something3">
                    <h2>
                        <strong>도움이 필요하신가요?</strong>
                    </h2>

                    <br></br>
                    <br></br>
                    <br></br>

                    <h4>서비스 이용</h4>

                    <details>
                        <summary class="question">
                            Q.코로나 19가 걱정되는데 괜찮을까요?
                        </summary>
                        <p>
                            실시간 체크를 통해 증상이 없는 클리너님들만 활동
                            중이니 안심하세요.
                            <br></br>
                            고객님과 클리너님의 안전한 서비스를 위해 향후 상황
                            변화에 신속하게 대응하겠습니다.
                        </p>
                    </details>
                    <details>
                        <summary class="question">
                            Q. 가사도우미 서비스 종류는 어떤 게 있나요?
                        </summary>
                        <p>
                            1회 청소와 정기 청소 중 선택할 수 있습니다.
                            <br></br>
                            1회 청소는 고객 집에 한 번 방문하여 가정집
                            생활청소를 진행합니다.
                            <br></br>
                            정기 청소는 동일한 클리너가 정기적으로 고객님 댁을
                            방문하는 고객 맞춤형 서비스입니다.
                            <br></br>
                            원하실 경우 클리너는 언제든지 변경할 수 있습니다.
                        </p>
                    </details>
                    <details>
                        <summary class="question">
                            Q. 청소 범위가 궁금해요.
                        </summary>
                        <p>
                            가사도우미 서비스는 일반 가정집 생활청소를
                            제공합니다. (서비스 가능 범위)
                            <br></br>- 거실, 침실의 먼지 제거와 침구 정리
                            <br></br>- 설거지, 주방 청소
                            <br></br>- 욕실, 베란다 물청소
                            <br></br>- 세탁기를 이용한 빨래
                            <br></br>- 정리정돈
                            <br></br>
                            <br></br>
                            (서비스 불가 범위)
                            <br></br>- 아기 돌봄, 간병
                            <br></br>- 입주 빈집, 공사 후 청소
                            <br></br>- 손빨래
                            <br></br>- 바닥 손 걸레질
                            <br></br>- 파손 위험이 있는 그릇정리
                            <br></br>- 손이 닿지 않는 높은 곳 가구 이동, 재배치
                            <br></br>- 소독, 방충
                            <br></br>- 너무 심한 곰팡이, 찌든 때, 기름때
                            <br></br>
                            <br></br>
                            *창문 창틀, 냉장고 청소, 다림질 등 구체적인 사항은
                            실시간 문의를 통해 저희에에 미리 요청해주세요.
                        </p>
                    </details>

                    <details>
                        <summary class="question">
                            Q. 우리 지역에서 클리닝서비스를 이용할 수 있나요?
                        </summary>
                        <p>
                            서울, 경기, 인천, 대전, 부산, 대구, 광주, 울산 전
                            지역과 일부 지역에서 이용 가능합니다.
                            <br></br>
                            <br></br>
                            일부 가능 지역 안내
                            <br></br>
                            경상도 : 창원, 구미, 포항, 경주, 경산
                            <br></br>
                            충청도 : 천안, 아산, 청주, 제천, 충주
                            <br></br>
                            전라도 : 전주, 익산, 군산, 순천, 여수, 목포, 광양
                        </p>
                    </details>

                    <details>
                        <summary class="question">
                            Q. 청소 도구는 무엇을 준비해야 하나요?
                        </summary>
                        <p>
                            소지하고 계신 청소 도구를 사용합니다. 청소에 필요한
                            도구를 준비해주세요.
                            <br></br>
                            <br></br>- 진공 청소기(또는 빗자루)
                            <br></br>- 막대걸레
                            <br></br>- 청소포(막대걸레 부착용)
                            <br></br>- 걸레
                            <br></br>- 고무장갑
                            <br></br>- 세제
                            <br></br>- 세척용품
                            <br></br>- 쓰레기봉투 등
                        </p>
                    </details>

                    <details>
                        <summary class="question">
                            Q. 우리 집에 어떤 분이 방문하나요?
                        </summary>
                        <p>
                            신원 확인과 검증을 마친 클리너가 방문합니다. 고객
                            평가를 통해 검증된 클리너를 배정해드립니다.
                        </p>
                    </details>
                    <details>
                        <summary class="question">
                            Q. 서비스 시간을 추천해 주세요.
                        </summary>
                        <p>
                            클리너 한 분이 방문하여 생활 청소를 진행합니다. 집
                            규모와 청소 상황에 알맞은 서비스 시간을
                            지정해주세요.
                            <br></br>
                            <br></br>- 2시간 : 1인 가구 또는 주 2회 이상 청소 시
                            추천합니다.
                            <br></br>- 3시간 : 주기적으로 청소 시 추천합니다.
                            <br></br>- 4시간 : 기본 서비스 시간으로, 20평 기준
                            주 1회 청소 시 추천합니다.
                            <br></br>- 8시간 : 40평 이상 또는 청소 범위가 많을
                            경우 추천합니다.
                        </p>
                    </details>

                    <details>
                        <summary class="question">
                            Q. 클리너에게 휴식 시간을 드려야 하나요?
                        </summary>
                        <p>
                            6시간 이상 서비스 시에는 보다 원할한 서비스를 위해
                            최소 30분의 식사·휴식시간을 보장해주세요.
                        </p>
                    </details>

                    <details>
                        <summary class="question">
                            Q. 부재중일 때도 서비스가 가능한가요?
                        </summary>
                        <p>
                            웹과 앱 내 실시간 문의로 현관 출입 방법을
                            전달해주세요.
                            <br></br>
                            고객님께서 부재중이시더라도 서비스를 받아보실 수
                            있도록 클리너에게 출입 방법을 안내해드립니다.
                            <br></br>- 고객님께서 집에 계시지 않아도 서비스
                            진행이 가능합니다!
                            <br></br>
                            많은 고객님들이 부재중에도 서비스를 받아보고
                            계십니다. 신원 확인과 검증을 마친 파트너가 방문하니
                            안심하세요.
                            <br></br>- 부재중에 서비스를 받고 싶으신 경우, 예약
                            후 실시간 문의를 통해 출입 방법을 꼭 전달해주세요!
                        </p>
                    </details>

                    <br></br>
                    <br></br>
                    <br></br>

                    <h4>서비스 요금</h4>

                    <details>
                        <summary class="question">
                            Q. 시간을 연장하고 싶어요.
                        </summary>
                        <p>
                            서비스 중 시간 연장은 클리너와 사전 협의해야 하며,
                            클리너의 사정으로 연장이 불가할 수 있습니다.
                            <br></br>
                            필요할 경우 실시간 문의를 통해 알려주세요.
                            <br></br>
                            연장에 따른 추가금은 서비스 지역과 서비스
                            종류(정기/1회)에 따라 다르니 웹과 앱 내 [실시간
                            문의] 통해 문의해주세요.
                        </p>
                    </details>

                    <details>
                        <summary class="question">
                            Q. 클리너에게 식대를 제공해야 하나요?
                        </summary>
                        <p>
                            식사나 식대를 제공하지 않아도 됩니다. 다만 더 원활한
                            서비스를 위해 6시간 이상 서비스 시 최소 30분의
                            식사·휴식시간을 보장해주세요.
                        </p>
                    </details>
                </div>
            </main>

            {/* 푸터 */}
            <Footer />

            {/* <Route path="/" component={Home} exact /> */}
        </div>
    );
};

export default AboutCustom;
