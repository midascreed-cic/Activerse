import React from 'react';
import { Globe2, Leaf, Heart, BookOpen } from 'lucide-react';

export function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('how-it-works');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-700 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978')] bg-cover bg-center opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Claim Your Impact
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-12">
            Join the movement where technology meets real-world action. Make a difference, earn rewards, and track your impact on global sustainability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={scrollToFeatures}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full font-semibold transition"
            >
              Get Started
            </button>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}