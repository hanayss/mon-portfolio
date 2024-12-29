import React from "react";
import "./style.scss";

const Header = () => {
    const scrollToSection = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a
                            href="#path"
                            className="nav-link"
                            onClick={(event) => scrollToSection(event, "path")}
                        >
                            Parcours Pro
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#skills"
                            className="nav-link"
                            onClick={(event) =>
                                scrollToSection(event, "skills")
                            }
                        >
                            Compétences
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#projects"
                            className="nav-link"
                            onClick={(event) =>
                                scrollToSection(event, "projects")
                            }
                        >
                            Projets
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#contact"
                            className="nav-link"
                            onClick={(event) =>
                                scrollToSection(event, "contact")
                            }
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
