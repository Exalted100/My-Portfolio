import React from "react";
import "./Project.css"

const Project = (props) => {
    return (
        <div className="project-container">
            <h6>{props.project}</h6>
            <div className="inner-project-div">
                <div className="project-image-container">
                    <img src={props.image} alt="s" />
                </div>
                <div>
                    <p className="project-info" >{props.projectInfo}</p>
                    <div className="links-container">
                        <a className="live-site" href={props.live} target="_blank" rel="noreferrer" >Live Site</a>
                        <a className="code-repo" href={props.code} target="_blank" rel="noreferrer" >Code Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;