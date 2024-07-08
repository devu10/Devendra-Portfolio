import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="flex-center">
        <div className="top flex">
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="socials">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href="">GitHub</a>
              </li>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">FaceBook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">&copy devudevu10@gmail.com</div>
      </footer>
      <a href="#hero" className="scroll-up">
        <i className="fa-solid fa-chevron-up"></i>
      </a>
    </>
  );
};
