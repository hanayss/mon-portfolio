import React from "react";
import welcomeImage from "./images/welcome.webp";
import "./style.scss";

const Welcome = () => {
    return (
        <>
            <div className="section-welcome" id="welcome">
                <img
                    src={welcomeImage}
                    className="img-welcome"
                    alt="Bienvenue"
                />
                <div className="div-text-welcome">
                    <h2> Portfolio d'Anaïs Thomas </h2>
                    <p>
                        Découvrez une sélection de projets réalisés au cours de
                        ma formation d'Intégratrice Web chez OpenClassrooms,
                        illustrant les compétences et savoir-faire que j'ai
                        acquis tout au long de ce parcours enrichissant. Vous y
                        trouverez également un aperçu de mon parcours
                        professionnel. Je vous souhaite une agréable exploration
                        !
                    </p>
                </div>
            </div>
        </>
    );
};
export default Welcome;
