import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Accueil from './components/Accueil.jsx';
import Apropos from './components/aPropos.jsx';
import AffAlbums from './components/affAlbums.jsx';
import Cursor from './components/Cursor.jsx';


function App() {
  const location = useLocation();
  const pagesAvecCursor1 = ["/album"];
  const isCursor1 = pagesAvecCursor1.some((path) =>
    location.pathname.startsWith(path)
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

    if (isMobile) {
      return (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "sans-serif",
          fontSize: "1.5rem"
        }}>
          Le site n'est pas encore accessible sur mobile. <br />
          Merci de revenir sur un écran plus large.
        </div>
      );
    }


  return (
    <>
    <Cursor gif={isCursor1 ? "/music-0055.gif" : "/cd-music-pastel.gif"} />
    
    {/* <Cursor></Cursor> */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/album/:id" element={<AffAlbums />} />
        <Route path="/a-propos" element={<Apropos />} />
      </Routes>
    </>
  );
}

export default App;
