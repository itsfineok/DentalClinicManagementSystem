import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-link-container">
                <div className="column">
                    <p>Patient Information</p>
                    <ul>
                        <li>About Us</li>
                        <li>FAQS</li>
                        <li>Customer Feedbacks</li>
                    </ul>
                </div>
                <div className="column">
                    <p>Services</p>
                    <ul>
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                        <li>Service 4</li>
                        <li>Service 5</li>
                    </ul>
                </div>
                <div className="column">
                    <p>Legal</p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Insurance</li>
                    </ul>
                </div>

                <div className="column">
                    <p>Contact Us</p>
                    <ul>
                        <li>100 Sample Street <br />
                            2nd Floor <br />
                            Sample City, 10001</li>
                        <li>123456789</li>
                        <li>info@sample.com</li>
                    </ul>
                </div>
            </div>
        </footer>);
}

export default Footer;