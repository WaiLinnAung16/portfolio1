import React from "react";
import TourCard from "../components/TourCard";

const Tour = () => {
  return (
    <div id="tourdates" className="bg-contain bg-center bg-primary py-20">
      <div className="container mx-auto">
        <h1 className="text-5xl font-black text-white p-5 font-mono uppercase">
          Tour Dates
        </h1>

        <div className=" grid grid-cols-12 gap-4 p-5">
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </div>
    </div>
  );
};

export default Tour;
