import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { ImpactMetrics } from '../components/ImpactMetrics';

export function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ImpactMetrics />
    </main>
  );
}