import React, { ReactNode } from "react";

interface FeaturesCardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

const FeaturesCard = ({ icon, title, text }: FeaturesCardProps) => {
  return (
    <div className="z-10">
      <div className="bg-white1 p-6 rounded-2xl shadow-xl w-[250px] h-[250px] flex flex-col items-center">
        <div className="bg-primary w-12 h-12 rounded-full">{icon}</div>
        <h2 className="text-xl font-bold mt-4">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
