import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="exp">
        <h1>Professional Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="prof-exp">
        <h1>Magicbricks</h1>
        <ul>
          <li>
            <p>
              Developed and maintained android applications using Java and
              Kotlin.
            </p>
          </li>
          <li>
            <p>
              Utilized Android Architecture components ( MVVM , Live Data , Room
              DB) to streamline data management and optimize overall system
              efficiency.
            </p>
          </li>
          <li>
            <p>
              Identified and rectified Bugs within the application, ensuring
              improved functionality and a smoother user experience.
            </p>
          </li>
          <li>
            <p>
              Integrated APIs into the application, enhancing its functionality
              and enabling efficient data communication.
            </p>
          </li>
          <li>
            <p>
              Implemented Broadcast receiver for call-related events within the
              application, enabling effective handling and responsive actions to
              enhance the user experience.
            </p>
          </li>
          <li>
            <p>
              Integrated coroutines to manage asynchronous operations, enhancing
              app responsiveness and elevating the overall user experience.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
