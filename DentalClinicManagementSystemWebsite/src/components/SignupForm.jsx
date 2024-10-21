import './SignupForm.css';
import { useState } from 'react';
import loadingBar from '../assets/loading-bar.gif';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        email: '',
        password: '',
        phone: '',
        confirmPassword: ''
    });

    const [otp, setOtp] = useState('');
    const [showOtpPopup, setShowOtpPopup] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [tempRegistrationData, setTempRegistrationData] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // New loading state

    const handleLoginClick = () => {
        navigate('/login');
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        const { confirmPassword, ...dataToSend } = formData;
        setIsLoading(true); // Set loading state to true

        try {
            const response = await fetch('https://dcmsnodeserver-dyetgpgqf6f6cydd.southeastasia-01.azurewebsites.net/register-patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();

            if (response.ok) {
                setShowOtpPopup(true);
                setUserEmail(formData.email);
                setTempRegistrationData(dataToSend);
                alert('Signup successful! Please check your email for OTP.');
            } else {
                alert('Signup failed: ' + result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    const handleOTPSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://dcmsnodeserver-dyetgpgqf6f6cydd.southeastasia-01.azurewebsites.net/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userEmail,
                    otp,
                    registrationData: tempRegistrationData
                }),
            });

            const result = await response.json();

            if (response.ok) {
                alert('OTP verified! Your account has been registered successfully.');
                setShowOtpPopup(false);
            } else {
                alert('OTP verification failed: ' + result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <>
            {showOtpPopup && (
                <div className="otp-popup">
                    <form onSubmit={handleOTPSubmit}>
                        <label htmlFor="otp">Please enter the code sent to your email</label>
                        <input
                            type="text"
                            id="otp"
                            name="otp"
                            value={otp}
                            onChange={handleOtpChange}
                        />
                        <button type="submit">Verify OTP</button>
                    </form>
                </div>
            )}
                <main className="signup-form">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="signup-name">
                            <label htmlFor="firstName">First Name</label>
                            <label htmlFor="surname">Last Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                required
                            />
                            
                        </div>
                        <div>
                            
                            
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            {isLoading ? (
                                <img src={loadingBar} alt="Loading..." />
                            ) : (
                                <button type="submit">Sign Up</button>
                            )}
                        </div>

                    </form>
                    <p>
                        Already have an account? <a onClick={handleLoginClick}>Login</a>
                    </p>
                </main>
        </>
    );
}

export default SignupForm;
