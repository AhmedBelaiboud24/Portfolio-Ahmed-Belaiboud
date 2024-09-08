import React, { useEffect, useRef } from "react";
import '../styles/Competences.css';
import bootstrap from '../assets/bootstrap.png';
import css from '../assets/css.png';
import figma from '../assets/figma.png';
import Github_dark from '../assets/Github_dark.png';
import html5 from '../assets/html5.png';
import javascript from '../assets/javascript.png';
import materialui from '../assets/materialui.png';
import react from '../assets/react.png';
import sass from '../assets/sass.png';
import wordpress from '../assets/wordpress.png';

function Competances() {
    const competencesRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const competences = competencesRef.current;
            const competencesTop = competences.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (competencesTop < windowHeight * 0.8) {
                competences.querySelectorAll('.competence').forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 100); // Décalage pour chaque compétence
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Pour vérifier la visibilité au chargement de la page

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="Competance-container" id="competances" ref={competencesRef}>
            <h2>Mes Compétences Techniques</h2>
            <div className="parent-container">
                <div className="competence">
                    <img src={html5} alt="Html" />
                    <p>HTML5</p>
                </div>
                <div className="competence">
                    <img src={css} alt="CSS" />
                    <p>CSS3</p>
                </div>
                <div className="competence">
                    <img src={javascript} alt="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div className="competence">
                    <img src={sass} alt="Sass" />
                    <p>Sass</p>
                </div>
                <div className="competence">
                    <img src={react} alt="React-Js" />
                    <p>React-JS</p>
                </div>
                <div className="competence">
                    <img src={bootstrap} alt="Bootstrap" />
                    <p>Bootstrap</p>
                </div>
                <div className="competence">
                    <img src={materialui} alt="Material-UI" />
                    <p>Material-UI</p>
                </div>
                <div className="competence">
                    <img src={Github_dark} alt="GitHub" />
                    <p>GitHub</p>
                </div>
                <div className="competence">
                    <img src={figma} alt="Figma" />
                    <p>Figma</p>
                </div>
                <div className="competence">
                    <img src={wordpress} alt="WordPress" />
                    <p>WordPress</p>
                </div>
            </div>
        </div>
    );
}

export default Competances;