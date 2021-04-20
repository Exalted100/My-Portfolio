import React from "react";
import Project from "./Project";
import "./Projects.css";
import StarWars from "../images/Star-wars.png";
import DrumKit from "../images/Drum-kit.png";
import FusionLandingPage from "../images/Fusion-Landing-Page.png";
import TodoList from "../images/Todo-list.png";
import Calculator from "../images/Calculator.png";
import TipCalculator from "../images/Tip-calculator.png";
import WordProcessor from "../images/word-processor.png";
import ColourGame from "../images/colour-game.png";
import Dominos from "../images/Dominos.png";

const Projects = () => {
    return (
        <div className="projects-container">
            <h2 className="projects-h2">Projects</h2>
            <p className="projects-intro">You're welcome to see some of the things I've worked on so far. I've worked on many other things, often attempts to learn new concepts. These are the ones I think may see the light of the day. However, my best work is in the future, maybe with you.</p>
            <div className="inner-projects-container">
                <Project image={StarWars} project="STAR WARS INFOGRAPHIC" live="https://starwars-infographic.netlify.app/" code="https://github.com/Exalted100/Star-Wars-Infographic" projectInfo="The Star Wars infographic provides information on the Star Wars franchise. It includes films, characters, species, spaceships, vehicles, and planets that were featured in the franchise." />
                <Project image={DrumKit} project="JAVASCRIPT DRUM KIT" live="https://exalted100.github.io/Drum-Kit/" code="https://github.com/Exalted100/Drum-Kit" projectInfo="This was created as part of the JavaScript30 Challenge. It was created without looking at the provided code (none of the project's here were live coded from another's work)." />
                <Project image={FusionLandingPage} project="LANDING PAGE" live="https://exalted100.github.io/Fusion-Landing-Page/" code="https://github.com/Exalted100/Fusion-Landing-Page" projectInfo="A landing page I created a couple of months into learning html and css. It looked like a big deal to me then. I created it out of a figma design an acquaintance sent to me." />
                <Project image={TodoList} project="TO DO LIST" live="https://exalted-todo.netlify.app/" code="https://github.com/Exalted100/Todo-list" projectInfo="Is there any front end web developer that hasn't built a todo list? Is there really? And so, like all the others in this profession, I have joined the hall of hackneyed project creators." />
                <Project image={Calculator} project="CALCULATOR" live="https://exalted100.github.io/Calculator/" code="https://github.com/Exalted100/Calculator" projectInfo="This is another project from the hall of hackneyed projects. A non-original- a simple calculator. This project was donee to help me understand Javascript and how it related to the DOM." />
                <Project image={TipCalculator} project="TIP CALCULATOR" live="https://exalted100.github.io/Tip-Calculator/" code="https://github.com/Exalted100/Tip-Calculator" projectInfo="This tip calculator will help you decide how much to tip your waiters and other service providers. The variables it takes include your satisfaction, total bill, and persons to pay." />
                <Project image={Dominos} project="DOMINOS WEBSITE" live="https://exalted-dominos.netlify.app/" code="https://github.com/Exalted100/Dominos" projectInfo="This is the product page for a dominos website. It was created from a UI design made by a friend. I used React and React Context to create it. I also enabled the search feature." />
                <Project image={WordProcessor} project="WORD PROCESSOR" live="https://exalted-word-processor.netlify.app/" code="https://github.com/Exalted100/word-processor" projectInfo="This is a simple word processor. It has a text field that accepts words. As the words are being typed, it shows the number of characters, words, and sentences. The case can also be toggled." />
                <Project image={ColourGame} project="COLOUR GAME" live="https://exalted100.github.io/The-Colour-Game/" code="https://github.com/Exalted100/The-Colour-Game" projectInfo="One way to represent colours is with RGB. RGB is red, green, and blue. A higher value means more of the colour. The colour game makes you guess the colour by the RGB value." />
            </div>
        </div>
    )
}

export default Projects;