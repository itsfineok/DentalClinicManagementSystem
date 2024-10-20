import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Landing from '../components/Landing.jsx';
import AboutUs from '../components/AboutUs.jsx';
import Services from '../components/Services.jsx';
import Reviews from '../components/Reviews.jsx';
import FAQ from '../components/FAQ.jsx';

import '../index.css';

function Home() {

  return (
    <>
      <Nav/>
      <Landing/>
      <AboutUs/>
      <Services/>
      <Reviews/>
      <FAQ/>
      <Footer/>
    </>
  );
  }

export default Home;