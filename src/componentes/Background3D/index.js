import React from 'react';
import './style.css';

const Background3D = () => {
  return (
    <div className="background-container">
      {/* Dynamic Glow Blobs */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>

      {/* Subtle Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* Recursive Stars Layers for depth without heavy rendering */}
      <div className="stars-layer" style={{ transform: 'scale(1)', opacity: 0.8 }}></div>
      <div className="stars-layer" style={{ transform: 'scale(1.5) rotate(45deg)', opacity: 0.4 }}></div>
    </div>
  );
};

export default Background3D;
