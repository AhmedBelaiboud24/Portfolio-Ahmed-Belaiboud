import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Modal, Box } from '@mui/material';
import { gsap } from "gsap";
import '../styles/Project.css';
import robie from '../assets/Robbie-lens.png';
import GreenLeaf from '../assets/GreenLeaf-LandScaping.png';
import Eclat from '../assets/Eclat-du-gout.png';
import banana from '../assets/banana-design.png';
import Johndoe from '../assets/Portfolio-John-Doe.png';
import LMJ from '../assets/La-maison-jungle.png';
import AzertyType from '../assets/AzertyType.png';
import banana1 from '../assets/banana1.png';
import banana2 from '../assets/banana2.png';
import banana3 from '../assets/banana3.png';
import banana4 from '../assets/banana4.png';
import banana5 from '../assets/banana5.png';
import azerty1 from '../assets/Azerty1.png';
import eclat1 from '../assets/eclat1.png';
import eclat2 from '../assets/eclat2.png';
import eclat3 from '../assets/eclat3.png';
import eclat4 from '../assets/eclat4.png';
import eclat5 from '../assets/eclat5.png';
import JohnDoe1 from '../assets/JohnDoe1.png';
import JohnDoe2 from '../assets/JohnDoe2.png';
import JohnDoe3 from '../assets/JohnDoe3.png';
import JohnDoe4 from '../assets/JohnDoe4.png';
import robie1 from '../assets/Robie1.png';
import robie2 from '../assets/Robie2.png';
import robie3 from '../assets/Robie3.png';
import robie4 from '../assets/Robie4.png';
import robie5 from '../assets/Robie5.png';
import green1 from '../assets/green1.png';
import green2 from '../assets/green2.png';
import green3 from '../assets/green3.png';
import green4 from '../assets/green4.png';
import green5 from '../assets/green5.png';
import green6 from '../assets/green6.png';
import lmj1 from '../assets/lmj1.png';
import lmj2 from '../assets/lmj2.png';
import lmj3 from '../assets/lmj3.png';

const Project = () => {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const projectRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            projectRefs.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out'
            }
        );
    }, []);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    const projects = [
        {
            title: "Robbie Lens",
            description: "Création d'un site vitrine pour un photographe professionnel...",
            image: robie,
            moreImages: [robie1, robie2, robie3, robie4, robie5],
        },
        {
            title: "GreenLeaf Landscaping",
            description: "Conception et développement d'un site WordPress pour une entreprise de paysagisme...",
            image: GreenLeaf,
            moreImages: [green1, green2, green3, green4, green5, green6],
        },
        {
            title: "Restaurant L'Éclat du Goût",
            description: "Un site web pour un restaurant...",
            image: Eclat,
            moreImages: [eclat1, eclat2, eclat3, eclat4, eclat5],
        },
        {
            title: "Banana Design",
            description: "Design et développement d'un portfolio pour une agence de design...",
            image: banana,
            moreImages: [banana1, banana2, banana3, banana4, banana5],
        },
        {
            title: "Portfolio John Doe",
            description: "Création d'un portfolio pour un développeur...",
            image: Johndoe,
            moreImages: [JohnDoe1, JohnDoe2, JohnDoe3, JohnDoe4],
        },
        {
            title: "La Maison Jungle",
            description: "Un projet React pour gérer des plantes...",
            image: LMJ,
            moreImages: [lmj1, lmj2, lmj3],
        },
        {
            title: "AzertyType",
            description: "Un projet JavaScript pour pratiquer la frappe...",
            image: AzertyType,
            moreImages: [azerty1],
        }
    ];

    return (
        <div className="conteneur-projets">
            <h2 id="projets">Mes Projets</h2>
            <div className="Project-container" id="projets">
                <div className="Project-grid">
                    {projects.map((project, index) => (
                        <Card
                            className="project-card"
                            key={index}
                            ref={(el) => projectRefs.current[index] = el}
                        >
                            <CardMedia
                                component="img"
                                alt={project.title}
                                height="140"
                                image={project.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleOpen(project)}>
                                    Voir le projet
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>

                {selectedProject && (
                    <Modal open={open} onClose={handleClose}>
                        <Box className="modal-box">
                            <Typography variant="h4" component="h2" className="modal-title">
                                {selectedProject.title}
                            </Typography>
                            <div className="modal-images">
                                {selectedProject.moreImages.map((image, idx) => (
                                    <img key={idx} src={image} alt={`${selectedProject.title} ${idx}`} className="modal-image"/>
                                ))}
                            </div>
                            <Button onClick={handleClose}>Fermer</Button>
                        </Box>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default Project;