import React, { useState } from "react";
import "./hamburgerMenu.css";
import Collapsible from "./collapsible";
import Slide from "react-reveal/Slide";

const HamburgerMenu = () => {
  

  return (
    <div className="hamburgerDropdownContainer">
      <Slide left>
        <div>
          <div className="logoContainer">
            <i class="fas fa-users"></i>Tiimi
          </div>

          <Collapsible
            title={"Dashboard"}
            icon={<i class="fas fa-chart-line"></i>}
          />
          <Collapsible title={"Inbox"} icon={<i class="fas fa-inbox"></i>} />
          <Collapsible
            title={"Calendar & Todos"}
            icon={<i class="fas fa-calendar-day"></i>}
          />

          <p className="categoryTitle">RECRUTMENT</p>
          <Collapsible title={"Jobs"} icon={<i class="fas fa-briefcase"></i>} />
          <Collapsible
            title={"Candidates"}
            icon={<i class="fas fa-user-friends"></i>}
          />
          <Collapsible
            title={"My Referals"}
            icon={<i class="fas fa-link"></i>}
          />
          <Collapsible
            title={"Career Site"}
            icon={<i class="fas fa-laptop"></i>}
          />
          <p className="categoryTitle">ORGANIZATION</p>
          <Collapsible title={"Employpee"} icon={<i class="fas fa-user"></i>} />
          <Collapsible
            title={"Structure"}
            icon={<i class="fas fa-sitemap"></i>}
          />
          <Collapsible
            title={"Report"}
            icon={<i class="fas fa-chart-pie"></i>}
          />
          <Collapsible title={"Setting"} icon={<i class="fas fa-cogs"></i>} />
        </div>
      </Slide>
    </div>
  );
};

export default HamburgerMenu;
