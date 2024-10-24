import React from "react";

type ProgressBarProps = {
  progress: number; // Percentage from 0 to 100
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative w-full  rounded-full h-[6px] border border-primary">
      <div
        className="bg-primary h-[4px] rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
      <div
        className="absolute -top-[6px] right-[4px]  bg-primary h-4 w-4 rounded-full grid place-items-center"
        style={{ left: `${progress}%` }}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute -top-4 left-[2px] ">
          <p className="text-[12px] text-primary font-semibold ">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
