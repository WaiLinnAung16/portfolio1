import React from "react";
import { motion } from "framer-motion";
const TourCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="col-span-12 md:col-span-4 lg:col-span-3"
    >
      <div className=" border border-secondary text-white p-6 flex flex-col gap-3">
        <div className=" inline-flex font-light">
          <p>Saturday 5 September</p>
        </div>
        <div>
          <h1 className=" mb-1">Beckenham Place Park, London, UK</h1>
          <h5 className="font-bold text-lg">
            IMANU @ Hospitality in the Park, London, UK
          </h5>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
