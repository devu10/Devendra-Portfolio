import React from "react";

export const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <h2 className="title">
        <span>My Projects</span>
      </h2>

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
      </div>
    </section>
  );
};
