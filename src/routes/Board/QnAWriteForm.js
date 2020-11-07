import { Link } from '@material-ui/core';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../css/QnAWriteForm.css';
import { useHistory } from 'react-router-dom';

const QnAWriteForm = () => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [titls, settitle] = useState('');
    const [edit, setEdit] = useState('');
    const [password, setPassword] = useState('');

    const onchangePhone = (e) => {
        setPhone(e.target.value);
    };
    const onchangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onchangeTitle = (e) => {
        settitle(e.target.value);
    };
    const onchangeEdit = (e) => {
        setEdit(e.target.value);
    };
    const onchangePassword = (e) => {
        setPassword(e.target.value);
    };

    console.log(phone, email, titls, edit, password);
    const history = useHistory();
    const onClickBtn = () => {
        alert('완료되었습니다.');
        history.push('/QnA');
    };
    return (
        <>
            <Navbar />
            <div className="sub_visual sub_visual06">
                <div className="inner">
                    <h2>Q & A</h2>
                    <ul className="sub_tab">
                        <li>
                            <Link to="/Board">공지사항</Link>
                        </li>

                        <li className="on">
                            <Link to="/QnA">Q & A</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <h3 className="qna_tit">칭찬코너</h3>

            <p className="qna_txt">
                '프로젝트 서비스를 이용해 주셔서 감사합니다. '
            </p>
            <div className="QnA_write_form write_praise">
                <div className="row">
                    <label htmlFor="wirte_phone" className="label">
                        연락처 *
                    </label>
                    <div className="input_box phone">
                        <div className="phone_input">
                            <input
                                type="tel"
                                name="b_Mobil1"
                                value=""
                                maxLength="3"
                                onChange={onchangePhone}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="wirte_email" className="label">
                        E-Mail *
                    </label>
                    <div className="input_box email">
                        <div className="email_input">
                            <input
                                type="text"
                                name="b_email"
                                value=""
                                maxLength="50"
                                onChange={onchangeEmail}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="wirte_title" className="label">
                        제목 *
                    </label>
                    <div className="input_box title">
                        <input
                            type="text"
                            name="b_title"
                            maxLength="100"
                            onChange={onchangeTitle}
                        />
                    </div>
                </div>
                <div className="row contents">
                    <label htmlFor="wirte_edit" className="label">
                        내용 *
                    </label>
                    <div className="input_box">
                        <textarea
                            className="ckeditor"
                            id="b_text"
                            name="b_text"
                            onChange={onchangeEdit}
                        ></textarea>
                    </div>
                </div>

                <div className="row">
                    <label htmlFor="wirte_password" className="label">
                        비밀번호 *
                    </label>
                    <div className="input_box password">
                        <input
                            type="password"
                            name="b_pass"
                            maxLength="4"
                            onChange={onchangePassword}
                        />
                        <span className="pass_chk">
                            숫자 네자리를 입력하세요.
                        </span>
                    </div>
                </div>
            </div>
            <div className="btn_box">
                <div>
                    <button
                        type="button"
                        className="btn_list"
                        onClick={onClickBtn}
                    >
                        확인
                    </button>
                </div>
            </div>
        </>
    );
};

export default QnAWriteForm;
