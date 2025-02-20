"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Lightbulb,
  Brain,
  Sprout
} from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Digital Government",
    description: "Integrated solutions digitizing service delivery and governance processes"
  },
  {
    icon: Lightbulb,
    title: "FinTech",
    description: "Promoting digital financial services and mobile banking"
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Optimizing technology with cognitive and intelligent systems"
  },
  {
    icon: Sprout,
    title: "AgriTech",
    description: "Applying technology to agriculture for enhanced productivity"
  }
];

export default function DigitalPillars() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Main Pillars of Digital Economy
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <pillar.icon className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}