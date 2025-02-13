import { useState } from "react";
import CTA from "./cta";
import Features from "./features";
import Footer from "./footer";
import HeroSection from "./hero-section";
import Navbar from "./navbar";

const Landing = ({ onGetStarted }) => {
  const [isdark, setisdark] = useState(false);

  const toggleTheme = () => {
    setisdark(!isdark);
    document.documentElement.classList.toggle("dark");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isdark
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-br from-indigo-50 to-purple-50"
        }`}
      >
        {/* NAVBAR */}
        <Navbar isdark={isdark} toggleTheme={toggleTheme} />

        {/* Hero Section */}
        <HeroSection isdark={isdark} />

        {/* FEATURES */}
        <Features isdark={isdark} container={container} />

        {/* CTA Section */}
        <CTA isdark={isdark} />
        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
