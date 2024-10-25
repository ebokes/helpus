import React from "react";
import { Button } from "../ui/button";
import FeaturesCard from "./features-card";
import Link from "next/link";
import { LifeBuoy, LoaderPinwheel, Rss, ShieldEllipsis } from "lucide-react";

const data = [
  {
    icon: <LifeBuoy size={35} />,
    title: "Impact",
    text: "See the tangible difference your donation makes in real lives",
  },
  {
    icon: <ShieldEllipsis size={35} />,
    title: "Trust",
    text: "Transparent processes ensure every dollar is accounted for",
  },
  {
    icon: <Rss size={35} />,
    title: "Updates",
    text: "Stay informed with regular insights on the progress of your contribution",
  },
  {
    icon: <LoaderPinwheel size={35} />,
    title: "Flexibility",
    text: "Multiple donation options to suit your giving preferences",
  },
];

const Hero = () => {
  return (
    <div className="mb-[100px] lg:mb-[250px]">
      <div className="background lg:scale-[1.1] rounded-none lg:rounded-b-custom-b grid h-[80vh] place-items-center relative">
        <div className="flex gap-3 flex-col items-center w-[90%]">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-white1 text-center">
            HELP US SERVE <span className="text-primary ">HUMANITY</span>
          </h1>
          <p className="text-white1 text-center w-[90%]">
            Together, We Can Make a Difference in the Lives of Those in Need
          </p>
          <div className="flex gap-4 mx-auto mt-9">
            <Button asChild>
              <Link href={"/projects"}>Projects</Link>
            </Button>
            <Button asChild variant={"secondary"}>
              <Link href={"/about-us"}>Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute lg:bottom-[40px] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around justify-items-center gap-x-4 gap-y-4 max-w-max lg:max-w-[1200px] mx-auto">
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
