import React from 'react';
import Image from './wel.gif';

function App() {
  return (
    <div className="App">
      <header>
        <img src={Image} alt="Image not found" width="200px" height="200px"/>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about-me">
          <h2>About Me</h2>
          <p>Hi, my name is Manasvi I am beginning my career. <br></br>I specialize in front-end development<br></br> using HTML, CSS, and JavaScript. I am also <br></br>proficient in several back-end technologies, including Node.js and MongoDB.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>E-notification System</p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>Super market billig Management system</p>
            </li>
            <li>
              <h3>Project 3</h3>
              <p>IOT based Smart Wheel Chair</p>
            </li>
          </ul>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            
          </ul>
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <p>Download my resume <a href="resume.pdf" target="_blank">here</a>.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
