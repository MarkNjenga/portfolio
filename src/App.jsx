import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="https://cdn.pixabay.com/video/2020/11/01/53983-476396364_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="home">
          <Home />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="projects">
          <Projects />
        </div>
        <div className="contact">
          <Contact />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
