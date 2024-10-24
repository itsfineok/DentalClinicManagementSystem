import Nav from '../components/Nav.jsx';
import LoginForm from '../components/LoginForm.jsx';
import Footer from '../components/Footer.jsx';
import '../components/nav-simplify.css'

function Login() {
    return (
        <>  
            <div className="nav-trimmer">
                <Nav/>
            </div>
            <LoginForm/>
            <Footer />
        </>
    );
}

export default Login;