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
                    <p className="info">Hello, and welcome! I am a front end web developer. I like recreating aesthetically pleasing and easy to use designs. I am currently learning backend web development with Nodejs, Express, and MongoDB. When I'm not watching more episodes of anime than I can count in a single sitting, I will likely to reading through Medium posts.</p>
                </div>
            </div>
            <p className="explore">EXPLORE!</p>
        </div>
    )
}

export default Home;