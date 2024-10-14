import myImage from '/icon.png';
import './Nav.css';

function Nav(){
    return (
    <header>
        <div className="logo">
            <img src={myImage} alt="M.E. Herrera Logo"/>
            <h3>M.E. <br/>HERRERA</h3>
        </div>
        <nav>
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>SERVICES</li>
                <li>FAQ</li>
                <li><button>GET STARTED</button></li>
            </ul>
        </nav>
    </header>);
}

export default Nav;
