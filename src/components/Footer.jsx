import React from "react";
import { FaFacebook, FaSoundcloud } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
const Footer = () => {
  return (
    <div className=" py-20 px-5 bg-primary text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div>
          <h1 className="font-bold font-mono text-5xl">Contact</h1>
          <a
            href="mailto:management@terrorbass.com"
            className=" flex items-center gap-2"
          >
            <SiMinutemailer />
            <h1 className="underline">management@terrorbass.com</h1>
          </a>
        </div> */}
        <div className="flex justify-center items-center gap-3 text-2xl text-white">
          <FaFacebook />
          <AiFillInstagram />
          <AiFillYoutube />
          <BsTwitter />
          <FaSoundcloud />
        </div>
      </div>
    </div>
  );
};

export default Footer;
