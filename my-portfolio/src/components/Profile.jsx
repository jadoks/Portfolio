// src/components/Profile.jsx
import React, { useState, useEffect } from 'react';

export default function Profile() {
  const emailRecipient = "jadelisondra101@gmail.com";
  const emailSubject = encodeURIComponent("Hello Jade!"); 
  
  // State to track if the screen is mobile size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width on mount
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is the standard tablet/mobile breakpoint
    };

    checkScreenSize(); // Run on initial render
    
    // Add event listener to handle screen resizing dynamically
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // --- Dynamic Email URLs ---
  // Old code: Universal mailto link (Best for Mobile)
  const mailtoUrl = `mailto:${emailRecipient}?subject=${emailSubject}`;
  
  // New code: Direct Gmail Web Compose URL (Best for Desktop)
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}&su=${emailSubject}`;

  // Decide which link and target attributes to use based on screen size
  const emailHref = isMobile ? mailtoUrl : gmailComposeUrl;
  const emailTarget = isMobile ? '_self' : '_blank';

  // --- Google Maps URL Fix ---
  // Note: The original URL had a malformed '0{locationQuery}' structure. 
  // It has been corrected here to a standard web search URL that works perfectly on both platforms.
  const locationQuery = encodeURIComponent("Argao, Cebu, Philippines");
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${locationQuery}`;

  return (
    <div className="contact">
      {/* Google Maps Link */}
      <a 
        href={googleMapsUrl}
        target="_blank" 
        rel="noopener noreferrer" 
        className="chip"
        style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}
      >
        📍 Argao, Cebu, Philippines
      </a>
      
      {/* Dynamic Email Link */}
      <a 
        href={emailHref}
        target={emailTarget}
        rel={!isMobile ? "noopener noreferrer" : undefined}
        className="chip"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        ✉️ jadelisondra101@gmail.com
      </a>
      
      {/* GitHub Link */}
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