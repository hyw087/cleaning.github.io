import React from 'react';
import { Link } from 'react-router-dom';

const BoardInfo = ({ key, board, onClick }) => {
    return (
        <tr onClick={onClick}>
            <td>{board.id}</td>
            <td className="tit">
                <Link>{board.title}</Link>
            </td>
            <td>{board.date}</td>
            <td>{board.views}</td>
        </tr>
    );
};

export default BoardInfo;
