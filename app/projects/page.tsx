import Footer from "@/components/footer/footer";
import ProjectCard from "@/components/home/project-card";
import PageHero from "@/components/page-hero";
import { projectData } from "@/data/project-card-data";
import React from "react";

const Projects = () => {
  return (
    <div>
      <PageHero
        title1="our"
        title2="projects"
        subtitle="Together, We Can Make a Difference in the Lives of Those in Need"
      />
      <div className="my-20 max-w-[1200px] mx-auto w-[95%] md:w-[90%]">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10 gap-x-5">
          {projectData.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              goal={item.goal}
              raised={item.raised}
              donations={item.donations}
              imageUrl={item.imageUrl}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
