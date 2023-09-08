import React, { useEffect, useRef } from "react";
import story1 from "/public/image0.jpeg";
import tracks from "/public/tracks.png";
import ReactPlayer from "react-player";
import video from "/video.mp4";
import { ControlBar, Player } from "video-react";

import "../../node_modules/video-react/dist/video-react.css";

const OurStory = () => {
  return (
    <div id="ourstory" className="bg-primary text-white pt-20 font-serif">
      <div className="container mx-auto">
        <div className=" h-[500px] bg-primary/80 absolute text-center">
          <h1 className="text-5xl font-mono font-bold mb-10">Our Story</h1>
          <p className="w-full lg:w-[80%] mx-auto text-base md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt qui
            fugit dolorum magnam? Voluptatum est deleniti cupiditate quisquam
            alias dolores ex earum dicta! Iure quisquam nemo dicta quos aperiam
            sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            qui fugit Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sunt qui fugit dolorum magnam? Voluptatum est deleniti cupiditate
            quisquam alias dolores ex earum dicta! Iure consectetur adipisicing
            elit
          </p>
        </div>
        {/* <Player
          autoPlay
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <ControlBar autoHide={false} className="my-class" />
        </Player> */}

        <ReactPlayer
          playing
          loop
          url={video}
          controls={false}
          width="100%"
          height="500px"
        />
      </div>
    </div>
  );
};

export default OurStory;

{
  /* 
        <div className="grid grid-cols-6 gap-5 absolute bg-primary/50 backdrop-blur-sm">
          <div className="col-span-6 lg:col-span-3">
            <img
              src={story1}
              alt=""
              className="h-[350px] w-full object-cover"
            />
          </div>
          <div className="col-span-6 lg:col-span-3">
            <h1 className="font-bold text-5xl font-mono mb-3">Something</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt qui
              fugit dolorum magnam? Voluptatum est deleniti cupiditate quisquam
              alias dolores ex earum dicta! Iure quisquam nemo dicta quos
              aperiam sequi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sunt qui fugit Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sunt qui fugit dolorum magnam? Voluptatum est
              deleniti cupiditate quisquam alias dolores ex earum dicta! Iure
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3 mt-5">
            <h1 className="font-bold text-5xl font-mono mb-3">Something</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt qui
              fugit dolorum magnam? Voluptatum est deleniti cupiditate quisquam
              alias dolores ex earum dicta! Iure quisquam nemo dicta quos
              aperiam sequi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sunt qui fugit Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <img
              src={tracks}
              alt=""
              className="h-[300px] w-full object-cover"
            />
          </div>
        </div>

        <ReactPlayer playing loop url={video} width="100%" height="650px" /> */
}
