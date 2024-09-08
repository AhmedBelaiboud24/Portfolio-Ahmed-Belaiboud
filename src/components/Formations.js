import React from "react";
import '../styles/Formations.css';
import photo from '../assets/Ahmed-Img.jpg';
import Fade from 'react-reveal/Fade';

function Formations(){
    return (
        <div className="conteneur-formtions" id="formations">
            <h2>Mes Formations et Diplômes</h2>
            <div className="formations-container">
                <Fade left>
                    <div>
                        <img src={photo} alt="Ahmed-Belaiboud"/>
                    </div>
                </Fade>
                <Fade right>
                    <div className="desc-formations">
                        <div className="liste-formations">
                            <ul>
                                <h4>2024/2025</h4>
                                <li>Licence 3 en Informatique à l'Université Mouloud Mammeri de Tizi-Ouzou,<br/> 
                                    spécialité Systèmes informatiques.</li>
                                <h4>2024</h4>
                                <p>Formations certifiantes en :</p>
                                <li>React</li>
                                <li>Material UI</li>
                                <li>Bootstrap</li>
                                <li>Figma</li>
                                <li>Git & GitHub</li>
                                <li>WordPress</li>
                                <h4>2023/2024</h4>
                                <li>Licence 2 en Informatique à l'Université Mouloud Mammeri de Tizi-Ouzou.</li>
                                <h4>2023</h4>
                                <p>Formations certifiantes en :</p>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <h4>2022/2023</h4>
                                <li>Licence 1 en Informatique à l'Université Mouloud Mammeri de Tizi-Ouzou.</li>
                            </ul>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Formations;