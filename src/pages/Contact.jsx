import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formError, setFormError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure the form is not empty
        if (!formData.name || !formData.email || !formData.message) {
            setFormError("All fields are required.");
            return;
        }

        // For now, only trigger the email submission
        const emailSubject = `Contact Form Submission: ${formData.name}`;
        const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

        // Gmail link
        const mailtoLink = `mailto:marknjenga25@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        // Open Gmail directly in a new tab
        window.location.href = mailtoLink;

        // Optionally clear the form or show a confirmation message
        setFormData({ name: '', email: '', message: '' });
    };

    return (
<div id="contact" className="contact-page">
    <h2>Contact Me</h2>
    <p>If you'd like to get in touch, feel free to send me an email via Gmail. You can also reach out to me via WhatsApp if you prefer!</p>
    
    <div className="contact-content">
        {/* Extra Information Section */}
        <section className="extra-info">
            <h3>Additional Info</h3>
            <p>
                I'm based in Nairobi, Kenya. I'm always excited to collaborate on new projects and help solve complex problems. Whether it's for a professional inquiry, a job opportunity, or just a friendly conversation about technology, feel free to reach out!
            </p>
            <div className="contact-details">
                <div className="location">
                    <h4>Location</h4>
                    <p>Nairobi, Kenya</p>
                </div>
                <div className="working-hours">
                    <h4>Working Hours</h4>
                    <p>Monday to Friday: 9:00 AM - 6:00 PM (East Africa Time)</p>
                </div>
            </div>
            <div className="social-media">
                <h4>Follow Me</h4>
                <p>You can also find me on the following platforms:</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/mark-wanjiku-708654304/" target="_blank" rel="noopener noreferrer">
                        <img src="/public/assets/linkedin.png" alt="LinkedIn" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/public/assets/icons8-github-48.png" alt="GitHub" />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.instagram.com/algorithm_mark/" target="_blank" rel="noopener noreferrer">
                        <img src="/public/assets/ins-removebg-preview.png" alt="Instagram" />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </section>

        {/* Contact Form */}
        <div className="contact-details">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Send Message via Email</button>
            </form>
            {formError && <p className="error">{formError}</p>}
            <div className="contact-options">
                <h3>Or reach out via:</h3>
                <div className="social-links">
                    <a href={`https://wa.me/254769992344?text=Hello,%20I%20want%20to%20get%20in%20touch!`} target="_blank" rel="noopener noreferrer">
                        <img src="/public/assets/whatsapp-removebg-preview.png" alt="WhatsApp" />
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default Contact;
