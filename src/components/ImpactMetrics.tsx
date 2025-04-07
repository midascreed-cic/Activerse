import React from 'react';
import { TreePine, Droplets, GraduationCap, Heart } from 'lucide-react';

const metrics = [
  { icon: TreePine, value: '10,000+', label: 'Trees Planted' },
  { icon: Droplets, value: '5,000+', label: 'Blood Donations' },
  { icon: GraduationCap, value: '15,000+', label: 'Workshop Participants' },
  { icon: Heart, value: '25,000+', label: 'Lives Impacted' }
];

export function ImpactMetrics() {
  return (
    <div className="bg-emerald-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="p-6">
              <metric.icon className="w-10 h-10 mx-auto mb-4 text-emerald-400" />
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-emerald-200">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}