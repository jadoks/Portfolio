// src/components/Experience.jsx
import React from 'react';
const projects = [
  {
    title: 'Web Development Practice Projects',
    desc: 'Created small websites and UI layouts using HTML, CSS, JavaScript, and React to strengthen front-end development skills. Focused on responsive design and clean user interface implementation.',
  },
  {
    title: 'UI/UX Design Exploration',
    desc: 'Designed simple user interfaces and prototypes for personal or school projects. Practiced wireframing, layout organization, and user-centered design principles.',
  },
  {
    title: 'Network Configuration Tasks (School Activities)',
    desc: 'Performed basic network configuration exercises such as IP addressing, subnetting, router setup, and LAN configuration as part of IT coursework.',
  },
    {
    title: 'Programming Coursework and Mini Projects',
    desc: 'Built small programs and solved logic-based tasks using different programming fundamentals learned in BSIT subjects.',
  },
    {
    title: 'Collaborative Academic Projects',
    desc: 'Worked with classmates to develop group projects, troubleshoot issues, and present outputs—strengthening teamwork, communication, and problem-solving abilities.',
  },
      {
    title: 'Dean’s List Achievement',
    desc: 'Recognized for outstanding academic performance in multiple semesters, demonstrating consistency, dedication, and strong work ethic in BSIT coursework.',
  },
];

export default function Experience() {
  return (
    <div className="item">
      <h4>Experience</h4>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj.title} className="project">
            <strong>{proj.title}</strong>
            <p className="muted">{proj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}