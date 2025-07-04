import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import albumsData from '../data/albumData';
import '../styles/album.css';
import catLogo from '../assets/catLogo.gif';
import "../styles/player.css";
import "../styles/affAlbums.css";
import Album from './Album';

const AffAlbums = () => {
  const { id } = useParams();           // l'id actuel dans l'URL
  const navigate = useNavigate(); 
    const [showAltCover, setShowAltCover] = useState(false);
    const [view, setView] = useState('affAlbum');
    const albumId = parseInt(id, 10);
    const [selectedAlbumIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);


    const resetCover = () => {
      setShowAltCover(false); 
    };
    const handleClickGallery = () => {
      setView('gallerie');
    };
    const handleClickAlbum = () => {
      setView('affAlbum');
    };

    const handleNext = () => {
      navigate(`/album/${albumId + 1}`);
      setShowAltCover(false);
      if(albumId===30) {
        navigate(`/album/0`);
      }
    };

    const handlePrev = () => {
      if (albumId > 0) navigate(`/album/${albumId - 1}`);
      setShowAltCover(false);
      if(albumId===0) {
        navigate(`/album/30`);
      }
    };

    const handleRandom = () => {
      const randomId = Math.floor(Math.random() * 31); // ex: 1 à 31
      navigate(`/album/${randomId}`);
      setShowAltCover(false);
    };

    const handlePropos = () => {
      navigate('/a-propos')
    }

    return (

      <div className={`gallery-container ${view === 'gallerie' ? 'bg-gallery' : 'bg-affAlbum'}`}>
        <header>
          <img
              src={catLogo}
              alt="logo coverartober"
              className="img-flex logo"
            />
        </header>

        {view === 'affAlbum' && (

          <div className="aff-album">
            <Album showAltCover={showAltCover} 
              setShowAltCover={setShowAltCover} 
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}/>

            <nav className='aa'>
              <ul>
                <li>
  <button onClick={handleClickGallery} className="nav-link">
    Voir tous les albums
  </button>
</li>
<li>
  <button onClick={handleNext} className="nav-link">
    Album suivant
  </button>
</li>
<li>
  <button onClick={handlePrev} className="nav-link">
    Album précédent
  </button>
</li>
<li>
  <button onClick={handleRandom} className="nav-link">
    Album aléatoire
  </button>
</li>
              </ul>
            </nav>

          </div>
        )}

        {view === 'gallerie' && (

          <div className="gallery">

            <Album showAltCover={showAltCover}
              setShowAltCover={setShowAltCover} 
              album={albumsData[selectedAlbumIndex]}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              />

            <div className="album-grid">
              {albumsData.map((album, index) => (
                <div key={index} className="album-item">
                  <img
                  className={`album-gallery-cover img-flex ${
              albumId === index ? 'active' : 'inactive'
            }`}
                    src={album.cover}
                    alt={`Album ${index + 1}`}
                    onClick={() => {
                      navigate(`/album/${index}`);
                      resetCover();
                    }}
                  />
                </div>
              ))}

              
            </div>

            <nav className='aa'>
              <ul>
                <button onClick={handleClickAlbum} className="nav-link">
    Voir l'album seul
  </button>
                {/* <li><a onClick={handleNext}>Album suivant</a></li>
                <li><a onClick={handlePrev}>Album précédent</a></li>
                <li><a onClick={handleRandom}>Album aléatoire</a></li> */}
              </ul>
            </nav>

          </div>


        )}

        <footer>
          <button onClick={handlePropos} className="footer-link">
    A propos
  </button>
        </footer>


        



      </div>
    );
};

export default AffAlbums;