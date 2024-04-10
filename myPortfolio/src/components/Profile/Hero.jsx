import React from "react";
import "./Hero.css";
import profile_img from "../../assets/about_profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile_img" />
      <h1>
        <span>I'm Vikash Jerai,</span> Software Engineer in Magicbricks.
      </h1>
      <p>I'm android developer in Bengaluru</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
