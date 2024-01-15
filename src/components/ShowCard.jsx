import React from "react";

const ShowCard = ({ show }) => {
  return (
    <div className="w-[50vw] p-5 text-white flex gap-5">
      <div className="flex flex-col items-start">
        <div className="text-9xl font-extrabold text-[#303030]">
          {show.date}
        </div>
        <h1 className="text-3xl font-semibold">{show.title}</h1>
      </div>
      <div >
        <img
          src={show.img}
          alt=""
          className=""
        />
      </div>

      
    </div>
  );
};

export default ShowCard;
