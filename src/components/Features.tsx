import React from 'react';
import { QrCode, Award, Users, Leaf } from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: 'Scan & Participate',
    description: 'Scan QR codes at community events to verify your participation and claim unique NFTs.'
  },
  {
    icon: Award,
    title: 'Earn Impact NFTs',
    description: 'Collect digital proof of your real-world actions supporting UN Sustainable Development Goals.'
  },
  {
    icon: Users,
    title: 'Join Communities',
    description: 'Connect with like-minded individuals and organizations driving positive change.'
  },
  {
    icon: Leaf,
    title: 'Track Impact',
    description: 'Monitor your contribution to global sustainability goals through our blockchain-verified system.'
  }
];

export function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How ActiVerse Works
          </h2>
          <p className="text-xl text-gray-600">
            Transform your community actions into verified digital impact
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}