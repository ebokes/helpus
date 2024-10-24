import React from "react";
import { Button } from "../ui/button";

const Section4 = () => {
  return (
    <div>
      <div className="section4-bg py-16 bg-cover bg-bottom bg-secondary bg-fixed">
        <div className="flex gap-3 max-w-[1200px] mx-auto flex-col items-center w-[90%]">
          <h1 className="font-extrabold text-3xl text-white1 text-center">
            HELP US SERVE <span className="text-primary ">HUMANITY</span>
          </h1>
          <p className="text-white1 text-center w-[90%]">
            Together, We Can Make a Difference in the Lives of Those in Need
          </p>
          <div className="flex gap-4 mx-auto mt-9">
            <Button>Projects</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
