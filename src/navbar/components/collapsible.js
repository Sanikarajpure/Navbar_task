import React, { useState } from "react";
import "./collapsible.css";
import Slide from "react-reveal/Slide";

const Collapsible = ({ title, subTitles }) => {
  const [collapseOpen, setCollapseOpen] = useState("");
  return (
    <div className="collapsibleWrapper">
      <div
        className="navTitle"
        onClick={() => {
          setCollapseOpen(!collapseOpen);
        }}
      >
        {title}
        <div>
          {subTitles ? (
            collapseOpen ? (
              <i class="fas fa-chevron-up"></i>
            ) : (
              <i class="fas fa-chevron-down"></i>
            )
          ) : (
            ""
          )}
        </div>
      </div>

      <div
        className={`navSubTitleContainer  ${collapseOpen ? "open" : "closed"}`}
      >
        {subTitles
          ? subTitles.map((ele) => <div className="navSubTitle">{ele}</div>)
          : ""}
      </div>
    </div>
  );
};
export default Collapsible;
