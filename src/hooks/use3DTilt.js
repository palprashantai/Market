import { useState, useCallback } from 'react';

/**
 * Custom hook for smooth 3D tilt perspective effect on cards
 * @param {number} maxTilt - Maximum tilt angle in degrees (default: 8)
 * @param {boolean} disabled - Whether tilt is disabled (e.g. reduced motion)
 */
export function use3DTilt(maxTilt = 8, disabled = false) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, glareOpacity: 0 });

  const onMouseMove = useCallback((e) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -maxTilt;
    const rY = ((x - centerX) / centerX) * maxTilt;

    setTilt({
      rotateX: Number(rX.toFixed(2)),
      rotateY: Number(rY.toFixed(2)),
      glareX: Number(((x / rect.width) * 100).toFixed(1)),
      glareY: Number(((y / rect.height) * 100).toFixed(1)),
      glareOpacity: 0.22
    });
  }, [maxTilt, disabled]);

  const onMouseLeave = useCallback(() => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      glareOpacity: 0
    });
  }, []);

  const style = disabled ? {} : {
    transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
    transition: 'transform 0.16s cubic-bezier(0.16, 1, 0.3, 1)',
    transformStyle: 'preserve-3d'
  };

  const glareStyle = disabled ? { display: 'none' } : {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 107, 44, ${tilt.glareOpacity}) 0%, rgba(255, 255, 255, ${tilt.glareOpacity * 0.4}) 35%, transparent 70%)`,
    transition: 'opacity 0.25s ease',
    borderRadius: 'inherit',
    zIndex: 6
  };

  return {
    tiltProps: {
      onMouseMove,
      onMouseLeave,
      style
    },
    glareStyle,
    isTilting: tilt.glareOpacity > 0
  };
}
