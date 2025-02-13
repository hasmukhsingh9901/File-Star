import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = ({isdark}) => {
  return (
    <div
      className={`px-6 py-14 justify-center flex w-full ${
        isdark ? "bg-gray-900" : "bg-gradient-to-r from-cyan-500 to-blue-600"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center flex justify-center w-full ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-8 text-white">
            Ready to Transform?
          </h2>
          <p className="text-2xl mb-12 text-gray-200">
            Join thousands of users revolutionizing their workflow with
            FileStar.
          </p>
          <div className="flex justify-center">
            <button
              className={`px-6 flex items-center justify-center gap-2 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-sm ${
                isdark ? "text-white" : "text-zinc-100"
              }`}
            >
              <Link href={"/file-star"}>Get Started</Link>
              <ArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;
