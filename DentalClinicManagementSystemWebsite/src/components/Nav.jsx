import icon from '/icon.png';
import hamburgerMenu from '../assets/icon-hamburgermenu.svg'
import './Nav.css';
import {useNavigate} from 'react-router-dom';

function Nav(){
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login'); 
     };
    const handleHomeClick = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }
    const handleIconClick = () => {
        navigate('/');
    }
    return (
    <header id="header-section">
        <div className="logo" onClick={handleIconClick}>
            <img className="icon" src={icon} alt="M.E. Herrera Logo"/>
            <h3>M.E. <br/>HERRERA</h3>
        </div>
        <nav>
            <ul>
                <li onClick={handleHomeClick}>HOME</li>
                <li><a href="#about-us">ABOUT US</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#faq-section">FAQ</a></li>
                <li><button className="get-started-button" onClick={handleLoginClick}>GET STARTED</button></li>
            </ul>
        </nav>
        <button className="hamburger-menu"><img src={hamburgerMenu} alt="Hamburger Menu"/></button>
    </header>);
}

export default Nav;
