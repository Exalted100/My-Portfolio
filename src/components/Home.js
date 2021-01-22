import React from "react";
import orange from "../images/orange.jpg";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-parent">
            <div className="home-container">
                <div className="image-container">
                    <img src={orange} alt="orange" />
                </div>
                <div className="body-container">
                    <p className="stack">HTML, CSS, JS, React</p>
                    <p className="type">Web</p>
                    <p className="role">Front End Developer</p>
                    <p className="info">Hello, and welcome! I am a front end web developer. I like recreating aesthetically pleasing and easy to use designs. I have an eye for detail and put thought into recreating designs. I learn fast and I'm eager to learn new technologies. I am currently learning backend web development with Nodejs, Express, and MongoDB.</p>
                </div>
            </div>
            <p className="explore">EXPLORE!</p>
            <p className="text" >Use the navigation bar.</p>
            <p className="text">P.S. You can switch between light and dark mode by clicking the circle on the top left of your screen.</p>
        </div>
    )
}

export default Home;