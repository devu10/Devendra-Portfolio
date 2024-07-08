import React from "react";
import imgdev1 from "../assets/dev-bg.png";

export const Hero = () => {
  return (
    <>
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi I`m <span>Devendra Dahal</span>
            </div>

            <div className="tag">Soft. Engineer</div>
            <p>I am a tech Enthusiast who is passionate For coding.</p>
            <div>
              <a href="./assets/cv.txt" download>
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="right flex">
            <img src={imgdev1} alt="devendra-img" />
          </div>
        </div>
      </section>
      {/* <!-- BAnner --> */}
      <section className="flex banner container">
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>Graduate</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>5 +</span>
            <p>Projects</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1 +</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};
