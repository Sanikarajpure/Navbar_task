import React from "react";
import "./oneTask.css";

const OneTask = ({ time, description, color }) => {
  return (
    <div className="oneTaskWrapper">
      <div
        className="oneTaskContainer"
        style={{ borderLeft: `7px solid ${color}` }}
      >
        <div className="timeContainer">
          <div className="clockIcon">
            <i class="far fa-clock"></i>
          </div>
          <div className="timeDetails">{time}</div>
        </div>
        <div className="oneTaskDetailsBlock">
          <div className="taskDescription">{description}</div>
          <div className="checkIcon">
            <i class="fas fa-check-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneTask;
