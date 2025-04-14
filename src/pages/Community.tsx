import React from 'react';
import { Users, Heart, TreePine, GraduationCap, Link, ShieldCheck, LineChart } from 'lucide-react';

const metrics = [
  { icon: TreePine, value: '25,000+', label: 'Trees Planted', color: 'bg-green-100 text-green-600' },
  { icon: Heart, value: '10,000+', label: 'Blood Donations', color: 'bg-red-100 text-red-600' },
  { icon: GraduationCap, value: '15,000+', label: 'Students Reached', color: 'bg-blue-100 text-blue-600' },
  { icon: Users, value: '50,000+', label: 'Lives Impacted', color: 'bg-purple-100 text-purple-600' }
];

const sdgs = [
  { number: 3, title: 'Good Health & Well-being', events: 156, color: 'bg-red-100' },
  { number: 4, title: 'Quality Education', events: 89, color: 'bg-blue-100' },
  { number: 13, title: 'Climate Action', events: 234, color: 'bg-green-100' },
  { number: 15, title: 'Life on Land', events: 178, color: 'bg-emerald-100' }
];

const caseStudies = [
  {
    title: 'Clean Cities Projects',
    description: `Clean City Projects is transforming waste management and environmental sustainability in Malawi. The project tackles three major challenges: plastic waste recycling, sustainable energy, and environmental educationt. The initiative is making significant strides in reducing landfill waste and deforestation.`,
    impact: 'Converting 75,000+ tonnes of annual plastic waste into eco-bricks and reducing 60% of greenhouse gas emissions through sustainable energy alternatives',
    image: '/images/ccp2.jpeg'
  },
  {
    title: 'Girl Up Elevate',
    description: 'We believe every girl has the power to create lasting change in her community and beyond. Our mission is to equip girls with education, resources, and a strong support network to help them reach their fullest potential.',
    impact: 'Empowering girls with education, resources, and mentorship to become confident leaders, driving positive change in their communities and shaping a better future.',
    image: '/images/gue.jpeg'
  },
  {
    title: '21st Gen Community',
    description: '21st Gen is a youth-driven movement focused on mental well-being, resilience, and empowerment. It provides safe spaces, creative expression, and education to help young people thrive, break stigma, and build a healthier, hopeful future.',
    impact: 'Equipping youth with life skills, mental health support, and safe spaces to grow, thrive, and lead transformative change in their lives and communities.',
    image: '/images/21stg1.jpg'
  }
];

export function Community() {
  return (
    <main>
      {/* Header Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18')] bg-cover bg-center opacity-20" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Community & Impact
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connecting Changemakers for a Sustainable Future
            </p>
          </div>
        </div>
      </div>

      {/* Impact Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className={`w-16 h-16 ${metric.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">SDG Alignment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sdgs.map((sdg, index) => (
              <div key={index} className={`${sdg.color} rounded-xl p-6`}>
                <div className="text-4xl font-bold mb-2">SDG {sdg.number}</div>
                <h3 className="text-xl font-semibold mb-4">{sdg.title}</h3>
                <p className="text-gray-700">{sdg.events} events completed</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="text-emerald-600 font-semibold">{study.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain & Transparency Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Blockchain & Transparency</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <Link className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Immutable Records</h3>
              <p className="text-gray-600">
                Every action and impact is permanently recorded on the blockchain
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <ShieldCheck className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Impact</h3>
              <p className="text-gray-600">
                Smart contracts ensure transparent and accurate impact tracking
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <LineChart className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">
                Monitor community impact with live blockchain data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Be a part of Malawi's journey toward sustainability</h2>
          <button className="px-8 py-3 bg-white text-emerald-900 rounded-full font-semibold hover:bg-gray-100 transition">
            Join the Movement
          </button>
        </div>
      </section>
    </main>
  );
}