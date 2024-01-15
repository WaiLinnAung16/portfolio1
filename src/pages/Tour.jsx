import React, { useState } from "react";
import TourCard from "../components/TourCard";
import bgTour from "/public/bgTour.jpg";
import TourHisCard from "../components/TourHisCard";
import HorizontalScroll from "../components/HorizontalScroll";
import { shows } from "../shows";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

const Tour = () => {
  const [show, setShow] = useState(false);

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
          <TourHisCard show={show} setShow={setShow} />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </div>

      {show && (
        <div
          className="w-[378px] h-[370px] absolute top-[20%]  flex flex-col items-center justify-center bg-center"
          style={{
            backgroundImage: `url(${bgTour})`,
          }}
        >
          <button onClick={()=>setShow(false)} className=" z-20 absolute top-3 right-5 text-xl text-white font-black">X</button>
          <div className="w-full h-full absolute top-0 bg-black/60 backdrop-blur"></div>
          <Splide
            aria-label="My Favorite Images"
            className="w-[65%]"
            options={{
              autoplay: true,
              rewind: true,
              type: "fade",
              arrows: false,
              pagination: false,
            }}
          >
            {shows.map((show) => (
              <SplideSlide>
                <img
                  key={show.id}
                  src={show.img}
                  alt="Image 1"
                  className="w-full h-full object-contain object-center"
                />
                <div className="absolute bottom-2 w-full flex justify-center bg-red-600/20 backdrop-blur">
                  <p className="text-white">{show.date}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
    </div>
  );
};

export default Tour;
