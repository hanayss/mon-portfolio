import React from "react";
import "./style.scss";

const Modal = ({ isOpen, onClose, title, description, buttons }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    &times;
                </span>
                <div className="modal-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="modal-buttons">
                        {buttons.map((button, index) => (
                            <a
                                key={index}
                                href={button.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button"
                            >
                                {button.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
