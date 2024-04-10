import React from "react";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="bachelor">
        <h1>Bachelor Of Technology</h1>
        <h2>NIT Allahabad</h2>
        <p> CGPA - 7.21 (2023)</p>
      </div>
      <div className="class-12">
        <h1>Class 12</h1>
        <h2>Jawahar Navodaya Vidyalaya, Allahabad</h2>
        <p>Percentage - 80.6% (2019)</p>
      </div>
      <div className="class-10">
        <h1>Class 10</h1>
        <h2>Jawahar Navodya Vidyalaya, West Singhbhum</h2>
        <p>CGPA - 10 (2017)</p>
      </div>
    </div>
  );
};

export default Education;
