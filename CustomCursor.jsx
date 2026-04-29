import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const MoveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', MoveCursor);

    return () => {
      window.addEventListener('mousemove', MoveCursor);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex:1,
        pointerEvents: 'none',
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
        transition:'0.1s'
      }}
    >
      <div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(236,72,153,1)',
          filter: 'blur(42px)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

export default CustomCursor