import React from "react"
import profile_pic from "./images/profile_pic.jpg"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Info() {
    return (
        <>
        
        <img src = {profile_pic} alt="My pic"/>
        <h1>Zain Zulfiqar</h1>
        <h2 className="Student">CS Student at Rutgers</h2>
        <h4>zzainzulfiqar@gmail.com</h4>
        <div className="buttonClass">
            <a href="mailto:zzainzulfiqar@gmail.com">
        <button>
        <FontAwesomeIcon id="EmailIcon"  className = "icons" icon={faEnvelope}  size="3x"/>
        <div className= "EmailText">
            Email
            </div>
        </button>
        </a>
        <a href="https://www.linkedin.com/in/zain-zulfiqar-9a3898181">
        <button id="linkedIn">
        <FontAwesomeIcon id="linkedInIcon" className = "icons" icon={faLinkedin}  size="3x"/>
        <div className="LinkedText">
        LinkedIn
        </div>
        </button>
        </a>
        </div>
        </>
        
    )
    
}