import React from "react";
import logoCss from "./images/css.svg";
import logoGithub from "./images/github.svg";
import logoHtml from "./images/html.svg";
import logoJs from "./images/javascript.svg";
import logoReact from "./images/react.svg";
import logoSass from "./images/sass.svg";
import logoTailwind from "./images/tailwindcss.svg";
import "./style.scss";

const Skills = () => {
    const logos = [
        { src: logoReact, alt: "React" },
        { src: logoHtml, alt: "HTML" },
        { src: logoCss, alt: "CSS" },
        { src: logoSass, alt: "SASS" },
        { src: logoJs, alt: "Javascript" },
        { src: logoGithub, alt: "GitHub" },
        { src: logoTailwind, alt: "Tailwind CSS" },
    ];

    return (
        <div className="skills-container" id="skills">
            <h2>Mes compétences</h2>
            <div className="skills-logos">
                {logos.map((logo, index) => (
                    <div key={index} className="skill-item">
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="skill-logo"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
