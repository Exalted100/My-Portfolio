import React from "react";
import "./Contact.css";
import orange from "../images/orange.jpg";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-image-container"><img src={orange} alt="orange" /></div>
            <div className="contact-info">
                <h2 className="contact-h2">Contact</h2>
                <p className="email">E-mail</p>
                <a className="mail-link" href="mailto:harounayomikun@gmail.com">harounayomikun@gmail.com</a>
            </div>
        </div>
    )
}

export default Contact;