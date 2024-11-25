import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AllProperties from "../components/AllProperties";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AllProperties />
    </div>
  );
};

export default HomePage;
