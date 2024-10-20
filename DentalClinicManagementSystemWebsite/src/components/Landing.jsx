import './Landing.css';
import {useNavigate} from 'react-router-dom';

function Landing() {
const navigate = useNavigate(); // useNavigate hook

const handleBookingClick = () => {
    navigate('/book'); // Programmatically navigate to /book
 };
    return (
        <section id="landing-section">
            <div className="hero-text">
                <h1>
                    Be confidently<br/>
                    beautiful with<br/>
                    a <span>smile</span>.
                </h1>

                <button onClick={handleBookingClick}>Book Now!</button>
            </div>
            <div className="parent">
                <div className="child"></div>
            </div>
        </section>);
}

export default Landing;