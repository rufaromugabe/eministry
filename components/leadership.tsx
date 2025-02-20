"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const leaders = [
  {
    name: "Hon. Dr. T. Moyo",
    role: "Minister",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200"
  },
  {
    name: "Dr. B. Sibanda",
    role: "Permanent Secretary",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200"
  },
  {
    name: "Mrs. R. Chinamasa",
    role: "Deputy Secretary",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200"
  },
  {
    name: "Mr. P. Mhlanga",
    role: "Chief Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200"
  }
];

export default function Leadership() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
          <p className="text-gray-600">Meet the team driving Zimbabwe's digital transformation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="mb-4 relative group">
                <Avatar className="w-40 h-40 mx-auto">
                  <AvatarImage src={leader.image} alt={leader.name} />
                  <AvatarFallback>{leader.name[0]}</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/20 rounded-full transition-all duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
              <p className="text-gray-600">{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}