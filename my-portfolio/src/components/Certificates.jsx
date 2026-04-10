import React from "react";

const certificates = [
  {
    title: "Introduction to Modern AI",
    issuer: "DICT-ITU DTC Initiative",
    date: "2026-03-31",
    image: "Introduction_to_Modern_AI_certificate.png",
  },{
    title: "Introduction to Modern AI",
    issuer: "DICT-ITU DTC Initiative",
    date: "2026-03-31",
    image: "Introduction_to_Modern_AI_certificate.png",
  }
];

export default function Certificates() {
  return (
    <div className="item">
      <h4>E-Certificates</h4>

      <div className="projects-grid">
        {certificates.map((cert) => (
          <div key={cert.title} className="project">
            <img
              src={cert.image}
              alt={`${cert.title} certificate`}
              className="project-image"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                marginBottom: "1rem",
              }}
            />

            <strong>{cert.title}</strong>
            <p className="muted">{cert.issuer}</p>
            <p className="muted">{cert.date}</p>

          </div>
        ))}
      </div>
    </div>
  );
}