import React, { useState, useRef, useEffect } from "react";
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
      <div className="headerActions">
        <div className="yourOrgContainer">
          <div className="yourOrgLogo">
            <div className="orgTitle">Your Organization</div>
            <div className="orgName">Augmentik Tech</div>
          </div>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div className="userActions">
          <div className="searchContainerNav">
            <div className="search">
              <i class="fas fa-search"></i>
            </div>
          </div>
          <div className="notificationContainer">
            <div className="notifications">
              <i class="far fa-bell"></i>
            </div>
          </div>
          <div className="profileContainer">
            <div className="profilePicture"></div>
          </div>
        </div>
      </div>

      {menuOpen ? <HamburgerMenu /> : ""}
    </div>
  );
};

export default Header;
