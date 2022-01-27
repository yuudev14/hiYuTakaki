import React from "react";
import yu from "../assets/yu.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <h1>ABOUT</h1>

      <div className="section-content">
        <div className="myProfile">
          <div className="myImage">
            <img src={yu} alt="me" />
            <a
              href="https://drive.google.com/file/d/1rYvLI3awc-KL4nIwVpPgOqI7KpgjULKF/view?usp=sharing"
              target="_blank">
              <p>View Resume</p>
            </a>
          </div>
          <div className="me">
            <p>
              Hi, I am a full-stack software engineer who is always eager to
              learn new things and willing to take challenges out of my comfort
              zone.
            </p>
            <p>
              Before coming here to Japan, I was a 2nd-year computer engineering
              student in the Philippines. During that time, I decided to go to
              Japan to continue my studies but things didn't go well as expected
              so I tried to find an alternative way to achieve my dream job. I
              taught myself how to code in between jobs. And then I passed the
              admission process to an advanced software engineering course in
              Tokyo and decided to join them to improve my skills. Since then, I
              enjoy building full-stack apps using technologies like PostgreSQL,
              React, Express and Node.js. Currently, I like to go deeper in
              TypeScript to incorporate it in React and Node.js.
            </p>
            <p>
              I'm currently based in Tokyo and I'm ready to embark on the next
              chapter of my life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
