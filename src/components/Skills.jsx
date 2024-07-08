import React from "react";
import { Title } from "./Title";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Title title={"Skills"} />
      <div className="container flex skills-container">
        <div>
          <i className="fa-brands fa-html5" style={{ color: "black" }}></i>
          <span>HTML</span>
        </div>
        <div>
          <i
            className="fa-brands fa-css3-alt"
            style={{ color: "rgb(114, 60, 35)" }}
          ></i>
          <span>CSS</span>
        </div>
        <div>
          <i className="fa-node-js fa-brands"></i>
          <span>JavaScript</span>
        </div>
        <div>
          <i className="fa-git-alt fa-brands"></i>
          <span>Git</span>
        </div>
        <div>
          <i className="fa-java fa-brands"></i>
          <span>JAVA</span>
        </div>
        <div>
          <i
            className="fa-brands fa-android"
            style={{ color: "rgba(5, 129, 5, 0.959)" }}
          ></i>
          <span>Android</span>
        </div>
      </div>
    </section>
  );
};
