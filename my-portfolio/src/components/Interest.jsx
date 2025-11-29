// src/components/Interest.jsx
import React from 'react';

const interests = ['Web design', 'Online Games', 'Networking'];

export default function Interest() {
  return (
    <div className="section">
      <h3>Interests</h3>
      <div className="muteds">
        {interests.map((interest) => (
          <div key={interest} className="mute">
            {interest}
          </div>
        ))}
      </div>
    </div>
  );
}