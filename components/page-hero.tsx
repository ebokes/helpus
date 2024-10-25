import React from "react";
import Navbar from "./navbar/navbar";

interface PageHeroProps {
  title1: string;
  title2: string;
  subtitle: string;
}

const PageHero = ({ title1, title2, subtitle }: PageHeroProps) => {
  return (
    <div className="section4-bg py-16 bg-cover bg-bottom bg-secondary bg-fixed">
      <div className="mx-auto max-w-[1200px] w-[95%] md:w-[90%]">
        <Navbar />
        <div className="flex gap-3 max-w-[1200px] mt-20 mb-4 mx-auto flex-col items-center w-[90%]">
          <h1 className="font-extrabold text-3xl text-white1 text-center uppercase">
            {title1} <span className="text-primary ">{title2}</span>
          </h1>
          <p className="text-white1 text-center w-[90%]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
