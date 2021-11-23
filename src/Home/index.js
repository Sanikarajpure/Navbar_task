import React from "react";
import Tasks from "./components/tasks";
import QuickMenu from "../quickMenu";
import Jobs from "./components/jobs";
import "./home.css";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="dummyDataWrapper">
        <Tasks />
        <div className="chartsDummy">
          <Jobs />
        </div>
      </div>
      <div className="quickMenuHome">
        <QuickMenu />
      </div>
    </div>
  );
};
export default Home;
