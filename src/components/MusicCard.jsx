import React from "react";
import sample from "/public/image1.jpeg";
import { BsFacebook, BsSpotify, BsYoutube } from "react-icons/bs";
import { FaSoundcloud } from "react-icons/fa";
const MusicCard = ({ title, img, date }) => {
  return (
    <div className="col-span-12 lg:col-span-6 text-white">
      <div className="flex gap-5 flex-col md:flex-row ">
        <div>
          <img src={img} alt="" className="w-full h-[280px] object-cover" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="font-light">{date}</p>
          <div className="flex items-center gap-3 text-xl">
            <BsSpotify className="transition-all cursor-pointer hover:-translate-y-1 hover:text-green-400" />
            <FaSoundcloud className="transition-all cursor-pointer hover:-translate-y-1 hover:text-orange-600" />
            <BsYoutube className="transition-all cursor-pointer hover:-translate-y-1 hover:text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
