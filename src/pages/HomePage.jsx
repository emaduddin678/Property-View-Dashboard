import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AllProperties from "../components/AllProperties";
import Footer from "../components/Footer";
import CreateProperty from "../components/CreateProperty";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AllProperties />
      <CreateProperty />
      <Footer />
    </div>
  );
};

export default HomePage;
