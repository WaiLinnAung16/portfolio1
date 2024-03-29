import React from "react";
import hero from "/public/image1.jpeg";
import hero2 from "/public/hero2.jpg";
import { Parallax } from "react-scroll-parallax";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen relative overflow-hidden">
      <div className="z-30 text-white bg-black/70 h-screen backdrop-blur-sm">
        <Parallax
          speed={-10}
          scale={[1.2, 0.8]}
          className="flex justify-center items-center flex-col h-full"
        >
          <h1 className="text-4xl md:text-6xl font-bold  uppercase font-mono">
            Terror Bass
          </h1>
          <p className=" mt-5 text-center w-[95%] md:w-[80%] lg:w-[60%] text-sm md:text-lg font-light tracking-normal md:tracking-wide font-serif">
            Saii (Sailus) & Lwin (LZ) started the “Terror bass” at the beginning
            of 2014. Over a year they started appearing with top local artists
            but In 2016, their history making track, “BTFWD” remix was released
            from ‘Soundcloud’. It got recognized and ‘played’ worldwide by the
            original maker of the track, “Carnage” and also many huge artists
            including; “DJ Snake” , “The Chainsmokers”, “Lookas” , “SKiSM” and
            “NGHTMRE”.
          </p>
        </Parallax>
      </div>
      {/* <div className="">
        <img src={hero} alt="hero img" className=" h-screen" />
      </div> */}
      <Splide
        aria-label="My Favorite Images"
        className="absolute top-1"
        options={{
          autoplay:true,
          rewind: true,
          type: 'fade', 
        }}
      >
        <SplideSlide>
          <img src={hero} alt="Image 1" className="w-full  h-full object-cover object-center"/>
        </SplideSlide>
        <SplideSlide>
          <img src={hero2} alt="Image 2" className="w-full h-full object-cover object-center"/>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Hero;
