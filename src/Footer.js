import React from 'react'
import '../src/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
    return (
        <div className="footer-contents">
            <footer>
                <div className="footer-contents_f">
                    <p>Cleaning Company</p>
                    <p>Cleaning</p>
                </div>

                <div className="footer-contents_s">
                    <p>서울특별시 강남구 역삼동</p>
                    <p>819-10 세경빌딩 31층</p>
                </div>

                <div className="footer-contents_t">
                    <p>Tel : 02-2362-5923</p>
                    <p>영업시간 : 9am - 7pm</p>
                </div>

                <div className="footer-contents_sf">
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebookF}/></li>
                        <li><FontAwesomeIcon icon={faInstagram}/></li>
                        <li><FontAwesomeIcon icon={faTwitter}/></li>
                    </ul>
                </div>
                {/* sf => second fourth */}
                <div className="footer-contents_ss">
                    {/* Miso 이름 바꿔야함 */}
                    <p> © 2020. Project. Miso, Inc. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default footer
