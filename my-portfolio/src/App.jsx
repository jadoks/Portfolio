import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Name from "./components/Name.jsx";
import Profile from "./components/Profile.jsx";
import Skills from "./components/Skills.jsx";
import Interest from "./components/Interest.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/Certificates.jsx";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar fade-in">
        <div className="nav-brand">
          <div className="logo-text">
            <span>JD</span>
          </div>

          <div className="brand-info">
            <span>Jade</span>
            <small>Beginner Developer</small>
          </div>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#profile" onClick={closeMenu}>
            <i className="bi bi-house-door-fill"></i>
            <span>Home</span>
          </a>

          <a href="#experience" onClick={closeMenu}>
            <i className="bi bi-briefcase-fill"></i>
            <span>Experience</span>
          </a>

          <a href="#education" onClick={closeMenu}>
            <i className="bi bi-mortarboard-fill"></i>
            <span>Education</span>
          </a>

          <a href="#projects" onClick={closeMenu}>
            <i className="bi bi-folder-fill"></i>
            <span>Projects</span>
          </a>

          <a href="#certificates" onClick={closeMenu}>
            <i className="bi bi-award-fill"></i>
            <span>E-Certificates</span>
          </a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            <i
              className={
                theme === "dark"
                  ? "bi bi-sun-fill"
                  : "bi bi-moon-stars-fill"
              }
            ></i>
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
          </button>
        </div>
      </nav>

      <div className="container">
        <main className="main-container">
          <section className="fade-in slide-left profile-container" id="profile">
            <div className="profile-left">
              <Name />
              <Profile />
              <About />
              <Skills />
              <Interest />
            </div>

            <div className="profile-right">
              <Header />
            </div>
          </section>

          <section className="section fade-in" id="experience">
            <h3>Experience</h3>
            <div className="timeline">
              <Experience />
            </div>
          </section>

          <section className="section fade-in" id="education">
            <h3>Education</h3>
            <div className="timeline">
              <Education />
            </div>
          </section>

          <section className="section fade-in" id="projects">
            <h3>Academic Projects</h3>
            <div className="timeline">
              <Projects />
            </div>
          </section>

          <section className="section fade-in" id="certificates">
            <h3>E-Certificates</h3>
            <div className="timeline">
              <Certificates />
            </div>
          </section>
        </main>
      </div>
      <footer className="footer fade-in">
        <p>&copy; 2026 Jade "Jadok" Lisondra. All rights reserved.</p>
      </footer>
    </>
    
  );
}