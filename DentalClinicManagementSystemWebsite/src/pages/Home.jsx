import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Landing from '../components/Landing.jsx';
import AboutUs from '../components/AboutUs.jsx';
import Services from '../components/Services.jsx';
import Reviews from '../components/Reviews.jsx';
import FAQ from '../components/FAQ.jsx';
import '../components/login-popup.css';
import '../components/Background.css';

import '../index.css';

function Home() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const [firstName, setFirstName] = useState(''); // State to store user's first name

  useEffect(() => {
    // Check for the 'firstName' cookie when the component mounts
    const userFirstName = Cookies.get('firstName');

    if (userFirstName) {
      setFirstName(userFirstName); // Set the first name state
      setShowPopup(true); // Show the popup
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false); // Hide the popup when the user closes it
  };

  const goToBooking = () => {
    navigate('/book');
  }

  return (
    <>
      <Nav />
      <Landing />
      <AboutUs />
      <Services />
      <Reviews />
      <FAQ />
      <Footer />
      {/* Conditionally render the popup if showPopup is true */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <h3>Welome {firstName}!</h3>
            <p>Would you like to book an appointment now?</p>
            <div>
              <button onClick={closePopup} className="booking-no">No</button>
              <button onClick={goToBooking} className="booking-yes">Yes</button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Home;