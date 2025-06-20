import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import albumsData from '../data/albumData';
import '../styles/album.css';
import "../styles/player.css";
import teteMii from '../assets/tete_mii.png';
import musicGif from '../assets/music-0130.gif';
import explication from '../assets/explication.png';
import telecharger from '../assets/telecharger3.png';
import NewPlayer from './NewPlayer';
import PopUp from './PopUp';

const Album = ({ showAltCover, setShowAltCover,isPlaying, setIsPlaying }) => {
    const { id } = useParams();
    const album = albumsData[parseInt(id)];

    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleCover = () => setShowAltCover((prev) => !prev);
    const imageRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    // const [isPlaying, setIsPlaying] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const playerRef = useRef();
    
    useEffect(() => {
    const newIndex = parseInt(id);
    setCurrentIndex(newIndex);
  }, [id]);

  useEffect(() => {
    // 🔁 Reset du player quand currentIndex change
    if (playerRef.current) {
      playerRef.current.reset();
    }
  }, [currentIndex]);

    const handlePlayClick = () => {
      playerRef.current.toggle();
    // setIsPlaying(prev => !prev);
    };

    return (

      <div className='album-container-wrapper'>
        

        <div className="album-container">

          <div className={`album current-album album-wrapper 
          `}        >
              
            

              <div className={`image-overlay-wrapper ${hovered ? "hovered" : ""}`}
              >
                <img
                  src={showAltCover ? album.cover2 : album.cover}
                  alt={album.title}
                  className="album-image"
                />


                <div
                    className="hover-layer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    {hovered && (
                      <button className="play-button" onClick={handlePlayClick}>
                        {isPlaying ? "⏸" : "▶"}
                      </button>
                    )}
                  </div>

                <div onClick={() => setIsPopupOpen(true)} className='teteMii '>
                  <img 
                  className='img-flex' 
                  src={teteMii} alt="tete de mii" />
                  <img className='hover-image' src={explication} alt="image au hover" />
                </div>
              </div>

              <div className='telecharger' title="Télécharger l'image">
               <a href={album.cover} download> <img
                  src={telecharger}           alt='logo coverartober'
                  className='img-flex'
                  /></a>
              </div>

              {album.cover2 && (
              <div className="slider-container">
                <label className="slider-label">
                  <input
                    type="checkbox"
                    className="slider"
                    checked={showAltCover}
                    onChange={toggleCover}
                  />
                </label>
              </div>
              )}
            
          </div>

          <NewPlayer ref={playerRef} 
          // currentIndex={parseInt(id)} 
          key={currentIndex}
          currentIndex={currentIndex} 
          setCurrentIndex={setCurrentIndex}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
           />

        </div>

        {isPlaying && (
          <div className='music-encours'>
            <img title='Musique en cours' src={musicGif} alt='animation de musique' className='music-animation' />
            {/* <p className='music-text'>Musique en cours</p> */}
          </div>
        )}

        {isPopupOpen && (
          <PopUp 
            isOpen={isPopupOpen} 
            onClose={() => setIsPopupOpen(false)} 
            album={album} 
          />
        )}

      </div>
    );
};

export default Album;