import React, { useEffect, useState } from "react";
import logo from "/public/whitelogo.svg";
import Navbar from "../utils/Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const nav = useNavigate();

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };

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
    setOpenMenu(false);
  };

  window.addEventListener("scroll", handleShowNav);

  return (
    <nav
      className={`${
        showNav ? " translate-y-0" : "-translate-y-[100%]"
      } w-full h-[90px] bg-primary/10 fixed top-0 text-white backdrop-blur-md z-50 transition-transform duration-300`}
    >
      <div className="hidden md:flex justify-between md:justify-center gap-20 items-center">
        <Navbar id={"ourstory"} title={"Story"} />
        <Navbar id={"music"} title={"Music"} />
        <div onClick={() => nav("/")}>
          <img
            src={logo}
            alt="terror bass logo"
            className="h-[90px] cursor-pointer"
          />
        </div>
        <Navbar id={"tourdates"} title={"Tour"} />
        <div
          onClick={() => nav("/label")}
          className="w-[100px] md:w-[50px] h-[26px] group overflow-hidden cursor-pointer font-mono text-center"
        >
          <h1 className="transition-all group-hover:-translate-y-7">Label</h1>
          <h1 className="transition-all group-hover:-translate-y-7 group-hover:border-b-2 group-hover:border-white">
            Label
          </h1>
        </div>
      </div>
      {/* mobile navbar */}
      <div className=" md:hidden flex justify-between items-center z-50 px-5">
        <div onClick={() => nav("/")}>
          <img
            src={logo}
            alt="terror bass logo"
            className="h-[90px] cursor-pointer flex"
          />
        </div>
        <div
          onClick={openMenuHandler}
          className="flex flex-col items-end gap-2"
        >
          <div
            className={`w-[40px] h-1 bg-white transition-all duration-300 ${
              openMenu ? "opacity-0 translate-y-3" : "opacity-100"
            }`}
          ></div>
          <div
            className={`flex transition-all duration-300 ${
              openMenu && "translate-x-3"
            }`}
          >
            <div
              className={` h-1 bg-white transition-all duration-300 ${
                openMenu
                  ? "w-[40px] -translate-y-3 translate-x-5 -rotate-45"
                  : "w-[20px]"
              }`}
            ></div>
            <div
              className={` h-1 bg-white transition-all duration-300 ${
                openMenu
                  ? "w-[40px] -translate-y-3 -translate-x-5 rotate-45"
                  : "w-[20px]"
              }`}
            ></div>
          </div>
        </div>
      </div>
      {/* Menu Slide */}
      <div
        className={`h-screen bg-primary flex flex-col items-center pt-32 gap-5 text-white transition-transform duration-500 ${
          openMenu ? "scale-100" : "scale-0"
        }`}
      >
        <Navbar id={"ourstory"} title={"Story"} />
        <Navbar id={"music"} title={"Music"} />
        <Navbar id={"tourdates"} title={"Tour"} />
        <div
          onClick={() => {
            nav("/label");
            setOpenMenu(false);
          }}
          className="w-[100px] md:w-[50px] h-[26px] group overflow-hidden cursor-pointer font-mono text-center"
        >
          <h1 className="transition-all group-hover:-translate-y-7">Label</h1>
          <h1 className="transition-all group-hover:-translate-y-7 group-hover:border-b-2 group-hover:border-white">
            Label
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Header;
