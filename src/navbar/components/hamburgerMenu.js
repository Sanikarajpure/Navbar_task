import React, { useState, useRef, useEffect } from "react";
import "./hamburgerMenu.css";
import Collapsible from "./collapsible";
import Slide from "react-reveal/Slide";

const HamburgerMenu = () => {
  const [searchText, setSearchText] = useState("");
  const [inputShadow, setInputShadow] = useState("");

  const ref = useRef();
  useEffect(() => {
    let clickOutsidehandler = (event) => {
      if (!ref.current.contains(event.target)) setInputShadow(false);
    };
    document.addEventListener("mousedown", clickOutsidehandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsidehandler);
    };
  });

  var subLinksInspo = [
    "Explore Design Work",
    "New & NoteWorthy",
    "Playoffs",
    "Blog",
  ];
  var subLinksFindWork = [
    "Job Board",
    "Freelance Projects",
    "Want freelance design projects?",
    "Personalize your profile with video",
  ];
  var subLinksMarketPlace = [
    "Discover",
    "Graphics",
    "Fonts",
    "3D",
    "Templates",
    "Add-Ons",
    "Web Themes",
    "Open a Shop",
  ];
  var subLinksHire = [
    "About Dribbble Hiring",
    "Design Search",
    "List my Job Openings",
    "Post a Freelance Project",
  ];
  return (
    <div className="hamburgerDropdownContainer">
      <Slide left>
        <div>
          <div className="searchContainer">
            <div
              className={`serachInNav  ${inputShadow ? "focus" : ""}`}
              ref={ref}
            >
              <i class="fas fa-search"></i>

              <input
                className="searchInput"
                placeholder="Search"
                value={searchText ? searchText : ""}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                onFocus={() => {
                  setInputShadow(true);
                }}
              />
            </div>
          </div>

          <Collapsible title={"Inspiration"} subTitles={subLinksInspo} />
          <Collapsible title={"Find Work"} subTitles={subLinksFindWork} />
          <Collapsible title={"LearnDesign"} subTitles={""} />
          <Collapsible title={"Go Pro"} subTitles={""} />
          <Collapsible title={"MarketPlace"} subTitles={subLinksMarketPlace} />
          <Collapsible title={"Hire Designer"} subTitles={subLinksHire} />
        </div>
      </Slide>
    </div>
  );
};

export default HamburgerMenu;
