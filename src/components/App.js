import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";
import Blog from "./Blog";
import { BrowserRouter, Route } from "react-router-dom";
import PortfolioContext from "../contexts/PortfolioContext";

class App extends Component {
    constructor(props) {
        super(props)
        if (matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.state = { mode: false }
        } else {
                this.state = { mode: true }
        }
    }

    render() {
        const onModeClick = () => {
            this.setState({ mode: !this.state.mode })
        }

        const display = !this.state.mode ? { 
            //backgroundColor: "yellow",
            height: "3em", 
            width: "3em",  
            borderRadius: "50%",
            cursor: "pointer",
            transition: "0.2s ease-in background-color"
          } : {
            //backgroundColor: "gray",
            height: "3em", 
            width: "3em",  
            borderRadius: "50%",
            cursor: "pointer",
            transition: "0.2s ease-in background-color"
          }

          const divStyle = !this.state.mode ? {color: "white", backgroundColor: "#262626", height: "100vh", transition: "0.2s ease-in"} : {color: "black", backgroundColor: "#f0f0f0", height: "100vh", transition: "0.2s ease-in"}

        return (
                <div style={divStyle}>
                    <BrowserRouter>
                        <PortfolioContext.Provider value={this.state.mode}>
                            <NavBar onClick={onModeClick} display={display} />
                            <div aria-live="polite">
                                <Route path="/" exact component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/projects" component={Projects} />
                                <Route path="/blog" component={Blog} />
                            </div>
                            <Footer />
                        </PortfolioContext.Provider>
                    </BrowserRouter>
                </div>
        ) 
    }
}

export default App;