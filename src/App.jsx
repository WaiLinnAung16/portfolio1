import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Tour from "./pages/Tour";
import Music from "./pages/Music";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./components/Footer";
import OurStory from "./pages/OurStory";

const App = () => {
  return (
    <ParallaxProvider>
      <Header />
      <Hero />
      <Tour />
      <Music />
      <OurStory />
    </ParallaxProvider>
  );
};

export default App;
