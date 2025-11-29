// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A personal portfolio built with React and Vite showcasing projects and blog posts.',
  },
  {
    title: 'StudyTrack',
    desc: 'A class & schedule tracker for students.',
  },
  {
    title: 'VroomEase',
    desc: 'A Vehicle Rental System.',
  },
    {
    title: 'TaskRoster',
    desc: 'A system that designed for managers to manage employees and assign shifts.',
  },
];

export default function Projects() {
  return (
    <div className="item">
      <h4>Projects</h4>
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