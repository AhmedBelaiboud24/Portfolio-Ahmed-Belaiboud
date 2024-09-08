import React, { useState } from "react";
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import '../styles/Footer.css';

function Footer() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    return (
        <div className="footer-container">
            <div className="mentions-legales-container">
                <a href="#!" onClick={toggleModal} className="mentions-legales-link">
                    Mentions légales
                </a>
            </div>
            <div className="liens-reseaux">
                <a href="https://linkedin.com/in/ahmed-belaiboud-a81854278" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="logo-linkedin"/>
                </a>
                <a href="https://www.instagram.com/ahmed_belaiboud" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="logo-instagram"/>
                </a>
                <a href="https://www.facebook.com/ahmed.belaiboud24" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="logo-facebook"/>
                </a>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                    <h2>Mentions légales</h2>
                        <p>
    <strong>1. Éditeur du site</strong><br />
    Le site Portfolio Ahmed-Belaiboud | Développeur Front-End & WordPress est édité par Ahmed Belaiboud, Etudiant et Développeur Front-End et WordPress.<br />
    Adresse : Souk-El-Tenine, Maatkas, Tizi-Ouzou, Algerie<br />
    Email : abelaiboud6@gmail.com<br />
    Numéro de téléphone : +213 549399779
</p>
<p>
    <strong>2. Responsable de publication</strong><br />
    Le responsable de publication est Ahmed Belaiboud, en qualité de Développeur Front-End.
</p>
<p>
    <strong>3. Hébergement</strong><br />
    Le site est hébergé par GitHub Pages, dont le siège social est situé à :<br />
    GitHub, Inc.<br />
    88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA
</p>
<p>
    <strong>4. Données personnelles</strong><br />
    <p>
    <strong>4. Données personnelles</strong><br />
    Les informations recueillies sur ce site sont destinées à Ahmed Belaiboud pour les besoins de gestion des demandes et d’amélioration du service. Elles sont conservées pendant une durée maximale de 1 an et sont destinées uniquement à Ahmed Belaiboud. Conformément à la loi Informatique et Libertés, vous pouvez exercer votre droit d’accès, de rectification et de suppression des données vous concernant en contactant Ahmed Belaiboud à l’adresse suivante : abelaiboud6@gmail.com.
</p>

</p>
<p>
    <strong>5. Propriété intellectuelle</strong><br />
    Tous les contenus présents sur le site [Nom du site], tels que les textes, images, graphismes, logos, etc., sont la propriété exclusive de Ahmed Belaiboud ou des tiers ayant autorisé leur utilisation. Toute reproduction ou utilisation de ces contenus sans autorisation préalable est interdite.
</p>
<p>
    <strong>6. Responsabilité</strong><br />
    Portfolio Ahmed-Belaiboud | Développeur Front-End & WordPress décline toute responsabilité en cas de dommage direct ou indirect causé par l'utilisation du site ou des informations présentes.
</p>
<p>
    <strong>7. Liens externes</strong><br />
    Le site peut contenir des liens vers d'autres sites. Portfolio Ahmed-Belaiboud | Développeur Front-End & WordPress n'assume aucune responsabilité quant au contenu de ces sites externes.
</p>
                        <button onClick={toggleModal} className="modal-close">Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Footer;