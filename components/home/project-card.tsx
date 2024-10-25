import { ProjectCardDataProps } from "@/types/project";
import Image from "next/image";
import React from "react";
// import { Progress } from "../ui/progress";
import ProgressBar from "../ui/progress-bar";
import { Button } from "../ui/button";
import Link from "next/link";
import { formatToCurrency, toPercentages } from "@/lib/utils";

interface ChangeRouteProps {
  id: string;
  children: React.ReactNode;
}

const ChangeRoute = ({ id, children }: ChangeRouteProps) => (
  <Link href={`/projects/${id}`} className="hover:text-primary">
    {children}
  </Link>
);

const ProjectCard = ({
  id = "",
  title,
  goal = 0,
  raised = 0,
  donations = 0,
  imageUrl = "",
}: // description,
ProjectCardDataProps) => {
  return (
    <div className="border shadow-lg rounded-3xl p-4 ">
      <div className="flex justify-center">
        <ChangeRoute id={id}>
          <Image
            src={imageUrl || "/kids.webp"}
            alt="project"
            width={400}
            height={300}
            style={{ objectFit: "cover", borderRadius: "1rem", width: "100%" }}
          />
        </ChangeRoute>
      </div>
      <div className="mt-6">
        <ProgressBar progress={toPercentages(raised, goal)} />
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
      <div>
        <ChangeRoute id={id}>
          <h1 className="text-xl font-bold uppercase">{title}</h1>
        </ChangeRoute>
        {/* <p className="mt-2 truncate w-[300px]">{description}</p> */}
      </div>
      <div className="flex gap-4 mx-auto mt-9 mb-4 justify-center">
        {/* <Button>Donate</Button> */}
        <Button asChild>
          <Link href={`/projects/${id}`}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
