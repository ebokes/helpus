import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Section4 = () => {
  return (
    <div>
      <div className="section4-bg py-20">
        <div className="flex gap-3 max-w-[1200px] mx-auto flex-col items-center w-[90%]">
          <h1 className="font-extrabold text-3xl md:text-4xl  text-white1 text-center">
            HELP US SERVE <span className="text-primary ">HUMANITY</span>
          </h1>
          <p className="text-white1 text-center w-[90%]">
            Together, We Can Make a Difference in the Lives of Those in Need
          </p>
          <div className="flex gap-4 mx-auto mt-9">
            <Button asChild>
              <Link href="/projects">Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
