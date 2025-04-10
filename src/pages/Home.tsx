import React from 'react';
import { Hero } from "../components/common/Hero";
import { Features } from "../components/common/Features";
import { ImpactMetrics } from "../features/ImpactMetrics";

export function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ImpactMetrics />
    </main>
  );
}