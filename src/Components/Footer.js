import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faSquareInstagram, faGithubSquare } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
       <footer>
       <div className="footImages">
        <a href="https://www.instagram.com/zainzul_/">
       <FontAwesomeIcon className = "icons" icon={faSquareInstagram}  size="4x"/>
       </a>
       <a href="https://github.com/TherealZain">
       <FontAwesomeIcon className = "icons" icon={faGithubSquare}  size="4x"/>
       </a>
       </div>
       </footer>
        
    )
    
}