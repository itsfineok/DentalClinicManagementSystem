import './FAQ.css';
import tooth from '../assets/icon-tooth.png';

const placeholderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "

const faqData = [
    {
        title: 'Is this a question?',
        content: placeholderText
    },
    {
        title: 'How do you question yourself?',
        content: placeholderText
    },
    {
        title: 'What are important questions?',
        content: placeholderText
    },
    {
        title: 'What is a question?',
        content: placeholderText
    },
    {
        title: 'Where is the question?',
        content: placeholderText
    },
    {
        title: 'Is this a template?',
        content: placeholderText
    }
];

function FAQ() {
    return (
        <section id="faq-section">
            <div>
                <h2>FAQs</h2>
            </div>
            <div className="faq-items-container">
            {faqData.map((faq, index) => (
                <div className="faq-item-wrapper" key={index}>
                    <img src={tooth} alt="Illustration of a blue-colored tooth" />
                    <h3>{faq.title}</h3>
                    <p>{faq.content}</p>
                </div>
            ))}
            </div>
            <div className="question-form">
                <div>
                    <h3>Still have questions?</h3>
                    <p>Can&apos;t find the answer you&apos;re looking for? Please chat to our team.</p>
                </div>
                <textarea name="" id="" cols="30" rows="1" placeholder="Write something here..."></textarea>
                <button>Get in touch</button>
            </div>
        </section>
    );
};

export default FAQ;