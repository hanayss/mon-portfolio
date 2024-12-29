import React from "react";

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <ul className="footer-nav">
                <li className="footer-item">
                    <button
                        className="footer-contact-button"
                        onClick={() =>
                            (window.location.href =
                                "mailto:anaisthomas08330@gmail.com")
                        }
                    >
                        Me contacter
                    </button>
                </li>
            </ul>
            <p className="footer-copy">© 2024 Anaïs Thomas.</p>
        </footer>
    );
};

export default Footer;
