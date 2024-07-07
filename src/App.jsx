import "./App.css";
import imgdev1 from "./assets/dev-bg.png";
import imgdev2 from "./assets/devendra_black_bg.png";

function App() {
  return (
    <>
      {/* <!-- dark mode button --> */}
      <input type="checkbox" id="darkmode" />
      <div className="wrapper">
        {/* <!-- dark mode button --> */}
        <label htmlFor="darkmode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- nav-bar --> */}
        <header>
          <div className="header container flex-center">
            <div className="logo flex">
              <div>Devendra</div>
              <div className="line">Soft. Engineer</div>
            </div>
            <label htmlFor="hamburgerMenu">
              <i className="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="hamburgerMenu" />
            <div className="menu">
              <ul className="flex navigation">
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
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {/* <!-- hero section --> */}
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
        {/* <!-- Skills --> */}
        <div className="skills" id="skills">
          <h2 className="title">
            <span>Skills</span>
          </h2>
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
        </div>
        {/* <!-- Projects --> */}
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
        {/* <!-- About me section --> */}
        <section className="about" id="about">
          <h2 className="title">
            <span>About Me</span>
          </h2>
          <div className="container flex about-content">
            <div className="flex-center my-imgae">
              <img src={imgdev2} alt="devendra-image-2" width="100%" />
            </div>
            <div className="my-bio container">
              <h2>Devendra Raj Dahal</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus officiis iusto asperiores illum, aliquid corporis
                necessitatibus tempora minus debitis quas nulla numquam magni,
                voluptas tempore sunt adipisci cumque est impedit? Dolores nulla
                praesentium rem, aspernatur assumenda blanditiis tenetur maxime
                rerum quasi laboriosam minima, nesciunt fuga pariatur quisquam
                hic ipsum numquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                cum illo porro aut commodi et voluptate at delectus deserunt
                ipsa.
              </p>
              <p>Sydney, Australia</p>
              <div>
                <div className="tag">Interest</div>
                <div className="flex">
                  <span>Gym</span>
                  <span>Programming</span>
                  <span>Travel</span>
                  <span>Movies</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Contact section --> */}
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
        {/* <!-- footer --> */}
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
      </div>
    </>
  );
}

export default App;
