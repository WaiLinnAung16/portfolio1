import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ id, title }) => {
  const nav = useNavigate();
  const scrollToAction = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      onClick={() => {
        nav("/");
        setTimeout(() => {
          scrollToAction(`${id}`);
        }, 100);
      }}
      className="w-[100px]  md:w-[50px] h-[25px] group overflow-hidden cursor-pointer font-mono text-center"
    >
      <h1 className="transition-all group-hover:-translate-y-7">{title}</h1>
      <h1 className="transition-all group-hover:-translate-y-7 group-hover:border-b-2 group-hover:border-white">
        {title}
      </h1>
    </div>
  );
};

export default Navbar;
