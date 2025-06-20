import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/propos.css";
// import "../styles/accueil.css";
// import "../styles/album.css";

import catLogo from '../assets/catLogo.gif';


const Apropos = () => {
    const navigate = useNavigate();
    return (
        <div className="propos-container">
            <header>
                <img
                src={catLogo}
                alt="logo coverartober"
                className="img-flex logo"
                />
            </header>

            <div className='propos-content'>
                <div className='grid'>

                
                    <div className='grid-col-1'>
                        <h1>Coverartober</h1>
                        <p>Le CoverArtOber est un défi inspiré de l’Inktober, qui consiste à faire un dessin par jour durant le mois d’Octobre selon une liste de thèmes. Même principe ici, sauf que l’on crée des couvertures d’albums et non pas des dessins.</p>
                        <p>Le défi a été créé par <a href='https://www.instagram.com/sukai909/' rel="noreferrer" target="_blank">@Sukai</a> et <a href='https://www.instagram.com/maxi.mr.zozo/' rel="noreferrer" target="_blank">@MrZozo</a>.</p>
                        <p><a href='https://x.com/sukaichae/status/1839355943899074761' rel="noreferrer" target="_blank">Retrouvez ici la liste 2024 !</a></p>
                        <h2>Mentions légales</h2>
                        <p>Les musiques présentes sur ce site ne m'appartiennent pas. Elles sont utilisées à titre non commercial, uniquement dans un but de partage et de découverte artistique.</p>
                        <p>Aucun profit n'est généré par leur diffusion, directement ou indirectement.
                        Chaque morceau est accompagné des crédits appropriés, mentionnant le nom de l’artiste et un lien vers la source officielle.</p>
                        <p>Si vous êtes un ayant droit et que vous souhaitez demander le retrait ou la modification d’un contenu, veuillez me contacter à l’adresse suivante : khandro.gaste@gmail.com</p>
                    </div>
                    <div className='grid-col-2'>
                        <h1>Qui suis-je</h1>
                        <p>Etudiante ingénieure créative, j’ai participé pour la première année à ce défi.</p>
                        <p>Je me suis imposée deux contraintes : chaque pochette devait correspondre à un genre musical au hasard, et je devais écrire un ou plusieurs vers pour chaque.</p>

                        <p>Le site est codé en React.js.</p>
                        <p><a href='https://tiermaker.com/create/sgo-coverartober-17239203?fbclid=PAQ0xDSwK9XEFleHRuA2FlbQIxMQABp-iK0NgBJuQbNQfr4JQY25oJcGtSN3g14OHfq8aEphr9d_Wq_lyUWg4876Re_aem_7ADDLsoJYD_44xLNFz76oQ' rel="noreferrer" target='_blank'>Classez mes pochette et envoyez-moi le résultat !</a></p>

                        <div className='contacts'>
                            <h3>Me retrouver</h3>
                            <div className='contact-icons'>
                                <div className='mail-icon'>
                                    <a href='mailto:khandro.gaste@gmail.com' ><svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                                            fill="currentColor"
                                        />
                                        </svg></a>
                                </div>
                                <div >
                                    <a href='https://www.instagram.com/tr0l0catladybug/' rel="noreferrer" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
</svg></a>
                                </div>
                                <div><a href='https://github.com/SegoleneLazarus' rel="noreferrer"  target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
</svg>
                                    </a></div>
                            </div>
                            {/* mail / artsta / linkeding / github */}
                        </div>

                        <h3>Ressources</h3>
                        <p>fonds : <a href='https://textures.neocities.org/' rel="noreferrer" target='_blank'>https://textures.neocities.org/</a><br />
                        gif : <a href='https://pixelsea.neocities.org/' rel="noreferrer" target='_blank'>https://pixelsea.neocities.org/</a><br />
                        logo : <a href='https://textanim.com/' rel="noreferrer" target='_blank'>https://textanim.com/</a></p>
                    </div>

                </div>
                <p onClick={() => navigate(-1)} className='return-link'><a>&#x2039; Retourner à l'album</a></p>
                
            </div>
        </div>
    );
};

export default Apropos;