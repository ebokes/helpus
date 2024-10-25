import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="my-[70px] flex flex-col-reverse md:flex-row  items-center gap-5 max-w-[1200px] mx-auto w-[90%]">
      <div className="flex flex-1 gap-3 flex-col ">
        <h1 className="font-extrabold text-3xl w-[80%] md:w-[40%] text-black">
          HELP US SERVE <span className="text-primary ">HUMANITY</span>
        </h1>
        <p className="text-black1">
          Together, We Can Make a Difference in the Lives of Those in Need
        </p>
        <div className="flex gap-4 mt-9">
          <Button>Projects</Button>
          <Button variant={"secondary"}>Our Story</Button>
        </div>
      </div>
      <div className=" flex flex-1">
        <Image
          src="/hero section slider image 1.png"
          alt="hero"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Section1;
