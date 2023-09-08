import React from "react";
import logo from "/whitelogo.svg";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { FaSoundcloud } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const artists = [
  {
    id: 1,
    logoImg: logo,
    label: "Terror Bass",
    photo:
      "https://www.shadyrecords.com/files/2013/01/Screen-Shot-2013-01-03-at-2.07.17-PM.png",
    para: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
        reprehenderit corrupti nihil labore provident. Quia, qui dolore?
        Culpa mollitia eius, unde architecto esse minima voluptatem odio
        explicabo? Quidem, modi sunt!Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Dolorum reprehenderit corrupti nihil labore
        provident. Quia, qui dolore? Culpa mollitia eius, unde architecto
        esse minima voluptatem odio explicabo? Quidem, modi sunt!`,
  },
  {
    id: 2,
    logoImg: logo,
    label: "Terror Bass",
    photo:
      "https://www.shadyrecords.com/files/2013/01/Screen-Shot-2013-01-03-at-2.07.17-PM.png",

    para: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
        reprehenderit corrupti nihil labore provident. Quia, qui dolore?
        Culpa mollitia eius, unde architecto esse minima voluptatem odio
        explicabo? Quidem, modi sunt!Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Dolorum reprehenderit corrupti nihil labore
        provident. Quia, qui dolore? Culpa mollitia eius, unde architecto
        esse minima voluptatem odio explicabo? Quidem, modi sunt!`,
  },
  {
    id: 1,
    logoImg: logo,
    label: "Terror Bass",
    photo:
      "https://www.shadyrecords.com/files/2013/01/Screen-Shot-2013-01-03-at-2.07.17-PM.png",

    para: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
        reprehenderit corrupti nihil labore provident. Quia, qui dolore?
        Culpa mollitia eius, unde architecto esse minima voluptatem odio
        explicabo? Quidem, modi sunt!Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Dolorum reprehenderit corrupti nihil labore
        provident. Quia, qui dolore? Culpa mollitia eius, unde architecto
        esse minima voluptatem odio explicabo? Quidem, modi sunt!`,
  },
];
const Label = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="bg-primary min-h-screen py-20 px-5">
      {artists.map((artist) => {
        return (
          <div key={artist.id} className="flex flex-col gap-5 my-10">
            <div className="flex flex-col items-center gap-2">
              <img src={artist.logoImg} className="h-[95px]" />
              <div className="flex items-center gap-5 text-3xl text-white">
                <BsSpotify className="transition-all cursor-pointer hover:-translate-y-2 hover:text-green-400" />
                <FaSoundcloud className="transition-all cursor-pointer hover:-translate-y-2 hover:text-orange-600" />
                <BsYoutube className="transition-all cursor-pointer hover:-translate-y-2 hover:text-red-600" />
              </div>
            </div>
            <div>
              <img
                src={artist.photo}
                className="h-[450px] object-cover object-top"
              />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white mb-3">
                {artist.label}
              </h1>
              <p className="text-gray-100">{artist.para}</p>
            </div>
            <button className="self-start font-semibold text-secondary uppercase flex items-center gap-1 transition-all duration-300 hover:gap-3">
              Read More
              <MdKeyboardDoubleArrowRight className="text-2xl" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Label;
