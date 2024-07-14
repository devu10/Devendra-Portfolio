import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";

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

        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        {/* <!-- hero and banner section --> */}

        {/* <Hero /> */}

        {/* <!-- Skills --> */}
        {/* <Skills /> */}
        {/* <!-- Projects --> */}

        {/* <Projects /> */}
        {/* <!-- About me section --> */}

        {/* <AboutMe /> */}
        {/* <!-- Contact section --> */}
        {/* <Contact /> */}
        {/* <!-- footer --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
