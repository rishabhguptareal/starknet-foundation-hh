import React from 'react';
import Particles from './Particles';
import GradientOrbs from './GradientOrbs';
import GridPattern from './GridPattern';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <GradientOrbs />
      <GridPattern />
      <Particles />
    </div>
  );
}