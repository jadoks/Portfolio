import React from 'react';

const projects = [
  {
    title: 'TESDA - Data Analytics NC III',
    desc: 'Demonstrated proficiency in data management, interpretation, and structural problem-solving. Analyzed complex datasets to extract actionable insights, performed thorough data cleaning, and designed functional data visualizations to present findings clearly to stakeholders.',
  },

];

export default function Experience() {
  return (
    <div className="projects-grid">
      {projects.map((proj) => (
        <div key={proj.title} className="project">
          <strong>{proj.title}</strong>
          <p className="muted">{proj.desc}</p>
        </div>
      ))}
    </div>
  );
}