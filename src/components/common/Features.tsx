import React from 'react';
import { QrCode, Award, Users, Activity, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function Features() {
  const features = [
    {
      icon: QrCode,
      title: "Phygital Experience",
      description: "Seamlessly connect real-world actions with digital assets through QR code scanning at events.",
      gradient: "from-emerald-500 to-emerald-400"
    },
    {
      icon: Award,
      title: "Impact Verification",
      description: "Each NFT serves as verifiable proof of your participation in SDG-aligned events.",
      gradient: "from-emerald-500 to-emerald-400"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a growing community of changemakers working towards sustainable development.",
      gradient: "from-emerald-500 to-emerald-400"
    },
    {
      icon: Activity,
      title: "Reward System",
      description: "Earn unique NFTs and unlock exclusive benefits based on your impact contributions.",
      gradient: "from-emerald-500 to-emerald-400"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Contribute to global sustainability goals through local actions and events.",
      gradient: "from-emerald-500 to-emerald-400"
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Built on blockchain technology ensuring security and transparency of all transactions.",
      gradient: "from-emerald-500 to-emerald-400"
    }
  ];

  return (
    <div className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="inline-flex items-center rounded-full px-6 py-2 text-2xl text-emerald-600 ring-1 ring-inset ring-emerald-600">
              <span className="font-bold tracking-wide">How It Works</span>
            </h2>
            <p className="mt-8 text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Everything you need to make an impact
            </p>
            <p className="mt-8 text-2xl leading-8 text-gray-600">
              ActiVerse combines blockchain technology with real-world actions to create a unique platform for sustainable development.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="relative flex flex-col rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-5`}></div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-6 text-xl font-semibold leading-7 text-gray-900">
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}