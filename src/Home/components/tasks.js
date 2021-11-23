import React, { useState } from "react";
import OneTask from "./oneTask";
import "./tasks.css";


const Tasks = () => {
  const [taskSelect, setTaskSelect] = useState("today");
  var yellow = "#F3CB2D";
  var green = "#0DA352";
  var red = "#F34E2D";
  return (
    <div className="tasksWrapper">
      <div className="tasksHeader">
        <div className="tasksHeaderTitle">My Tasks</div>
        <div className="headerViewMore"> View More</div>
      </div>
      <div className="tasksContainer">
        <div className="tasksMenu">
          <div
            className={`taskMenuTitle ${
              taskSelect === "today" ? "active" : ""
            }`}
            onClick={() => {
              setTaskSelect("today");
            }}
          >
            Today
          </div>
          <div
            className={`taskMenuTitle ${
              taskSelect === "completed" ? "active" : ""
            }`}
            onClick={() => {
              setTaskSelect("completed");
            }}
          >
            Completed
          </div>
        </div>
        <div className="tasksBlock">
          {taskSelect === "today" ? (
            <div>
              <OneTask
                time={"07:00 - 0.7:45AM"}
                description={
                  "Interview with candidates from product designer applicant"
                }
                color={yellow}
              />
              <OneTask
                time={"07:00 - 0.7:45AM"}
                description={
                  "Interview with candidates from product designer applicant"
                }
                color={red}
              />
              <OneTask
                time={"07:00 - 0.7:45AM"}
                description={
                  "Interview with candidates from product designer applicant"
                }
                color={green}
              />
              <OneTask
                time={"07:00 - 0.7:45AM"}
                description={
                  "Interview with candidates from product designer applicant"
                }
                color={yellow}
              />
            </div>
          ) : taskSelect === "completed" ? (
            <div>
              <OneTask
                time={"07:00 - 0.7:45AM"}
                description={
                  "Interview with candidates from product designer applicant"
                }
                color={green}
              />
              <OneTask
                time={"07:00 - 0.7:45AM"}
                description={
                  "Interview with candidates from product designer applicant"
                }
                color={green}
              />
              <OneTask
                time={"07:00 - 0.7:45AM"}
                description={
                  "Interview with candidates from product designer applicant"
                }
                color={yellow}
              />
              <OneTask
                time={"07:00 - 0.7:45AM"}
                description={
                  "Interview with candidates from product designer applicant"
                }
                color={green}
              />
            </div>
          ) : (
            ""
          )}





        </div>
      </div>
    </div>
  );
};

export default Tasks;
