import Nav from '../components/Nav.jsx';
import SignupForm from '../components/SignupForm.jsx';
import Footer from '../components/Footer.jsx';
import '../components/nav-simplify.css'

function Signup() {
    return (
        <>
            <div className="nav-trimmer">
                <Nav/>
            </div>
            <SignupForm/>
            <Footer />
        </>
    );
}

export default Signup;