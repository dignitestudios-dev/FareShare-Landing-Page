import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import AboutUs from "../components/Aboutus";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Outro from "../components/Outro";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Discover />
      <Services />
      <Benefits />
      <AboutUs />
      <HowItWorks />
      <Testimonials />
      <Outro />
      <Footer />
    </div>
  );
};

export default Home;
