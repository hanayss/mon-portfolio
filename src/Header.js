import React from "react";
import "./style.scss";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#path" className="nav-link">
                            Parcours Pro
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link">
                            Compétences
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">
                            Projets
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
