import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import portfolioContext from "../contexts/PortfolioContext";

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { toggle: false }
    }

    render() {
        const toggle = () => {
            this.setState({ toggle: !this.state.toggle })
        }

        const change = () => {
            this.props.onClick()
        }

        const hamburgerMenu = !this.state.toggle ?
            <portfolioContext.Consumer>
                {(value) => {
                    if (!value) {
                        return <div className="menu-closed" style={{backgroundColor: "black", transition: "1s ease-in background-color"}} >
                            <div style={this.props.display} onClick={change}></div>
                            <p className="name"><Link to="/" className="link-name" >Fawaz Haroun</Link></p>
                            <button className="open-button" onClick={toggle} style={{backgroundColor: "white"}}>MENU</button>
                        </div>
                    } else {
                        return <div className="menu-closed" style={{backgroundColor: "white", transition: "1s ease-in background-color"}} >
                            <div style={this.props.display} onClick={change}></div>
                            <p className="name"><Link to="/" className="link-name" >Fawaz Haroun</Link></p>
                            <button className="open-button" onClick={toggle} style={{backgroundColor: "black", color: "white"}}>MENU</button>
                        </div>
                    }
                }}
            </portfolioContext.Consumer> :
            <portfolioContext.Consumer>
                {(value) => {
                    if (!value) {
                        return <div className="menu-open" style={{backgroundColor: "black"}} >
                        <div className="hamburger" >
                            <button className="closed-button" onClick={toggle} style={{backgroundColor: "white"}} >CLOSE</button>
                        </div>
                            <ul className="ul-small-screen">
                                <li style={{marginTop: "2em"}} ><Link to="/about" className="link li-small-screen" onClick={toggle} >About</Link></li>
                                <li style={{marginTop: "2em"}} onClick={toggle}><Link to="/projects" className="li-small-screen link" >Projects</Link></li>
                                <li style={{marginTop: "2em"}} onClick={toggle}><Link to="/contact" className="li-small-screen link" >Contact</Link></li>
                            </ul>
                        </div>
                    } else {
                        return <div className="menu-open" style={{backgroundColor: "white"}} >
                        <div className="hamburger" >
                            <button className="closed-button" onClick={toggle} style={{backgroundColor: "black", color: "white"}} >CLOSE</button>
                        </div>
                            <ul className="ul-small-screen">
                                <li style={{marginTop: "2em"}} ><Link to="/about" className="link li-small-screen" onClick={toggle} >About</Link></li>
                                <li style={{marginTop: "2em"}} onClick={toggle}><Link to="/projects" className="li-small-screen link" >Projects</Link></li>
                                <li style={{marginTop: "2em"}} onClick={toggle}><Link to="/contact" className="li-small-screen link" >Contact</Link></li>
                            </ul>
                        </div>
                    }
                }}
            </portfolioContext.Consumer>

        return (
            <>
                <div className="nav-container">
                    <portfolioContext.Consumer>
                        {(value) => {
                            if (!value)  {return (
                                <ul className="ul-big-screen" style={{backgroundColor: " #1a1a1a"}}>
                                    <div style={this.props.display} onClick={change}></div>
                                    <li className="name li-big-screen"><Link to="/" className="link-name" >Fawaz Haroun</Link></li>
                                    <li><Link to="/about" className="link li-big-screen" >About</Link></li>
                                    <li><Link to="/projects" className="link li-big-screen" >Projects</Link></li>
                                    <li><Link to="/contact" className="link li-big-screen" >Contact</Link></li>
                                </ul>
                            )} else {
                                return (
                                    <ul className="ul-big-screen" style={{backgroundColor: "white"}}>
                                        <div style={this.props.display} onClick={change}></div>
                                        <li className="name li-big-screen"><Link to="/" className="link-name" >Fawaz Haroun</Link></li>
                                        <li><Link to="/about" className="link li-big-screen" >About</Link></li>
                                        <li><Link to="/projects" className="link li-big-screen" >Projects</Link></li>
                                        <li><Link to="/contact" className="link li-big-screen" >Contact</Link></li>
                                    </ul>
                                )
                            }
                        }}
                    </portfolioContext.Consumer>
                </div>
                <div className="nav-container-small">
                    {hamburgerMenu}
                </div>
            </>
        )
    }
}

export default NavBar;