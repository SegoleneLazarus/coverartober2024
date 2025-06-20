import { useEffect, useState } from "react";

const App = () => {
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
    <div>
      {/* Ton site ici */}
      <h1>Bienvenue sur mon site !</h1>
    </div>
  );
};

export default App;
