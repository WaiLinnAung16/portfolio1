import React, { useEffect, useState } from "react";
import logo from "/public/whitelogo.svg";
import Navbar from "../utils/Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const nav = useNavigate();

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
      } w-full flex justify-between md:justify-center gap-20 items-center bg-primary/10 fixed top-0 text-white backdrop-blur-md z-50 transition-transform duration-300 px-5`}
    >
      <Navbar id={"ourstory"} title={"Story"} />
      <Navbar id={"music"} title={"Music"} />
      <div onClick={() => nav("/")}>
        <img src={logo} alt="terror bass logo" className="h-[90px]" />
      </div>
      <Navbar id={"tourdates"} title={"Tour"} />
      <div
        onClick={() => nav("/artists")}
        className="w-[100px] md:w-[50px] h-[25px] group overflow-hidden cursor-pointer font-mono text-center"
      >
        <h1 className="transition-all group-hover:-translate-y-5">Artists</h1>
        <h1 className="transition-all group-hover:-translate-y-7 group-hover:border-b-2 group-hover:border-white">
          Artists
        </h1>
      </div>
    </nav>
  );
};

export default Header;
