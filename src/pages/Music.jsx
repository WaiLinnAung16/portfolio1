import React from "react";
import MusicCard from "../components/MusicCard";
import { tracks } from "../data";

const Music = () => {
  return (
    <div id="music" className="bg-primary">
      <div className="container mx-auto">
        <h1 className="text-5xl font-black text-white p-5 font-mono uppercase">
          Music
        </h1>

        <div className="grid grid-cols-12 gap-5 p-5 bg-primary">
          {tracks.map((track) => {
            return (
              <MusicCard
                key={track.id}
                title={track.title}
                img={track.img}
                text={track.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Music;
