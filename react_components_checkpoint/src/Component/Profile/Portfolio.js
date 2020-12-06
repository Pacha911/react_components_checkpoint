import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div>
        <section>
          {/* navigation */}
          <nav>
            {/* logo */}
            <a href="#" className="logo">Portfolio</a>
            {/* menu */}
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          {/* home */}
          <div className="home-container">
            <a name="home" />
            <p>Hey,</p>
            <p>I'm Houssem Bacha</p>
            <p>I have an Industry Management Master degree &amp; I'm a web developer trainee</p>
            <button className="hire-btn">Hire me</button>
            <a href="File/cv.docx" download>
              <button className="down-cv">Download CV</button></a>   
          </div>
          {/* model */}
          <img src="./Me.png" className="model" alt="Photo of me" />
        </section>
        {/* about section */}
        <a name="about" />
        <div className="about-container">
          <img src="./About-me.png" alt="About-me" />
          <div className="about-text">
            <p>About Me</p>
            <p>Industry Management Engeneer &amp; Web Devloper</p>
            <p>Hello, my name is Houssem Bacha, I'm graduate from the National School of Engineers of Carthage,
              I received a solid training reinforced by practical internships,
              in the sector of industrial sciences and techniques.
              Throughout my studies, I learned to coordinate manufacturing processes and find solutions to improve productivity,
              while taking into account the constraints of cost, quality or even deadlines.</p>
            <p>I'm a Web Developer trainee now, I am working on HTML5, CSS3 and JS. If you have any project, please contact me.</p>
            {/* button */}
            <button>Hire Me</button>
            <a href="File/cv.docx" download>
              <button>Download CV</button></a>
          </div>
        </div>
        {/*contact*/}
        <div className="contact-me">
          <a name="contact" />
        </div>
        {/*footer*/}
        <footer>
          {/*heading*/}
          <p>Houssem Bacha's Portfolio</p>
          {/*paragraph*/}
          <p>Send me Email here: <a href="mailto:bachahoussem@live.fr">bachahoussem@live.fr</a></p>
          <p>Or you can find on social media profile here:</p>
          {/*social*/}
          <div className="social-icons">
            <a href="https://www.facebook.com/pacha911/"><img src="./fb-icon.png" alt="FaceBook" style={{width: '120px', height: '120px'}} /><i className="fab fa-facebook-f" /></a>
            <a href="https://www.linkedin.com/in/houssem-eddin-bacha-5678b7121/"><img src="./li-icon.png" alt="Linkedin" style={{width: '50px', height: '50px'}} /><i className="fab fa-linkedin" /></a>
            <a href="https://www.youtube.com/channel/UCLcQKgAxiSbyIdzeKa6o0nA?view_as=subscriber"><img src="./yt-icon.png" alt="YouTube" style={{width: '50px', height: '50px'}} /><i className="fab fa-youtube" /></a>
          </div>
          {/*copyright*/}
          <p className="copyright">Copyright by Houssem Bacha</p>
        </footer>
        {/*social-attach-bar*/}
        <div className="social">
          <a href="https://www.facebook.com/pacha911/"><img src="./fb-icon2.png" alt="Facebook" style={{width: '50px', height: '50px'}} /><i className="fab fa-facebook-f" /></a>
          <a href="https://www.linkedin.com/in/houssem-eddin-bacha-5678b7121/"><img src="./li-icon2.png" alt="Linkedin" style={{width: '50px', height: '50px'}} /><i className="fab fa-linkedin" /></a>
          <a href="https://www.youtube.com/channel/UCLcQKgAxiSbyIdzeKa6o0nA?view_as=subscriber"><img src="./yt-icon2.png" alt="YouTube" style={{width: '70px', height: '70px'}} /><i className="fab fa-youtube" /></a>
        </div>
        </div>
    )
}
export default Portfolio;
