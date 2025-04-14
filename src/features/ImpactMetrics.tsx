import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Target, Building2, Award, Activity, Globe } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    label: "Active Participants",
    value: "34",
    description: "Join our growing community of changemakers",
    gradient: "from-emerald-500 to-emerald-400"
  },
  {
    icon: Calendar,
    label: "Events Hosted",
    value: "11",
    description: "SDG-aligned events creating real impact",
    gradient: "from-emerald-500 to-emerald-400"
  },
  {
    icon: Activity,
    label: "SDGs Supported",
    value: "15",
    description: "Contributing to global sustainability goals",
    gradient: "from-emerald-500 to-emerald-400"
  },
  {
    icon: Globe,
    label: "Communities",
    value: "10",
    description: "Local communities making a difference",
    gradient: "from-emerald-500 to-emerald-400"
  }
];

export function ImpactMetrics() {
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
          className="mx-auto max-w-2xl lg:text-center mb-16"
        >
          <h2 className="inline-flex items-center rounded-full px-6 py-2 text-2xl text-emerald-600 ring-1 ring-inset ring-emerald-600">
            <span className="font-bold tracking-wide">Our Impact</span>
          </h2>
          <p className="mt-8 text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Making a difference together
          </p>
          <p className="mt-8 text-2xl leading-8 text-gray-600">
            Track our collective impact across various sustainable development initiatives.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${metric.gradient} opacity-5`}></div>
              <div className="relative">
                <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${metric.gradient} shadow-lg`}>
                  <metric.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <p className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
                  {metric.value}
                </p>
                <p className="mt-2 text-lg font-semibold text-emerald-600">
                  {metric.label}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}