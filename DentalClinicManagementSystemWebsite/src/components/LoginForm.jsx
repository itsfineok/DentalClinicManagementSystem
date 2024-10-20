import './LoginForm.css';

const LoginForm = () => {
  const loginWithFacebook = () => {
    // Implement Facebook login logic here
    console.log('Login with Facebook');
  };

  const loginWithGoogle = () => {
    // Implement Google login logic here
    console.log('Login with Google');
  };

  return (
    <main>
      <div className="login-container">
        <h2>Login</h2>
        <form action="/login" method="POST">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="login-options">
          <div className="checkbox">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="social-login">
          <button type="button" onClick={loginWithFacebook}>Login with Facebook</button>
          <button type="button" onClick={loginWithGoogle}>Login with Google</button>
        </div>

        <div className="form-footer">
          <p>Don't have an account? <a href="/signup">Sign up here</a></p>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
