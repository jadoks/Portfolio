import React from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Name from './components/Name';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Interest from './components/Interest';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

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