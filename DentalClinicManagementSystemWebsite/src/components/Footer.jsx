import './Footer.css';
import mailIcon from '../assets/icon-mail.png';
import phoneIcon from '../assets/icon-phone.png';

function Footer() {
    return (
        <footer>
            <div className="footer-link-container">
                <div>
                    <p>Patient <br/>Information</p>
                    <ul>
                        <li>About Us</li>
                        <li>FAQS</li>
                        <li>Customer Feedbacks</li>
                    </ul>
                </div>
                <div>
                    <p>Services</p>
                    <ul>
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                        <li>Service 4</li>
                        <li>Service 5</li>
                    </ul>
                </div>
                <div>
                    <p>Legal</p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Insurance</li>
                    </ul>
                </div>

                <address>
                    <p>Contact Us</p>
                    <ul>
                        <li>100 Sample Street <br />
                            2nd Floor <br />
                            Sample City, 10001</li>
                        <li className="icon-with-text"><img src={phoneIcon} alt="Telephone"/>123456789</li>
                        <li className="icon-with-text"><img src={mailIcon} alt="Mail"/>info@sample.com</li>
                    </ul>
                </address>
            </div>
        </footer>);
}

export default Footer;