// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'StudyTrack',
    desc: 'A class & schedule tracker for students.',
    image: 'StudyTrack.png',
  },
  {
    title: 'VroomEase',
    desc: 'A Vehicle Rental System.',
    image: 'VroomEase.png',
  },

];

export default function Projects() {
  return (
    <div className="item">
      <h4>Projects</h4>

      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj.title} className="project">
            {/* Image above the title */}
            <img
              src={proj.image}
              alt={`${proj.title} illustration`}
              className="project-image"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                marginBottom: '1rem',
              }}
            />

            <strong>{proj.title}</strong>
            <p className="muted">{proj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}