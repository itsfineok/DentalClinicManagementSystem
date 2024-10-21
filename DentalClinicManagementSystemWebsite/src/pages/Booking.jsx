
import AppointmentForm from '../components/AppointmentForm.jsx';
import Footer from '../components/Footer.jsx';
import Nav from '../components/Nav.jsx';


function Booking() {

  return (
    <>  
        <div className='nav-trimmer'>
            <Nav/>
        </div>
        <AppointmentForm/>
        <Footer/>
    </>
  );
  }

export default Booking;