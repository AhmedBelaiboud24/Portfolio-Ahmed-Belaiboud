import React, { useState } from 'react';
import '../styles/About.css';
import photo from '../assets/Photo-perso.png';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import SlideForm from './SlideForm';

function About() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    // Fonction pour fermer le formulaire
    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    return (
        <div>
            <div className='A-propos' id='Moi'>
                <Fade left>
                    <div className='presentation'>
                        <h1>Ahmed Belaiboud</h1>
                        <h2>Développeur front-end <br /> et WordPress</h2>
                        <p className='desc'>
                            Bonjour, je m'appelle Ahmed Belaiboud, un développeur Front-End<br />
                            passionné, spécialisé dans la création de solutions web modernes avec<br />
                            HTML, CSS, JavaScript, et WordPress. J'ai également une expertise<br />
                            solide en Bootstrap, React, Material UI, et en conception de maquettes<br />
                            avec Figma. Mon objectif est de transformer vos idées en réalité<br />
                            numérique grâce à des designs élégants et des interfaces utilisateur<br />
                            performantes.
                        </p>
                    </div>
                </Fade>
                <Zoom>
                    <div>
                        <img src={photo} alt='Ahmed Belaiboud' className='img-ahmed' />
                    </div>
                </Zoom>
            </div>

            <div className='Btn-cta'>
                <Stack direction="row" spacing={8}>
                    <Fade bottom>
                        <Button 
                            variant="contained" 
                            borderRadius={5} 
                            onClick={toggleFormVisibility}
                        >
                            Contactez-moi
                        </Button>
                    </Fade>
                    <Fade bottom delay={200}>
                        <a href="#projets"><Button variant="contained" borderRadius={5}>Voir mon Portfolio</Button></a>
                    </Fade>
                </Stack>
            </div>

            <SlideForm isVisible={isFormVisible} onClose={handleCloseForm} />
        </div>
    );
}

export default About;