import React from 'react';

const education = [
  {
    title:
      'Canbanua Elementary School',
    desc: 'S.Y. 2012-2018',
  },
  {
    title:
      'Argao National High School',
    desc: 'S.Y. 2018-2023',
  },
  {
    title:
      'Cebu Technological University (BSIT Student) - Argao',
    desc: 'S.Y. 2023-Present',
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