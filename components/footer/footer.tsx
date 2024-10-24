import React from "react";
import Logo from "../navbar/logo";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="bg-black1 py-16 text-white1">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto justify-center gap-y-8 w-[90%] md:gap-x-8 lg:gap-x-0">
        <div>
          <Logo />
          <p className="text-white1 mt-4">
            Daima Clean Energy is an innovative initiative that aims to
            transform the energy landscape in Kenya by promoting Daima Clean
            Energy is an innovative initiative that aims to transform the energy
            landscape in Kenya by promoting
          </p>
        </div>
        <div className="md:justify-self-center">
          <h2 className="font-bold mb-4">LINKS</h2>
          <ul>
            <li>About Us</li>
            <li>Projects</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="lg:justify-self-center">
          <h2 className="font-bold  mb-4">LEGAL</h2>
          <ul>
            <li>Privacy</li>
            <li>Germs of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="justify-self-center">
          <Button>Join Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
