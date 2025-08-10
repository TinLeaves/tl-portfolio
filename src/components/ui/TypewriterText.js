import { useState, useEffect } from 'react';
import { createTypewriterConfig } from '../../utils/animationUtils';

/**
 * Reusable typewriter text component
 */
export default function TypewriterText({ 
  texts, 
  speed = 80, 
  deleteSpeed = 40, 
  pauseTime = 1500,
  className = '',
  cursorClassName = 'animate-pulse'
}) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const config = createTypewriterConfig(texts, { speed, deleteSpeed, pauseTime });

  useEffect(() => {
    const currentText = config.texts[textIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), config.pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % config.texts.length);
        }
      }
    }, isDeleting ? config.deleteSpeed : config.speed);

    return () => clearTimeout(timer);
  }, [displayText, textIndex, isDeleting, config]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span className={cursorClassName}>|</span>
    </span>
  );
}