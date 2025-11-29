// src/components/Name.jsx
import React, { useState, useEffect } from 'react';

export default function Name() {
  const fullName = "Jade M. Lisondra";
  const shortName = "Jadok";

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = loop % 2 === 0 ? fullName : shortName;

      // Update text
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1));
      } else {
        setText(currentText.substring(0, text.length - 1));
      }

      // Speed control
      let speed = typingSpeed;

      if (!isDeleting && text === currentText) {
        // Pause at end, then start deleting
        speed = loop % 2 === 0 ? 5000 : 3000; // 5s for full name, 3s for Jadok
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        // Finished deleting → switch name and start typing again
        setIsDeleting(false);
        setLoop(loop + 1);
        speed = 300; // short pause before typing new name
      } else if (isDeleting) {
        speed = 80; // faster deleting
      } else {
        speed = text.length === 0 ? 400 : 150; // start slower, then normal
      }

      setTypingSpeed(speed);
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loop, typingSpeed]);

  return (
    <div className="name">
      <h2>
        <span className="typing-text">{text}</span>
        <span className="cursor">|</span>
      </h2>
      <p className="muted">BSIT • Web Developer • UI/UX</p>
    </div>
  );
}