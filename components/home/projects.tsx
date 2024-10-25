import React from "react";
import ProjectCard from "./project-card";
import { projectData } from "@/data/project-card-data";
import { Button } from "../ui/button";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="my-20 max-w-[1200px] mx-auto w-[95%] md:w-[90%]">
      <div className="flex justify-center">
        <div className="flex gap-3 flex-col items-center w-[90%] justify-center">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-black1 text-center">
            CURRENT <span className="text-primary ">PROJECTS</span>
          </h1>
          <p className="text-black1 text-center w-[90%]">
            Together, We Can Make a Difference in the Lives of Those in Need
          </p>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-y-7 gap-x-5">
        {projectData.slice(0, 4).map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
            goal={item.goal}
            raised={item.raised}
            daysLeft={item.daysLeft}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild>
          <Link href="/projects">View all projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
