import React from "react";
import { motion } from "framer-motion";
import { Binary, Wand2, Zap } from "lucide-react";

const Features = ({isdark,container}) => {
  return (
    <motion.div
      className="max-w-7xl mx-auto py-32"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2
        className={`text-5xl font-bold text-center mb-20 ${
          isdark ? "text-white" : "text-gray-900"
        }`}
      >
        Revolutionary Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 max-w-7xl mx-auto">
        {[
          {
            icon: <Wand2 className="w-10 h-10" />,
            title: "AI-Powered",
            description: "Transform files using natural language",
          },
          {
            icon: <Binary className="w-10 h-10" />,
            title: "Multi-Format",
            description: "Support for all file types",
          },
          {
            icon: <Zap className="w-10 h-10" />,
            title: "Lightning Fast",
            description: "Process files in milliseconds",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`p-8 ${
              isdark ? "dark:bg-gray-800" : "bg-white"
            }   rounded-2xl shadow-lg relative overflow-hidden`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-0 hover:opacity-20 transition duration-500 rounded-2xl" />
            <h3
              className={`text-xl font-bold ${
                isdark ? "dark:text-white" : "text-gray-900"
              }  `}
            >
              {item.icon} {item.title}
            </h3>
            <p className="mt-4 text-zinc-800 dark:text-gray-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Features;
