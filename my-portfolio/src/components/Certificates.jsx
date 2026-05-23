import React, { useState } from "react";

const certificates = [
  {
    title: "Introduction to Modern AI",
    issuer: "DICT-ITU DTC Initiative",
    date: "2026-03-31",
    image: "Introduction_to_Modern_AI_certificate.png",
  },
  {
    title: "PSITE7 Innovation Challenge 2026",
    issuer: "CEBU ICT STUDENT CONGRESS 2026",
    date: "2026-04-30",
    image: "PSITE_2026_National_Student_Congress_certificate.png",
  },
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <div className="projects-grid certificate-grid">
        {certificates.map((cert) => (
          <article key={cert.title} className="project certificate-card">
            <button
              type="button"
              className="certificate-preview-button"
              onClick={() => setSelectedCertificate(cert)}
              aria-label={`Preview ${cert.title} certificate`}
            >
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="project-image certificate-image"
              />
            </button>

            <div className="certificate-info">
              <strong>{cert.title}</strong>
              <p className="muted">{cert.issuer}</p>
              <p className="muted">{cert.date}</p>
            </div>
          </article>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="image-modal"
          onClick={() => setSelectedCertificate(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate preview"
            />

            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} full preview`}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
}