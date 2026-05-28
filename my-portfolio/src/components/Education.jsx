import React from 'react';

const education = [

  {
    title:
      'Bachelor of Science in Information Technology at Cebu Technological University - Argao Campus',
    desc: 'S.Y. 2023-Present',
  },
  {
    title:
      'Technical Vocational Livelihood (ICT Strand) - Computer System Servicing NCII at Argao National High School',
    desc: 'S.Y. 2021-2023',
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