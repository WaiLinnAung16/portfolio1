import React from "react";
import Hero from "./Hero";
import Tour from "./Tour";
import Music from "./Music";
import OurStory from "./OurStory";

const Home = () => {
  return (
    <div className=" bg-primary">
      <Hero />
      <Tour />
      <Music />
      <OurStory />
    </div>
  );
};

export default Home;
