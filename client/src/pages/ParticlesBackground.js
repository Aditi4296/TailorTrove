import React, { useEffect } from 'react';
import Particles from 'particles.js';

const ParticlesBackground = () => {
  useEffect(() => {
    Particles.init({
      selector: '.particles-background',
      color: ['#000000', '#0000FF', '#FFC0CB', '#FFA500'], // Change colors as needed
      connectParticles: true,
      maxParticles: 100,
      sizeVariations: 100,
    });
  }, []);

  return <div className="particles-background" />;
};

export default ParticlesBackground;
