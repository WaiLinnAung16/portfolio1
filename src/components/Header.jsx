import React, { useEffect, useState } from "react";
import logo from "/public/whitelogo.svg";

const scrollToAction = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const Header = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    setLastScroll(window.scrollY);
  }, []);

  const handleShowNav = () => {
    let scrollTop = window.scrollY;
    if (lastScroll < scrollTop) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    setLastScroll(scrollTop);
  };

  window.addEventListener("scroll", handleShowNav);

  return (
    <nav
      className={`${
        showNav ? " translate-y-0" : "-translate-y-[100%]"
      } w-full flex justify-between md:justify-center gap-20 items-center bg-primary/10 fixed top-0 text-white backdrop-blur-md z-50 transition-transform duration-300`}
    >
      <div className="w-[50px] h-[25px] group overflow-hidden cursor-pointer font-mono text-center">
        <h1 className="transition-all group-hover:-translate-y-5">Home</h1>
        <h1 className="transition-all group-hover:-translate-y-7 group-hover:border-b-2 group-hover:border-white">
          Home
        </h1>
      </div>
      <div
        onClick={() => scrollToAction("music")}
        className="w-[50px] h-[25px] group overflow-hidden cursor-pointer font-mono text-center"
      >
        <h1 className="transition-all group-hover:-translate-y-5">Music</h1>
        <h1 className="transition-all group-hover:-translate-y-7 group-hover:border-b-2 group-hover:border-white">
          Music
        </h1>
      </div>
      <div className="-mr-6">
        <img src={logo} alt="terror bass logo" className="h-[90px]" />
      </div>
      <div
        onClick={() => scrollToAction("tourdates")}
        className="w-[90px] h-[25px] group overflow-hidden cursor-pointer font-mono text-center"
      >
        <h1 className="transition-all group-hover:-translate-y-5">
          Tour Dates
        </h1>
        <h1 className="transition-all group-hover:-translate-y-7 group-hover:border-b-2 group-hover:border-white">
          Tour Dates
        </h1>
      </div>
      <div
        onClick={() => scrollToAction("ouestory")}
        className="w-[90px] h-[25px] group overflow-hidden cursor-pointer font-mono text-center"
      >
        <h1 className="transition-all group-hover:-translate-y-5">Our story</h1>
        <h1 className="transition-all group-hover:-translate-y-7 group-hover:border-b-2 group-hover:border-white">
          Our story
        </h1>
      </div>
    </nav>
  );
};

export default Header;
