import React from 'react';

const About = () => {
    const imageUrl = '/public/assets/WhatsApp Image 2024-12-26 at 17.44.04.jpeg';
    return ( 
        <div id='about' className="about">
            <h1 className="about__title">About me</h1>
            <div className="about-content">
                <div className="about-image">
                    <img src={imageUrl} alt="Profile" />
                </div>
                <div className="about-details">
                    <div className="experience-container">
                        <h3 className="experience__title">Experience</h3>
                        <p>I recently graduated with a certificate in Fulstack development from MOringa School.</p>
                    </div>
                    <div className="education-container">
                        <h3 className="education_title">Education</h3>
                        <ol>
                            <li>Software Development - Moringa School</li>
                            <li>UI/UX Design - Moringa School</li>
                        </ol>
                    </div>
                    <div className="technologies">
                        <h3 className="technologies-title">Technologies</h3>
                        <div className="tech-icons">
                            <img src="/public/assets/png-clipart-javascript-logo-computer-icons-vue-js-angle-text-removebg-preview.png" alt="Javascript logo" />
                            <img src="/public/assets/react-removebg-preview.png" alt="React logo" />
                            <img src="/public/assets/python-logo-removebg-preview.png" alt="Python logo" />
                            <img src="/public/assets/django-framework1720881581.logowik.com-Photoroom.png" alt="Django logo" />
                            <img src="/public/assets/flask-icon-removebg-preview.png" alt="Flask Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
