import React from "react";
import { Button } from "../ui/button";

const Section2 = () => {
  return (
    <div>
      <div className="section-bg py-16 bg-cover bg-right bg-secondary bg-fixed mx-auto">
        <div className="flex gap-3 flex-col items-center w-[90%] mx-auto">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-black text-center">
            HELP US SERVE <span className="text-primary ">HUMANITY</span>
          </h1>
          <p className="text-black text-center w-[90%]">
            Together, We Can Make a Difference in the Lives of Those in Need
          </p>
          <div className="flex gap-4 mx-auto mt-9">
            <Button>Projects</Button>
            <Button variant={"secondary"}>Our Story</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
