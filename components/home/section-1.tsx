import React from "react";
import { Button } from "../ui/button";

const Section1 = () => {
  return (
    <div className="my-[70px] flex gap-5 max-w-[1200px] mx-auto w-[90%]">
      <div className="flex flex-1 gap-3 flex-col ">
        <h1 className="font-extrabold text-3xl w-[40%] text-black">
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
      <div className=" flex flex-1">images</div>
    </div>
  );
};

export default Section1;