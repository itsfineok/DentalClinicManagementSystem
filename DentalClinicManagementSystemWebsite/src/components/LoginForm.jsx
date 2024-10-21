import { useState } from 'react';
import Cookies from 'js-cookie';
import './LoginForm.css';
import loadingBar from '../assets/loading-bar.gif';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  // State to handle form inputs and loading state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsLoading(true); // Set loading to true

    // Prepare the payload
    const payload = {
      email,
      password,
      rememberMe,
    };

    try {
      // Send POST request to the server
      const response = await fetch('https://dcmsnodeserver-dyetgpgqf6f6cydd.southeastasia-01.azurewebsites.net/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Check if login was successful
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful');
        Cookies.set('firstName', data.firstName, { expires: 1 });
        Cookies.set('surname', data.surname, { expires: 1 });
        Cookies.set('email', data.email, { expires: 1 });
        Cookies.set('phone', data.phone, { expires: 1 });
        navigate('/');
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred during login', error);
    } finally {
      setIsLoading(false); // Set loading to false after the request
    }
  };

  const loginWithFacebook = () => {
    console.log('Login with Facebook');
  };

  const loginWithGoogle = () => {
    console.log('Login with Google');
  };

  return (
    <main>
      <div className="login-container">
        <div className="login-center">
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="login-options">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div className="forgot-password">
                <a href="/forgot-password">Forgot password?</a>
              </div>
            </div>
            {/* Display loading bar if isLoading is true, otherwise show the button */}
            {isLoading ? (
              <div className="loading-bar">
                <img src={loadingBar} alt="Loading..." />
              </div>
            ) : (
              <button type="submit">Login</button>
            )}
          </form>
          <p>OR WITH</p>
          <div className="social-login">
            <button type="button" onClick={loginWithFacebook}>Login with Facebook</button>
            <button type="button" onClick={loginWithGoogle}>Login with Google</button>
          </div>
          <div className="form-footer">
            <p>Don&apos;t have an account?<a onClick={handleSignupClick}> Sign up here</a></p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;


