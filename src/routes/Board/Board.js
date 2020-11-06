import React, { useEffect, useState } from 'react';
import '../../Board.css';

import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import BoardInfo from './BoardInfo';

const Board = () => {
    // 검색기능
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedKey, setSelectedKey] = useState(-1);

    const boards = [
        {
            id: 1,
            title: '프로젝트 홈페이지가 오픈되었습니다.',
            date: '2019.12.23',
            views: '509',
        },

        {
            id: 2,
            title: '프로젝트 홈페이지 리뉴얼',
            date: '2020.06.29',
            views: '106',
        },
        {
            id: 3,
            title: '코로나19 관련 안내사항',
            date: '2020.02.25',
            views: '296',
        },
        {
            id: 4,
            title: '프로젝트 사업장 클리닝 서비스 영역 추가',
            date: '2020.02.12',
            views: '327',
        },
    ];

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClick = (key) => {
        setSelectedKey(key);
    };
    console.log(selectedKey + 1);

    useEffect(() => {
        const items = boards.filter((data) => {
            if (searchTerm === null) {
                return data;
            } else if (data.title.toLowerCase().includes(searchTerm)) {
                return data;
            }
        });
        setSearchResults(items);
    }, [searchTerm]);

    // const items = boards.filter((data) => {
    //     if (searchTerm === null) {
    //         return data;
    //     } else if (data.title.toLowerCase().includes(searchTerm)) {
    //         return data;
    //     }
    // });
    // console.log(items);

    const listItem = searchResults.map((board, i) => {
        return (
            <BoardInfo
                key={i}
                board={board}
                onClick={() => {
                    handleClick(i);
                }}
            />
        );
    });
    return (
        <>
            <Navbar />
            <div className="sub_visual sub_visual06">
                <div className="inner">
                    <h2>공지사항</h2>
                    <ul className="sub_tab">
                        <li className="on">
                            <Link to="/Board">공지사항</Link>
                        </li>

                        <li>
                            <Link to="/QnA">Q & A</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="inner_search">
                <form id="searchForm" name="searchForm" className="search_form">
                    <input type="hidden" name="bs_code" value="board1" />
                    <input type="hidden" name="page" value="1" />
                    <select name="keyword_option" id="keyword_option">
                        <option value="b_total">전체</option>
                        <option value="b_title">제목</option>
                        <option value="b_text">내용</option>
                    </select>
                    <input
                        type="text"
                        className="input_search"
                        name="keyword"
                        id="keyword"
                        onChange={handleChange}
                        value={searchTerm}
                    />
                    <button type="submit" onClick={searchResults}>
                        검색
                    </button>
                </form>
                <p className="table_num">
                    <span>{listItem.length}</span>건
                </p>

                {/* 공지사항 리스트 */}
                <table className="table_list">
                    <tbody>{listItem}</tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};
export default Board;
