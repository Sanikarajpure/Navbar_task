import React from "react";
import { default as piepng } from "../../images/pie-chart.png";
import "./jobs.css";

const Jobs = () => {
  return (
    <div>
      <div className="tasksHeader">
        <div className="tasksHeaderTitle">Jobs</div>
        <div className="headerViewMore"> View More</div>
      </div>
      <div>
        <img className="pieDummy" src={piepng} alt="pie_chart" />
      </div>
    </div>
  );
};
export default Jobs;
