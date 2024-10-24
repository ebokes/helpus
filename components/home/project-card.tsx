import { ProjectCardDataProps } from "@/types/project";
import Image from "next/image";
import React from "react";
// import { Progress } from "../ui/progress";
import ProgressBar from "../ui/progress-bar";
import { Button } from "../ui/button";

const ProjectCard = ({
  title,
  goal = 0,
  raised = 0,
  imageUrl = "",
  description,
}: ProjectCardDataProps) => {
  const toPercentages = (raised: number, goal: number) => {
    return Math.round((raised / goal) * 100);
  };
  return (
    <div className="border shadow-lg rounded-3xl p-4 flex-1">
      <div className="flex justify-center">
        <Image
          src={imageUrl || "/default-image.jpg"}
          alt="project"
          width={400}
          height={300}
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="mt-6">
        <ProgressBar progress={toPercentages(raised, goal)} />
      </div>
      <div className="mt-5 mb-3">
        <div className="flex justify-between w-full mt-2">
          <div>
            Goal: <span className="font-semibold"> ${goal}</span>
          </div>
          <div>
            Raised: <span className="font-semibold"> ${raised}</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold uppercase">{title}</h1>
        <p className="mt-2">{description}</p>
      </div>
      <div className="flex gap-4 mx-auto mt-9 mb-4 justify-center">
        <Button>Donate</Button>
        <Button variant={"secondary"}>More</Button>
      </div>
    </div>
  );
};

export default ProjectCard;
