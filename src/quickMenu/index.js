import React from "react";
import "./quickMenu.css";

const QuickMenu = () => {
  return (
    <div className="quickMenuWrapper">
      <div className="quickMenuContainer">
        <div className="menuItem">
          <div className="menuiconContainer">
            <i class="fas fa-chart-line"></i>
          </div>
          <div className="quickMenuTitle">DashBoard</div>
        </div>
        <div className="menuItem">
          <div className="menuiconContainer">
            <i class="fas fa-inbox"></i>
          </div>
          <div className="quickMenuTitle">Inbox</div>
        </div>
        <div className="menuItem">
          <div className="menuiconContainer">
            <i class="fas fa-user-friends"></i>
          </div>
          <div className="quickMenuTitle">Candidates</div>
        </div>
        <div className="menuItem">
          <div className="menuiconContainer">
            <i class="fas fa-briefcase"></i>
          </div>
          <div className="quickMenuTitle">Jobs</div>
        </div>
      </div>
    </div>
  );
};

export default QuickMenu;
