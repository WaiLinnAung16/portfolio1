import React from "react";
import { shows } from "../shows";
import ShowCard from "../components/ShowCard";
import HorizontalScroll from "../components/HorizontalScroll";

const Shows = () => {
  return (
    <div className="container mx-auto relative">
      <h1 className="text-5xl font-black text-white p-5 font-mono uppercase">
        Shows
      </h1>
      <HorizontalScroll/>
    </div>
  );
};

export default Shows;
