"use client";
import FilestarBeadUI from "@/components/file-star-beadUI";
import LandingPage from "@/components/landing";
import { useState } from "react";

export default function Home() {
  const [currentView, setCurrentView] = useState("landing");

  const handleGetStarted = () => {
    setCurrentView("app");
  };
  return (
    <div>
      {/* onGetStarted={handleGetStarted} */}
      {/* {currentView === "landing" ? ( */}
      <LandingPage />
      {/* ) : (
        <FilestarBeadUI />
      )} */}
    </div>
  );
}
