import React from "react";

const projects = [
  {
    title: "StudyTrack",
    desc: "A class & schedule tracker for students.",
    image: "StudyTrack.png",
  },
  {
    title: "VroomEase",
    desc: "A Vehicle Rental System.",
    image: "VroomEase.png",
  },
];

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((proj) => (
        <article key={proj.title} className="project">
          <img
            src={proj.image}
            alt={`${proj.title} illustration`}
            className="project-image"
          />

          <strong>{proj.title}</strong>
          <p className="muted">{proj.desc}</p>
        </article>
      ))}
    </div>
  );
}