"use client";

import { motion } from "framer-motion";
import { 
  Network, 
  Shield, 
  LineChart,
  Scale,
  Briefcase,
  FileText,
  Building,
  Users
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const departments = [
  {
    icon: Network,
    title: "Infrastructure Development and Management",
    description: "Oversees the development, management, and maintenance of ICT infrastructure across the nation."
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Provides oversight and strategic direction on information security matters and cyber threats."
  },
  {
    icon: LineChart,
    title: "Strategic Policy Planning, Monitoring, and Evaluation",
    description: "Evaluates the impact of ICT implementation policies and plans."
  },
  {
    icon: Scale,
    title: "Legal",
    description: "Handles legal and regulatory matters in ICT sector development."
  },
  {
    icon: Briefcase,
    title: "Procurement Management Unit",
    description: "Manages all procurement activities and contract documentation."
  },
  {
    icon: FileText,
    title: "ICT Applications Development and Management",
    description: "Develops and maintains government ICT applications."
  },
  {
    icon: Building,
    title: "Internal Audit Unit",
    description: "Conducts financial and performance audits across departments."
  },
  {
    icon: Users,
    title: "Finance, Administration, and Human Resources",
    description: "Manages financial and administrative functions of the ministry."
  }
];

export default function Departments() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Departments and Units</h2>
          <p className="text-gray-600">Serving our nation through specialized services</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">
                    <dept.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="mb-2">{dept.title}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}