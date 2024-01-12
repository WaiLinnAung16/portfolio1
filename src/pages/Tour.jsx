import React from "react";
import TourCard from "../components/TourCard";
import bgTour from "/public/bgTour.jpg";
const Tour = () => {
  return (
    <div
      id="tourdates"
      className="bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${bgTour})`,
      }}
    >

      <div className="container mx-auto bg-black/70 backdrop-blur">
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
