import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import arrow from '../assets/arrow.png'
import dentures from '../assets/dentures.jpg'

const placeholderDescription =
    `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. 
`

const services = [
    {
        id: 1,
        header: 'Service 1',
        description: placeholderDescription,
    },
    {
        id: 2,
        header: 'Service 2',
        description: placeholderDescription,
    },
    {
        id: 3,
        header: 'Service 3',
        description: placeholderDescription,
    },
    {
        id: 4,
        header: 'Service 4',
        description: placeholderDescription,
    },
];

const Services = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateClass, setAnimateClass] = useState('fade-in');

    // Handle Up button click
    const handleBookClick = () => {
        navigate('/book');
    }
    const handleUpClick = () => {
        setAnimateClass('fade-out');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === 0) {
                    return services.length - 1; // If at first item, loop back to last
                } else {
                    return prevIndex - 1; // Decrement index
                }
            });
            setAnimateClass('fade-in');
        }, 300);
    };

    // Handle Down button click
    const handleDownClick = () => {
        setAnimateClass('fade-out');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === services.length - 1) {
                    return 0; // If at last item, loop back to first
                } else {
                    return prevIndex + 1; // Increment index
                }
            });
            setAnimateClass('fade-in');
        }, 300);
    };

    return (
        <section id="services">
            <div className="services-description-wrapper">
                <div className="services-description">
                    <h1>Dental services for <span>you</span>.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        llamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. </p>
                    <img src={dentures} alt="Dentures" />
                </div>
            </div>
            <div className="slider-container">
                <button className="arrow up-arrow" onClick={handleUpClick}>
                    <img src={arrow} alt="Up Arrow" />
                </button>

                <div className={`service-content ${animateClass}`}>
                    <h2>{services[currentIndex].header}</h2>
                    <p>{services[currentIndex].description}</p>
                    <button onClick={handleBookClick}>Book Now!</button>
                </div>

                <button className="arrow down-arrow" onClick={handleDownClick}>
                    <img src={arrow} alt="Down Arrow" />
                </button>
            </div>
        </section>
    );
};

export default Services;


