import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = ({isdark}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 z-0 opacity-50">
        <motion.div
          className={`absolute top-20 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl ${
            isdark ? "bg-blue-900" : "bg-blue-200"
          }`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute top-40 right-20 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl ${
            isdark ? "bg-purple-900" : "bg-purple-200"
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 py-32 mx-auto max-w-7xl">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`font-extrabold text-7xl tracking-tight bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent`}
          >
            Transform Files with
            <span className="block text-8xl mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              AI Magic
            </span>
          </motion.h1>
          <motion.p
            className={`text-2xl mb-12 mt-10 max-w-3xl mx-auto leading-relaxed ${
              isdark ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Process any file with a simple text command. The future of file
            manipulation is here, powered by cutting-edge AI technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-x-4 flex justify-center "
          >
            <Link
              href={"/file-star"}
              className={`px-6 flex items-center gap-2 py-4   text-lg font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-sm ${
                isdark ? "text-white" : "text-zinc-100"
              }`}
            >
              <p>Get Started</p>
              <ArrowRight
                className={`ml-2 ${isdark ? "text-white" : "text-zinc-100"}`}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
