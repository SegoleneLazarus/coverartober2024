// src/components/CustomCursor.jsx

import React, { useEffect, useState } from "react";

const CustomCursor = ({gif}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = e => setPosition({ x: e.clientX, y: e.clientY });
    document.addEventListener("mousemove", move);
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", move);
      document.body.style.cursor = "auto";
    };
  }, []);


  return <img
      src={gif}
      alt="cursor"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "32px",
        height: "32px",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />;
};

export default CustomCursor;
