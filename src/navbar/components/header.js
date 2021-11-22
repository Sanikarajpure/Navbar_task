import React, { useState } from "react";
import "./header.css";
import HamburgerMenu from "./hamburgerMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="headerWrapper">
      <div
        className={`menuBtn ${menuOpen ? "open" : ""}`}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <div className="menuBtnHamburger"></div>
      </div>
      <div className="headerLogo">Dribbble</div>
      <div className="signInBtn">Sign-In</div>

      {menuOpen ? <HamburgerMenu /> : ""}
    </div>
  );
};

export default Header;
