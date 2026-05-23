import React from 'react';

const education = [
  {
    title:
      'Bachelor of Science in Information Technology (BSIT) at Cebu Technological University - Argao Campus',
    desc: 'Currently Studying',
  },
];

export default function Education() {
  return (
    <div className="projects-grid">
      {education.map((item) => (
        <div key={item.title} className="project">
          <strong>{item.title}</strong>
          <p className="muted">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}