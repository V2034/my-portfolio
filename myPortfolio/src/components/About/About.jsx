import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              A quick learner, hardworking, versatile and adaptive team man,
              want to solve real life problems through my skills to improve
              everyday. Love to do challenging tasks.
            </p>
            <p>
              As a Software Engineer, I bring hands-on experience in designing,
              developing, and maintaining robust software solutions. With a
              strong foundation in computer science principles and a passion for
              problem-solving, I thrive in dynamic environments where innovation
              and collaboration drive success..
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Java Script</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Kotlin</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>C/C++</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>XML</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
