import React from "react";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="title">
        <span>Contact</span>
      </h2>
      <div className="flex social">
        <a href="">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="">
          <i className="fa-solid fa-mobile"></i>
        </a>
      </div>
      <div className="flex-center">
        <a href="" className="email-section flex-center">
          <span>your@email.com</span>
          <div className="email-icon flex-center">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </a>
      </div>
    </section>
  );
};
