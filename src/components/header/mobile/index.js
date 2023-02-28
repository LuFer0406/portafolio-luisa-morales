import React from "react";
import "./mobile.css";
import { Cross1Icon } from "@radix-ui/react-icons";

const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <Cross1Icon />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">Proyectos</a>
        </div>
        <div className="mobile-option">
          <a href="#skills">Habilidades</a>
        </div>
        <div className="mobile-option">
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
