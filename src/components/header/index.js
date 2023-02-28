import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web";
import { FaBars } from "react-icons/fa";

function Header() {
  // Estados
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">LM</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="menu-icon"/>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
      </div>
    </div>
  );
}

export default Header;
