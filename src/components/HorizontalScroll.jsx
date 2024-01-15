import { motion, useTransform, useScroll } from "framer-motion";
import { shows } from "../shows";
import { useRef } from "react";
import ShowCard from "./ShowCard";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] py-5">
      <div className="sticky top-0 flex h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {shows.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
