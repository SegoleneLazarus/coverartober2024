import { useState, useRef } from 'react';
import bulletxt from "../assets/bulletxt.png";
import pxart from "../assets/pxArt.png";
import "../styles/accueil.css";
import PetitBouton from './PetitBouton';
import { useNavigate } from 'react-router-dom';

const sons = [
  "/sons/circus-boing.mp3",
  "/sons/cartoon-boing.mp3",
  "/sons/cartoon-boing_2.mp3",
  "/sons/cartoon-boing_3.mp3",
];

const sonsNon = [
  "/sons/non/non-01.mp3",
  "/sons/non/non-02.mp3",
  "/sons/non/non-03.mp3",
  "/sons/non/non-04.mp3",
  "/sons/non/non-05.mp3",
  "/sons/non/non-06.mp3",
  "/sons/non/non-07.mp3",
  "/sons/non/non-08.mp3",
  "/sons/non/non-09.mp3",
  "/sons/non/non-10.mp3",
  "/sons/non/non-11.mp3",
  "/sons/non/non-12.mp3",
  "/sons/non/non-13.mp3",
  "/sons/non/non-14.mp3",
  "/sons/non/non-15.mp3",
  "/sons/non/non-16.mp3",
  "/sons/non/non-17.mp3",
  "/sons/non/non-18.mp3",
  "/sons/non/non-19.mp3",
  "/sons/non/non-20.mp3",
  "/sons/non/non-21.mp3",
  "/sons/non/non-22.mp3",
  "/sons/non/non-23.mp3",
  "/sons/non/non-24.mp3",
  "/sons/non/non-25.mp3",
  "/sons/non/non-26.mp3",
  "/sons/non/non-27.mp3",
  "/sons/non/non-28.mp3",
  "/sons/non/non-29.mp3",
  "/sons/non/non-30.mp3",
  "/sons/non/non-31.mp3",
  "/sons/non/non-32.mp3",
  "/sons/non/non-33.mp3",
  "/sons/non/non-34.mp3",
  "/sons/non/non-35.mp3",
  "/sons/non/non-36.mp3",
  "/sons/non/non-37.mp3",
  "/sons/non/non-38.mp3",
  "/sons/non/non-39.mp3",
  "/sons/non/non-40.mp3",
  "/sons/non/non-41.mp3",
  "/sons/non/non-42.mp3",
  "/sons/non/non-43.mp3",
  "/sons/non/non-44.mp3",
  "/sons/non/non-45.mp3",
  "/sons/non/non-46.mp3",
  "/sons/non/non-47.mp3",
  "/sons/non/non-48.mp3",
];



const Accueil = () => {
  const [view, setView] = useState('accueil');
  const navigate = useNavigate();

  

  const [isCrushed, setIsCrushed] = useState(false);
  const [isRefused, setIsRefused] = useState(false);
  const sonIndexRef = useRef(0);

  const handleCrush = () => {
    setIsCrushed(true);
    setTimeout(() => setIsCrushed(false), 150);

    const sonIndex = Math.floor(Math.random() * sons.length);
    const audio = new Audio(sons[sonIndex]);
    audio.play();
  };

  

  const handleClickOui = () => {
    setView('accueilOUI');
  };

  const handleClickNon = () => {
    setIsRefused(true);
    setTimeout(() => setIsRefused(false), 150);

    const audio2 = new Audio(sonsNon[sonIndexRef.current]);
    audio2.play().catch((e) => console.error("Erreur de lecture :", e));

    sonIndexRef.current = (sonIndexRef.current + 1) % sonsNon.length;
  };

  const handleClickGourmand = () => {
    const index =[5,27,18,9,2];
    const randomIndex = Math.floor(Math.random() * index.length);
    const newIndex = index[randomIndex];
    navigate(`/album/${newIndex}`);
  };
  const handleClickRevolte = () => {
    const index =[14,3,26,1,10];
    const randomIndex = Math.floor(Math.random() * index.length);
  const newIndex = index[randomIndex];
    navigate(`/album/${newIndex}`);
  };
  const handleClickParanoia = () => {
    const index =[6,16,30,21,15,4,12];
    const randomIndex = Math.floor(Math.random() * index.length);
  const newIndex = index[randomIndex];
    navigate(`/album/${newIndex}`);
  };
  const handleClickDanseur = () => {
    const index =[8,13,25,19,28,29,0,11];
    const randomIndex = Math.floor(Math.random() * index.length);
  const newIndex = index[randomIndex];
    navigate(`/album/${newIndex}`);
  };
  const handleClickAmoureux = () => {
    const index =[20,22,17,23,7,12];
    const randomIndex = Math.floor(Math.random() * index.length);
  const newIndex = index[randomIndex];
    navigate(`/album/${newIndex}`);
  };


    return (
      <div className="debut">
        {view === 'accueil' && (

          <div className="accueil">

            <div className="Mii">              
              <img className={`pxart fit-img crush ${isCrushed ? "active" : ""}`} alt="Mii" src={pxart} onClick={handleCrush}/>
              {/* <div className="ombre" /> */}
            </div>

            <div className="bulles">
              <div className="texte">
                <p className="salut">
                  Salut. <br /> <br />
                  Je collectionne des CDs.
                  <br /> <br />
                  Ca t’intéresse ?
                </p>
                <img className="bulletxt fit-img" alt="Bulletxt" src={bulletxt} />
              </div>

              <div className="reponse">
                <PetitBouton text="Oui !" onClick={handleClickOui} /> 
                <PetitBouton className={`refused ${isRefused ? "active" : ""}`} text="Non..." onClick={handleClickNon} />
              </div>
            </div>
            

            

          </div>
        )}

        {view === 'accueilOUI' && (
          <div className="accueilOui">
            <div className="Mii">              
              <img className={`pxart fit-img crush ${isCrushed ? "active" : ""}`} alt="Mii" src={pxart} onClick={handleCrush}/>
              
              {/* <div className="ombre" /> */}
            </div>

            <div className="bulles">
              <div className="texte">
                <p className="salut">
                  Si tu me dis comment tu te sens, <br />
                  <br /> 
                  Je t'en ferai écouter un.
                </p>
                <img className="bulletxt fit-img" alt="Bulletxt" src={bulletxt} />
              </div>

              <div className="reponse">
                <div className="ligneH"><PetitBouton text="Révolté" onClick={handleClickRevolte} /> 
                <PetitBouton text="Gourmand" onClick={handleClickGourmand} />
                <PetitBouton text="Paranoïa" onClick={handleClickParanoia} /></div>
                
                <div className="ligneB">
                <PetitBouton text="Danseur" onClick={handleClickDanseur} />
                <PetitBouton text="Amoureux" onClick={handleClickAmoureux} /></div>
              </div>

            </div>
          </div>
        )}

    </div>
    );
};

export default Accueil;
