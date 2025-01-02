import Header from "../components/Header";

const Home = () => {
    return ( 
        <div className="home-page">
            <Header />
            {/* Main Content */}
            <div id="home" className="home-content">
                {/* Profile Image */}
                <div className="home-image">
                    <img src="/assets/WhatsApp Image 2024-12-26 at 18.07.34 (1).jpeg" alt="Profile" />
                </div>

                {/* Intro Text */}
                <div className="home-text">
                    <h4>Fullstack Developer</h4>
                    <p>Hi, I'm a fullstack developer with a passion for building scalable and efficient
                        applications. I have experience with a range of technologies, including React, Django, and Flask
                        and programming languages like JavaScript and Python.
                    </p>
                    
                    {/* Call-to-action Section */}
                    <div className="home-cta">
                        <a href="/public/assets/resume (2).pdf" target="_blank" className="resume-btn">
                            View Resume
                        </a>
                        <ul className="highlights">
                            <li>🌟 Expertise in React and Django</li>
                            <li>⚡ Passionate about clean and maintainable code</li>
                            <li>🚀 Open to exciting opportunities and collaborations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
