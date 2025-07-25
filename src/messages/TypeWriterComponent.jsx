import React, { useEffect, useState } from 'react';

const TypeWriterComponent = ({ lines, speed = 10 }) => {
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < lines.length) {
        setDisplayedLines((prev) => [...prev, lines[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [lines, speed]);

  return (
    <div className="text-red-500 font-light text-sm mt-2">
      {displayedLines.map((Line, idx) => (
        <div key={idx}>{Line}</div>
      ))}
    </div>
  );
};

export default TypeWriterComponent;
