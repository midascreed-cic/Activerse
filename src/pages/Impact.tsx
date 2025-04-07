import React from 'react';
import { TreePine, Heart, GraduationCap, Globe2, Users, Award, Link, Leaf, ShieldCheck, LineChart } from 'lucide-react';

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
    title: 'Greening Malawi Initiative',
    description: 'A nationwide tree planting campaign that engaged over 10,000 volunteers.',
    impact: '25,000 trees planted',
    image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c'
  },
  {
    title: 'Youth Education Program',
    description: 'Digital literacy and sustainability workshops across rural communities.',
    impact: '5,000 students trained',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
  }
];

const partners = [
  {
    name: 'Malawi Environmental Protection',
    role: 'Environmental Partner',
    contribution: 'Provided expertise and resources for tree planting initiatives'
  },
  {
    name: 'Digital Skills Foundation',
    role: 'Education Partner',
    contribution: 'Facilitated technology workshops and training programs'
  }
];

export function Impact() {
  return (
    <main>
      {/* Header Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978')] bg-cover bg-center opacity-20" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              ActiVerse Impact
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tracking Change, One NFT at a Time
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              ActiVerse leverages blockchain technology to create transparent, verifiable records
              of community impact. Through our innovative platform, we're bridging the gap between
              local action and global sustainable development goals.
            </p>
            <button className="px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Impact Metrics</h2>
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
      <section className="py-16 bg-white">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
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

      {/* Partner & Community Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-emerald-600 mb-2">{partner.role}</p>
                <p className="text-gray-600">{partner.contribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Contribute to meaningful change in Malawi and beyond
          </h2>
          <button className="px-8 py-3 bg-white text-emerald-900 rounded-full font-semibold hover:bg-gray-100 transition">
            Join the Movement
          </button>
        </div>
      </section>
    </main>
  );
}