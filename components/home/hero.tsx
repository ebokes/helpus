import React from "react";
import { Button } from "../ui/button";
import FeaturesCard from "./features-card";

const data = [
  {
    icon: "icon",
    title: "title",
    text: "creating positive change through innovative projects and community building",
  },
  {
    icon: "icon",
    title: "title",
    text: "creating positive change through innovative projects and community building",
  },
  {
    icon: "icon",
    title: "title",
    text: "creating positive change through innovative projects and community building",
  },
  {
    icon: "icon",
    title: "title",
    text: "creating positive change through innovative projects and community building",
  },
];

const Hero = () => {
  return (
    <div className="mb-[200px]">
      <div className=" background grid place-items-center relative">
        <div className="flex gap-3 flex-col items-center w-[90%]">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-white1 text-center">
            HELP US SERVE <span className="text-primary ">HUMANITY</span>
          </h1>
          <p className="text-white1 text-center w-[90%]">
            Together, We Can Make a Difference in the Lives of Those in Need
          </p>
          <div className="flex gap-4 mx-auto mt-9">
            <Button>Projects</Button>
            <Button variant={"secondary"}>Our Story</Button>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-[120px] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 max-w-[1200px] mx-auto">
          {data.map((item, i) => (
            <FeaturesCard
              key={i}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
