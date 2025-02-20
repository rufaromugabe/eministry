"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket } from "lucide-react";

const missionPoints = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To develop and manage ICT policies and services that enable a knowledge-based society"
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "To be the leader in driving Zimbabwe's digital transformation and innovation"
  },
  {
    icon: Rocket,
    title: "Our Values",
    description: "Innovation, Integrity, Excellence, Collaboration, and Accountability"
  }
];

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Mission & Vision</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Driving Zimbabwe's digital transformation through innovative policies and services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <point.icon className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-green-800">Our Commitment</h3>
            <p className="text-gray-700 leading-relaxed">
              We are dedicated to fostering digital innovation, ensuring universal access to ICT services, 
              and creating an enabling environment for sustainable digital growth in Zimbabwe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}