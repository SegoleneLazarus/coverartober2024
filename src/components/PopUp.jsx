import React , { useState, useEffect, useRef } from 'react';
import albumsData from '../data/albumData';
import '../styles/popup.css';

function PopUp({isOpen, onClose, album}) {
    
    const scrollRef = useRef();
    const [thumbHeight, setThumbHeight] = useState(0);
    const [thumbTop, setThumbTop] = useState(0);

    const thumbRef = useRef(null);
const isDragging = useRef(false);
const dragStartY = useRef(0);
const scrollStart = useRef(0);

const startDrag = (e) => {
  isDragging.current = true;
  dragStartY.current = e.clientY;
  scrollStart.current = scrollRef.current.scrollTop;
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
};

const onDrag = (e) => {
  if (!isDragging.current) return;
  const el = scrollRef.current;
  const deltaY = e.clientY - dragStartY.current;
  const scrollRatio = el.scrollHeight / el.clientHeight;
  el.scrollTop = scrollStart.current + deltaY * scrollRatio;
};

const stopDrag = () => {
  isDragging.current = false;
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
};

const scrollUp = () => {
  scrollRef.current.scrollBy({ top: -50, behavior: "smooth" });
};

const scrollDown = () => {
  scrollRef.current.scrollBy({ top: 50, behavior: "smooth" });
};

    useEffect(() => {
        const el = scrollRef.current;
        const updateThumb = () => {
            const heightRatio = el.clientHeight / el.scrollHeight;
            const topRatio = el.scrollTop / el.scrollHeight;
            setThumbHeight(heightRatio * 100);
            setThumbTop(topRatio * 100);
        };

        el.addEventListener('scroll', updateThumb);
        updateThumb(); // call once on mount

        return () => el.removeEventListener('scroll', updateThumb);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
        {/* Fond flouté ou semi-transparent qui couvre tout l'écran */}
       
            <div className="popup-container">
                {/* Conteneur centré avec image de livre en fond (position: fixed) */}

                <div className="popup-content">

                    <div className="scroll-container">
                        <div className="scroll-inner"  ref={scrollRef}>
                
                            <h1>{album.title}</h1>
                            <p className='vers'>
                                {album.vers.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                                ))}
                            </p>
                            <h2>{album.style}</h2>
                            <p className='histo'>{album.historique} <i>- Wikipédia</i></p>
                            <h2>Crédits</h2>
                            <p className='credit'>Apparait sur l'image :</p>
                                 <div className='credits'>
                                 {album.credits.map((credit, index) => (
                                <p key={index}>
                                <a href={credit.reseau} target="_blank">{credit.pseudo}</a>
                                </p>
                                ))}</div>
                            
                            
                            {/* <h2>Commentaire</h2>
                            <p>{album.commentaire}</p> */}
                            <h2>Recommendations</h2>
                            <p className='reco'>En cours : <a href={album.playlist[0].yt} target="_blank">{album.playlist[0].title} - {album.playlist[0].artiste} </a></p>
                            {/* <p className='reco'>Liste de lecture : <a href={album.playlist[1].yt} target="_blank">{album.playlist[1].title} </a></p> */}

                        </div>
                    </div>

                    <div className="custom-scrollbar">
                        <div className="scroll-button up" onClick={scrollUp}>▲</div>

                        <div className="thumb-track">
                            <div className="scroll-thumb"
                            style={{ height: `${thumbHeight}%`, top: `${thumbTop}%` }}
                            ref={thumbRef}
                            onMouseDown={startDrag}
                            ></div>
                         </div>
                        <div className="scroll-button down" onClick={scrollDown}>▼</div>
                    </div>
                </div>

                <button className="popup-close"  onClick={onClose}>✕</button>

            </div>
        </div>
    );
}

export default PopUp;