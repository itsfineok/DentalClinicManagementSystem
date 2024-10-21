import Star from './Star.jsx'; // Import the Star component
import './Reviews.css';
import Reviewer1 from '../assets/reviewer1.png'; // Example image paths
import Reviewer2 from '../assets/reviewer2.png'; // Replace with actual image paths
import Reviewer3 from '../assets/reviewer3.png'; // Replace with actual image paths

const Reviews = () => {
  const rating1 = 4; // Set the rating (number of filled stars)
  const rating2 = 5;

  return (
    <section id="reviews">
    <h1>Our client&apos;s success story says it all.</h1>
      <div className="scroll-container">
        <div className="scroll-content">
          <div className="scroll-item">
            <img src={Reviewer1} alt="Placeholder Person" />
            <p>The staff is fantastic with children and takes extra care to make them feel at ease. Highly recommended for families</p>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <Star key={index} filled={index < rating1} />
              ))}
            </div>
          </div>
          <div className="scroll-item">
            <img src={Reviewer2} alt="Placeholder Person" />
            <p>Great experience every time—my smile has never been better!</p>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <Star key={index} filled={index < rating2} />
              ))}
            </div>
          </div>
          <div className="scroll-item">
            <img src={Reviewer3} alt="Placeholder Person" />
            <p>I’m always impressed by their professionalism and warmth. I leave every time feeling well-cared for and confident in my smile!</p>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <Star key={index} filled={index < rating2} />
              ))}
            </div>
          </div>
          <div className="scroll-item">
            <img src={Reviewer1} alt="Placeholder Person" />
            <p>The staff is fantastic with children and takes extra care to make them feel at ease. Highly recommended for families</p>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <Star key={index} filled={index < rating1} />
              ))}
            </div>
          </div>
          <div className="scroll-item">
            <img src={Reviewer2} alt="Placeholder Person" />
            <p>Great experience every time—my smile has never been better!</p>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <Star key={index} filled={index < rating2} />
              ))}
            </div>
          </div>
          <div className="scroll-item">
            <img src={Reviewer3} alt="Placeholder Person" />
            <p>I’m always impressed by their professionalism and warmth. I leave every time feeling well-cared for and confident in my smile!</p>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <Star key={index} filled={index < rating2} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
