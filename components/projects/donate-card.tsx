import React from "react";
import { Button } from "../ui/button";
import { DonateCardDataProps } from "@/types/project";
import ProgressBar from "../ui/progress-bar";
import { formatToCurrency, toPercentages } from "@/lib/utils";

const DonateCard = ({
  title,
  goal = 0,
  raised = 0,
  donations = 0,
}: DonateCardDataProps) => {
  return (
    <div className="border shadow-lg rounded-sm p-4 ">
      <div className=" ">
        <h2 className="font-extrabold text-3xl text-center ">{title}</h2>
        <div className="flex justify-center w-full mb-4">
          <div className="border-b-[3px] border-b-primary pb-6 w-[30%]"></div>
        </div>
        <p>
          Help our organization by donating today! All donations go directly to
          making a difference for our cause.
        </p>
      </div>
      <div className="mt-6">
        <ProgressBar progress={toPercentages(raised, goal) || 0} />
      </div>
      <div className="mt-5 mb-3">
        <div className="flex justify-between w-full mt-2">
          <div className="text-center">
            <div className="font-semibold"> {formatToCurrency(goal)}</div>
            <div>Goal</div>
          </div>
          <div className="text-center">
            <div className="font-semibold"> {donations}</div>
            <div>Donations</div>
          </div>
          <div className="text-center">
            <div className="font-semibold"> {formatToCurrency(raised)}</div>
            <div>Raised</div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="flex gap-4 mx-auto mt-9 mb-4 justify-center">
        {/* <Button>Donate</Button> */}
        <Button variant={"rect"}>DONATE NOW</Button>
      </div>
    </div>
  );
};

export default DonateCard;
