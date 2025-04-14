import React, { useState } from 'react';
import { Trees as Tree, Heart, Brain, GraduationCap, Trash2, Users, Activity, Music, Lightbulb, Wheat, QrCode, Scan, Award, Share2 } from 'lucide-react';
import { EventRegistrationForm } from '../features/EventRegistrationForm';

const categories = [
  { icon: Tree, title: 'Tree Planting Drives', sdgs: 'SDGs: 13, 15', description: 'Join our mission to green Malawi' },
  { icon: Heart, title: 'Blood Donation Campaigns', sdgs: 'SDGs: 3', description: 'Save lives with your contribution' },
  { icon: Brain, title: 'Mental Health Awareness', sdgs: 'SDGs: 3', description: 'Breaking stigma, building support' },
  { icon: GraduationCap, title: 'Educational Workshops', sdgs: 'SDGs: 4', description: 'Empowering through knowledge' },
  { icon: Trash2, title: 'Clean-Up Campaigns', sdgs: 'SDGs: 11, 12', description: 'Creating cleaner communities' },
  { icon: Users, title: 'Women Empowerment', sdgs: 'SDGs: 5', description: 'Advancing gender equality' },
  { icon: Activity, title: 'Health & Wellness Fairs', sdgs: 'SDGs: 3', description: 'Promoting healthy living' },
  { icon: Music, title: 'Cultural Festivals', sdgs: 'SDGs: 11', description: 'Celebrating diversity' },
  { icon: Lightbulb, title: 'Youth Innovation', sdgs: 'SDGs: 8, 9', description: 'Fostering future leaders' },
  { icon: Wheat, title: 'Food Security', sdgs: 'SDGs: 2', description: 'Building sustainable food systems' }
];

const steps = [
  { icon: Users, title: 'Attend Events', description: 'Join community events that align with your interests' },
  { icon: QrCode, title: 'Scan QR Code', description: 'Use your phone to scan the event QR code' },
  { icon: Award, title: 'Claim NFT', description: 'Receive your unique impact NFT instantly' },
  { icon: Share2, title: 'Share Impact', description: 'Showcase your contribution and inspire others' }
];

const testimonials = [
  {
    name: 'Sarah Banda',
    role: 'Community Leader',
    quote: 'ActiVerse has transformed how we track and celebrate community participation.',
    image: '/images/user.jpeg'
  },
  {
    name: 'John Phiri',
    role: 'Environmental Activist',
    quote: 'The gamification of social impact has brought more youth to our initiatives.',
    image: '/images/user.jpeg'
  }
];

export function Events() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <main>
      {/* Header Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559027615-cd4628902d4a')] bg-cover bg-center opacity-20" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Social Impact Events in Malawi
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering Communities, One QR Code at a Time
            </p>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Event Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
                <category.icon className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-emerald-600 mb-2">{category.sdgs}</p>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-700">
                  Explore Events →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 w-8 h-0.5 bg-emerald-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Be part of Malawi's sustainable future</h2>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setIsRegistrationOpen(true)}
              className="px-8 py-3 bg-white text-emerald-900 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Register Your Event
            </button>
          </div>
        </div>
      </section>

      {/* Event Registration Modal */}
      <EventRegistrationForm 
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </main>
  );
}