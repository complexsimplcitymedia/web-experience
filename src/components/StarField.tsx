import React, { useEffect, useState } from 'react';

export function StarField() {
  const [showShootingStar, setShowShootingStar] = useState(false);

  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
    },
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShootingStar(true);
    }, 7000); // Show shooting star 7 seconds after component mounts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={star.style}
        />
      ))}
      {showShootingStar && (
        <div className="shooting-star animate-shoot" />
      )}
    </div>
  );
}