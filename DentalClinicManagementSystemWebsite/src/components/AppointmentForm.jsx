import React, { useState } from "react";
import './AppointmentForm.css'

function AppointmentForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        email: "",
        phone: "",
        hasVisitedBefore: "0", // Default to "No"
        dentist: "1", // Default to first dentist
        serviceRequested: "",
        appointmentDate: "",
        appointmentTime: "123123",
        additionalMessage: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the page from reloading
        console.log(formData);
        // Send the data to the server using fetch
        try {
            const response = await fetch('https://dcmsnodeserver-dyetgpgqf6f6cydd.southeastasia-01.azurewebsites.net/submit-appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // send form data as JSON
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <main>
            <h2>APPOINTMENT APPLICATION FORM</h2>
            <form id="appointmentForm" onSubmit={handleSubmit}>
                <div className="booking-name">
                    <div>
                        <label htmlFor="firstName">Patient Name*</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
                    </div>
                    <div>
                        <label htmlFor="surname">Surname</label>
                        <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} placeholder="Surname" required />
                    </div>
                </div>

                <div>
                    <label>Have you visited before?</label>
                    <div>
                        <input type="radio" id="visitedYes" name="hasVisitedBefore" value="1" checked={formData.hasVisitedBefore === "1"} onChange={handleChange} />
                        <label htmlFor="visitedYes">Yes</label>
                        <input type="radio" id="visitedNo" name="hasVisitedBefore" value="0" checked={formData.hasVisitedBefore === "0"} onChange={handleChange} />
                        <label htmlFor="visitedNo">No</label>
                    </div>
                </div>

                <label htmlFor="dentist">With whom is this appointment for?</label>
                <select id="dentist" name="dentist" value={formData.dentist} onChange={handleChange} required>
                    <option value="1">Dr. Arpilleda</option>
                    <option value="2">Dr. Collantes</option>
                    <option value="3">Dr. Dolim</option>
                    <option value="4">Dr. Elona</option>
                    <option value="5">Dr. Madarang</option>
                </select>
                <div className="input-container">
                    <label htmlFor="date">Appointment Date:</label>
                    <input type="date" id="date" name="appointmentDate" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="input-container">
                    <label htmlFor="time">Appointment Time:</label>
                <   input type="time" id="time" name="appointmentTime" value={formData.time} onChange={handleChange} required />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="input-container">
                    <label htmlFor="phone">Cellphone Number:</label>
                    <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="input-container">
                <label htmlFor="additionalMessage">Additional Message:</label>
                <textarea id="additionalMessage" name="additionalMessage" value={formData.additionalMessage} onChange={handleChange}></textarea>
                </div>

                <button type="submit">Book Appointment</button>
            </form>
        </main>
    );
}

export default AppointmentForm;