// src/components/Profile.jsx
import React from 'react';

export default function Profile() {
  const emailRecipient = "jadelisondra101@gmail.com";
  
  // Optional: You can also add pre-filled subject/body here if you want
  const emailSubject = encodeURIComponent("Hello Jade!"); 
  
  // Direct Gmail Web Compose URL
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}&su=${emailSubject}`;

  // Google Maps Search URL
  const locationQuery = encodeURIComponent("Argao, Cebu, Philippines");
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${locationQuery}`;

  return (
    <div className="contact">
      {/* Clicking this opens Google Maps in a new tab pointed to Argao, Cebu */}
      <a 
        href={googleMapsUrl}
        target="_blank" 
        rel="noopener noreferrer" 
        className="chip"
        style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}
      >
        📍 Argao, Cebu, Philippines
      </a>
      
      {/* Clicking this opens Gmail in a new tab with the 'To' field filled */}
      <a 
        href={gmailComposeUrl}
        target="_blank" 
        rel="noopener noreferrer" 
        className="chip"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        ✉️ jadelisondra101@gmail.com
      </a>
      
      <a 
        href="https://github.com/jadoks" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="chip"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        🔗 github.com/jadoks
      </a>
    </div>
  );
}