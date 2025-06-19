import React from "react";
import Myimg from './img/My.jpeg'
import './style.css';

function Home(){
    return(
     <div className="home-container">
      <div className="img-container">
        <img src={Myimg} alt="Velmurugan" className="profile-img" />
      </div>
      <div className="content">
        <h1 className="home-title">VELMURUGAN M</h1>
        <h2 className="home-subtitle">Java Full Stack Developer</h2>
        <p className="home-description">
          I am a recent Computer Science and Engineering graduate with a strong foundation in programming and software development.
          I have completed a comprehensive Java Full Stack Development course, building web applications using Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and front-end frameworks.
        </p>
        <ul className="personal-info">
          <li><strong>Gender:</strong> Male</li>
          <li><strong>Marital Status:</strong> Married</li>
        </ul>
      </div>
    </div>
    );
}

export default Home;