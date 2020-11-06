import React from 'react';

const QnAInfo = ({ key, QnA, onClick }) => {
    return (
        <tr onClick={onClick}>
            <td>{QnA.id}</td>
            <td className="tit">{QnA.title}</td>
            <td>{QnA.date}</td>
            <td>{QnA.views}</td>
        </tr>
    );
};

export default QnAInfo;
