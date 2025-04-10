import React from 'react';
import { Users, Award, Globe2, BookOpen, MessageSquare, Trophy, Heart } from 'lucide-react';

const communityMembers = [
  {
    name: 'Grace Mhango',
    role: 'Environmental Champion',
    impact: '15 Events Organized',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
  },
  {
    name: 'David Banda',
    role: 'Youth Mentor',
    impact: '200+ Students Reached',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    name: 'Mary Chirwa',
    role: 'Health Advocate',
    impact: '50+ Health Campaigns',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
];

const resources = [
  {
    icon: BookOpen,
    title: 'Getting Started Guide',
    description: 'Learn how to participate and earn your first NFT'
  },
  {
    icon: Globe2,
    title: 'SDG Resources',
    description: 'Understand the UN Sustainable Development Goals'
  },
  {
    icon: Award,
    title: 'NFT Handbook',
    description: 'Complete guide to managing your impact NFTs'
  }
];

const discussions = [
  {
    title: 'Sustainable Agriculture Practices',
    participants: 156,
    comments: 324
  },
  {
    title: 'Youth Innovation Challenge 2025',
    participants: 89,
    comments: 167
  },
  {
    title: 'Mental Health Awareness Month',
    participants: 234,
    comments: 456
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
              Join the ActiVerse Community
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connecting Changemakers for a Sustainable Future
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Our Community</h2>
            <p className="text-lg text-gray-600 mb-8">
              ActiVerse empowers communities through innovative technology, using blockchain
              and smart contracts to recognize and reward social impact. Our phygital NFTs
              bridge the gap between real-world actions and digital recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Community Spotlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Community Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-emerald-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Resources & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <resource.icon className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-700">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Forum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Community Forum</h2>
          <div className="space-y-6">
            {discussions.map((discussion, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
                <div className="flex space-x-4 text-gray-600">
                  <span>{discussion.participants} participants</span>
                  <span>•</span>
                  <span>{discussion.comments} comments</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Rewards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recognition & Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <Trophy className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Top Contributors</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="font-semibold">Grace Mhango</span>
                  <span className="text-emerald-600">150 Impact Points</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-semibold">David Banda</span>
                  <span className="text-emerald-600">120 Impact Points</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-semibold">Mary Chirwa</span>
                  <span className="text-emerald-600">95 Impact Points</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <Award className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Special Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-emerald-600" />
                  <span>Community Champion Badge</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-emerald-600" />
                  <span>Event Organizer Excellence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MessageSquare className="w-6 h-6 text-emerald-600" />
                  <span>Active Contributor Status</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Be a part of Malawi's journey toward sustainability</h2>
        </div>
      </section>
    </main>
  );
}