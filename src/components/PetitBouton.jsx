import React from 'react';
import bulletxt2 from "../assets/bulletxt2.png";
import "../styles/accueil.css";

const PetitBouton = ({ text, onClick,className = ""  }) => {
    return (
        <div className={`petit-bouton ${className}`} onClick={onClick}>
            <img src={bulletxt2} alt="button background" className="button-image fit-img" />
            <p className="button-text">{text}</p>
        </div>
    );
};

export default PetitBouton;