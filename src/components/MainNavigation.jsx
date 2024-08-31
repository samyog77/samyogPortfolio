import './MainNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";

export default function MainNavigation() {
    return (
        <nav>
            <ul>
                <li>
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className="menu-icon"  /* Add the CSS class */
                    />
                </li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/myProjects">My Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}
