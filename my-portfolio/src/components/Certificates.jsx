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
  {
    title: "Network Addressing and Basic Troubleshooting",
    issuer: "DICT-ITU DTC Initiative",
    date: "2026-05-25",
    image: "Network_Addressing_and_Basic_Troubleshooting.png",
  },
  {
    title: "AI Class for ASEAN Youth",
    issuer: "ASEAN Foundation",
    date: "2026-05-27",
    image: "AI_Class.png",
  },
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handlePreview = (cert) => {
    if (window.innerWidth >= 1024) {
      setSelectedCertificate(cert);
    }
  };

  return (
    <>
      <div className="projects-grid certificate-grid">
        {certificates.map((cert) => (
          <article key={cert.title} className="project certificate-card">
            <button
              type="button"
              className="certificate-preview-button"
              onClick={() => handlePreview(cert)}
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