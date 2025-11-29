// src/components/Education.jsx
import React from 'react';
const projects = [
  {
    title: ' Bachelor of Science in Information Technology (BSIT) at Cebu Techonlogical University - Argao Campus',
    desc: 'Currently Studying',
  },
];
export default function Education() {

  return (
    <div className="item">
      <h4>Education</h4>
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