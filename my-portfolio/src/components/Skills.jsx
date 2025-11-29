// src/components/Skills.jsx
import React from 'react';

const skillList = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Basic Network Configuration',
  'Programming',
];

export default function Skills() {
  return (
    <div className="section">
      <h3>Skills</h3>
      <div className="skills">
        {skillList.map((skill) => (
          <div key={skill} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}