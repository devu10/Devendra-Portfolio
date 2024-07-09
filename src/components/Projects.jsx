import React from "react";
import p from "../assets/project-portfolio.png";
import { Title } from "./Title";
import { Card } from "./Card";

export const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <Title title={"My Projects"} />

      <div className="grid project-list">
        {/* <!-- project 1 --> */}
        <div className="project-card">
          <div className="top">
            <img
              src="./assets/Project-1.JPG"
              alt="Project-thumbnail"
              width="100%"
            />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Personal Portfoli</h3>
            <p>Tech: HTML, CSS, Javascript</p>
          </div>
        </div>
        {/* <!-- projecat 2 --> */}
        <div className="project-card">
          <div className="top">
            <img
              src="./assets/Project-1.JPG"
              alt="Project-thumbnail"
              width="100%"
            />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Personal Portfoli</h3>
            <p>Tech: HTML, CSS, Javascript</p>
          </div>
        </div>
        {/* <!-- project 3 --> */}
        <div className="project-card">
          <div className="top">
            <img
              src="./assets/Project-1.JPG"
              alt="Project-thumbnail"
              width="100%"
            />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Personal Portfoli</h3>
            <p>Tech: HTML, CSS, Javascript</p>
          </div>
        </div>
        {/* <!-- project 4 --> */}
        <Card
          image={p}
          github={"https://github.com/devu10/Devendra-Portfolio.git"}
          url={
            "https://devendra-portfolio-1dswqolab-devendra-dahals-projects.vercel.app/"
          }
          title={"portfolio of self"}
          description={"this is the  description"}
        />
      </div>
    </section>
  );
};
