import React from "react";
import { shows } from "../shows";

const TourHisCard = ({show,setShow}) => {
  return (
    <div onClick={()=>setShow(!show)} className="col-span-12 md:col-span-4 lg:col-span-3 flex gap-2 flex-wrap border border-secondary p-3">
      {shows.map((show) => (
        <div className="h-[60px]">
          <img src={show.img} alt="" className="w-full h-full object-cover"/>
        </div>
      ))}
    </div>
  );
};

export default TourHisCard;
