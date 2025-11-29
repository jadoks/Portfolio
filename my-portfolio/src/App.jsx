import React from 'react';
import './App.css';

// Components
import Header from "./components/Header.jsx";
import Name from "./components/Name.jsx";
import Profile from "./components/Profile.jsx";
import Skills from "./components/Skills.jsx";
import Interest from "./components/Interest.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <div className="container"> 
      <div className="grid">
        {/* SIDEBAR */}
        <aside className="card fade-in slide-left">
          <Header />
          <Name />
          <Profile />
          <Skills />
          <Interest />
        </aside>

        {/* MAIN */}
        <main>
          <About />
          <section className="card section fade-in">
            <h3>Professional Profile</h3>
            <div className="timeline">
              <Experience />
              <Education />
              <Projects />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}