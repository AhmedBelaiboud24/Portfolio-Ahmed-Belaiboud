import React, { useRef, useEffect } from 'react';
import '../styles/SlideForm.css';

function SlideForm({ isVisible, onClose }) {
    const formRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (formRef.current && !formRef.current.contains(event.target)) {
                onClose();
            }
        }

        // Ajouter l'événement click pour toute la page
        document.addEventListener('mousedown', handleClickOutside);

        // Nettoyer l'événement lors du démontage du composant
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className={`slideform ${isVisible ? 'visible' : ''}`} ref={formRef}>
            <form className="formulaire" action="https://formspree.io/f/xkgwebod"
                    method="POST">
                <h2>Contactez-moi</h2>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" placeholder="Votre nom" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Votre email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Votre message" required />
                </div>

                <button type="submit" className="submit-button">Envoyer</button>
            </form>
        </div>
    );
}

export default SlideForm;