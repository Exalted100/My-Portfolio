import React from "react";
import Project from "./Project";
import "./Projects.css";
import DrumKit from "../images/Drum-kit.png";
import TodoList from "../images/Todo-list.png";
import Dominos from "../images/Dominos.png";
import GithubQuery from "../images/github-query-app.png";
import Shortly from "../images/shortly.png";
import manageLandingPage from "../images/manage-landing-page.png";

const Projects = () => {
    return (
        <div className="projects-container">
            <h2 className="projects-h2">Projects</h2>
            <p className="projects-intro">You're welcome to see some of the things I've worked on so far. I've worked on many other things, often attempts to learn new concepts. These are the ones I think may see the light of the day. However, my best work is in the future, maybe with you.</p>
            <div className="inner-projects-container">
                <Project image={Shortly} project="Shortly" live="https://exalted100.github.io/url-shortner-app/" code="https://github.com/Exalted100/url-shortner-app" projectInfo="The Shortly website accepts a link and returns a shorter link. It provides a list of links that have been converted during the session. Users can copy by clicking a button." />
                <Project image={manageLandingPage} project="Manage Landing Page" live="https://exalted100.github.io/manage-landing-page/" code="https://github.com/Exalted100/manage-landing-page" projectInfo="Manage landing page is a landing page for the website of a fictional tech firm. It is a recreation of a Frontend Mentors task. It contains an input that accepts user emails." />
                <Project image={GithubQuery} project="Github Query App" live="https://github-query-app.netlify.app/" code="https://github.com/Exalted100/github-query-app" projectInfo="The Github Query App accepts a github username. It will display an error if the github username is wrong. If it is a correct username, it displays a profile with the user's data." />
                <Project image={Dominos} project="DOMINOS WEBSITE" live="https://exalted-dominos.netlify.app/" code="https://github.com/Exalted100/Dominos" projectInfo="This is the product page for a dominos website. It was created from a UI design made by a friend. I used React and React Context to create it. I also enabled the search feature." />
                <Project image={DrumKit} project="JAVASCRIPT DRUM KIT" live="https://exalted100.github.io/Drum-Kit/" code="https://github.com/Exalted100/Drum-Kit" projectInfo="This was created as part of the JavaScript30 Challenge. It was created without looking at the provided code (none of the project's here were live coded from another's work)." />
                <Project image={TodoList} project="TO DO LIST" live="https://exalted-todo.netlify.app/" code="https://github.com/Exalted100/Todo-list" projectInfo="Is there any front end web developer that hasn't built a todo list? Is there really? And so, like all the others in this profession, I have joined the hall of hackneyed project creators." />
            </div>
        </div>
    )
}

export default Projects;