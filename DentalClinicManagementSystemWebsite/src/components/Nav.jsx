import Cookies from 'js-cookie'; // Import js-cookie to manage cookies
import icon from '/icon.png';
import hamburgerMenu from '../assets/icon-hamburgermenu.svg'
import './Nav.css';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Nav() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the hamburger menu visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check if user is logged in

  useEffect(() => {
    // Check for user cookies when component mounts
    const firstName = Cookies.get('firstName');
    const surname = Cookies.get('surname');
    const email = Cookies.get('email');
    const phone = Cookies.get('phone');

    // If cookies exist, set the user as logged in
    if (firstName && surname && email && phone) {
      setIsLoggedIn(true);
    }
  }, []); // Empty array ensures this runs only on component mount

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignOut = () => {
    // Remove cookies and refresh the page on sign out
    Cookies.remove('firstName');
    Cookies.remove('surname');
    Cookies.remove('email');
    Cookies.remove('phone');
    window.location.reload();
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleIconClick = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state when hamburger is clicked
  };

  return (
    <header id="header-section">
      <div className="logo" onClick={handleIconClick}>
        <img className="icon" src={icon} alt="M.E. Herrera Logo" />
        <h3>M.E. <br />HERRERA</h3>
      </div>
      <nav className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
        <ul>
          <li onClick={handleHomeClick}>HOME</li>
          <li><a href="#about-us">ABOUT US</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#faq-section">FAQ</a></li>
          <li>
            {/* Conditional rendering based on login status */}
            {isLoggedIn ? (
              <button className="sign-out-button" onClick={handleSignOut}>SIGN OUT</button>
            ) : (
              <button className="get-started-button" onClick={handleLoginClick}>GET STARTED</button>
            )}
          </li>
        </ul>
      </nav>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <img src={hamburgerMenu} alt="Hamburger Menu" />
      </button>
    </header>
  );
}

export default Nav;

