import React, { useState } from "react";
import "./collapsible.css";
import Slide from "react-reveal/Slide";

const Collapsible = ({ title, icon }) => {
  const [collapseOpen, setCollapseOpen] = useState("");
  return (
    <div className="collapsibleWrapper">
      <div className="iconContainer">{icon}</div>
      <div
        className="navTitle"
        onClick={() => {
          setCollapseOpen(!collapseOpen);
        }}
      >
        {title}
      </div>
    </div>
  );
};
export default Collapsible;
