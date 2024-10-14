import icon from '/icon.png';
import hamburgerMenu from '../assets/icon-hamburgermenu.svg'
import './Nav.css';

function Nav(){
    return (
    <header>
        <div className="logo">
            <img className="icon" src={icon} alt="M.E. Herrera Logo"/>
            <h3>M.E. <br/>HERRERA</h3>
        </div>
        <nav>
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>SERVICES</li>
                <li>FAQ</li>
                <li><button className="get-started-button">GET STARTED</button></li>
            </ul>
        </nav>
        <button className="hamburger-menu"><img src={hamburgerMenu} alt="Hamburger Menu"/></button>
    </header>);
}

export default Nav;
