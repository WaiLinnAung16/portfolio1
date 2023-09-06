import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Tour from "./pages/Tour";
import Music from "./pages/Music";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  return (
    <ParallaxProvider>
      <Header />
      <Hero />
      <Tour />
      <Music />
    </ParallaxProvider>
  );
};

export default App;
