import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(displayText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100); // Her 100 milisaniyede bir harf eklenir

      return () => clearTimeout(timer);
    } else {
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, displayText, onComplete, text]);

  return <div>{displayText}</div>;
};

export default TypewriterText;
