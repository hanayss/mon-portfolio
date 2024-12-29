import React, { useState } from "react";
import argentBankImageModal from "./images/argentBank-aperçu.webp";
import argentBankImage from "./images/argentBank.webp";
import bookiImageModal from "./images/booki-aperçu.webp";
import bookiImage from "./images/booki.webp";
import kasaImageModal from "./images/kasa-aperçu.webp";
import kasaImage from "./images/kasa.webp";
import ninaCarducciImageModal from "./images/ninaCarducci-aperçu.webp";
import ninaCarducciImage from "./images/ninaCarducci.webp";
import ohmyfoodImageModal from "./images/ohmyfood-aperçu.webp";
import ohmyfoodImage from "./images/ohmyfood.webp";
import sophieBluelImageModal from "./images/sophieBluel-aperçu.webp";
import sophieBluelImage from "./images/sophieBluel.webp";
import Modal from "./Modal";
import "./style.scss";

const Projets = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectsData = [
        {
            id: 1,
            image: bookiImage,
            imageModal: bookiImageModal,
            title: "Booki",
            description:
                "Intégration de l'interface du site à l'aide d'une maquette. En HTML et CSS",
            descriptionModal:
                "Ce projet marquait mes premiers pas dans le monde de l'HTML et du CSS. L'objectif était de recréer une page web à partir d'une maquette Figma, en veillant à ce qu'elle soit responsive, c'est-à-dire qu'elle s'adapte aux différents formats d'écran (mobile, tablette, et desktop). Il y'avait des animations css à ajouter pour le survol des filtres par exemple. Ce projet était vraiment intéressant car il m'a permis de comprendre les bases du HTML CSS.",
            githubLink: "https://github.com/hanayss/booki.git",
        },
        {
            id: 2,
            image: ohmyfoodImage,
            imageModal: ohmyfoodImageModal,
            title: "OhMyFood",
            description:
                "Création de la plateforme OhMyFood. Avec animations CSS et utilisation de SASS",
            descriptionModal:
                "J'ai conçu une interface mobile-first pour la startup Oh My Food, en assurant une expérience utilisateur optimale sur mobile et une compatibilité responsive sur d'autres appareils. Le CSS a été géré avec Sass pour une structure modulaire et efficace. Le versionnage a été réalisé avec Git et GitHub. J'ai également intégré des animations CSS pour dynamiser les maquettes fournies, et rendu la page d'accueil totalement responsive.",
            githubLink: "https://github.com/hanayss/Project-oh-my-food.git",
        },
        {
            id: 3,
            image: sophieBluelImage,
            imageModal: sophieBluelImageModal,
            title: "Portfolio Sophie Bluel",
            description:
                "Creation d'une page web pour un portfolio de photographe. En javascript",
            descriptionModal:
                "J'ai développé le front-end pour une architecte d'intérieur chez ArchiWebos, incluant une galerie dynamique des projets avec récupération des données via une API et un système de filtres. J'ai également créé la page de connexion administrateur, avec un formulaire d'authentification. Une modale a été ajoutée pour gérer l'ajout et la suppression de projets, avec interaction back-end.",
            githubLink: "https://github.com/hanayss/Projet-6.git",
        },
        {
            id: 4,
            image: kasaImage,
            imageModal: kasaImageModal,
            title: "Kasa",
            description:
                "Creation d'un site web pour une agence de location immobilière avec React",
            descriptionModal:
                "J'ai développé le site web de l'entreprise Kasa en utilisant React. Le projet a été initialisé avec Create React App et les pages ont été créées avec React et React Router. Les annonces immobilières simulées ont été gérées à partir d'un fichier JSON et affichées dynamiquement. Un système de routage moderne a été mis en place avec React Router, incluant une page d'erreur personnalisée pour les pages inexistantes.",
            githubLink: "https://github.com/hanayss/Projet_8.git",
        },
        {
            id: 5,
            image: ninaCarducciImage,
            imageModal: ninaCarducciImageModal,
            title: "Nina Carducci",
            description:
                "Optimisation du referencement d'un site web de photographe et amélioration des performances",
            descriptionModal:
                "J'ai réalisé un audit du site de la photographe avec Lighthouse pour analyser les performances, l'accessibilité et le SEO. Des optimisations ont été planifiées et mises en œuvre : amélioration des images, du code, du référencement local avec Schema.org, et ajout des métadonnées pour les réseaux sociaux. J'ai corrigé les problèmes d'accessibilité et optimisé le SEO technique pour obtenir de meilleures notes sur Lighthouse et Wave.",
            githubLink: "https://github.com/hanayss/ninacarducci.git",
        },
        {
            id: 6,
            image: argentBankImage,
            imageModal: argentBankImageModal,
            title: "Argent Bank",
            description:
                "Transformation du code HTML existant en React et utilisation de Redux pour gérer la connexion utilisateur",
            descriptionModal:
                "J'ai développé une application web dynamique en utilisant React et Redux, avec une interface réactive. La gestion des utilisateurs inclut la connexion, la déconnexion, l'accès au profil après authentification, et la possibilité de modifier le pseudo. La documentation des routes de l'API pour la gestion des transactions a été réalisée avec Swagger au format YAML.",
            githubLink: "https://github.com/hanayss/argentbank-react.git",
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div>
            {" "}
            <div className="cards-container" id="projects">
                <h2 className="title-card-section">Mes projets</h2>
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="card"
                        onClick={() => openModal(project)}
                    >
                        <div className="image-container">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <Modal
                    isOpen={!!selectedProject}
                    onClose={closeModal}
                    title={selectedProject?.title}
                    description={selectedProject?.descriptionModal}
                    image={selectedProject?.imageModal}
                    buttons={[
                        {
                            label: "Lien GitHub",
                            link: selectedProject?.githubLink,
                        },
                    ]}
                />
            )}
        </div>
    );
};

export default Projets;
