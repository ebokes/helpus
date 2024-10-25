"use client";

import Footer from "@/components/footer/footer";
import PageHero from "@/components/page-hero";
import DonateCard from "@/components/projects/donate-card";
import { projectData } from "@/data/project-card-data";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Project = () => {
  const { id } = useParams();
  const project = projectData.find((item) => item.id === id);
  const { title, goal, raised, description, donations } = project || {};

  if (!project) {
    return <p>Project not found</p>;
  }
  return (
    <div>
      <PageHero
        title1="giving is"
        title2="caring"
        subtitle="Together, We Can Make a Difference in the Lives of Those in Need"
      />
      <div className="my-20 max-w-[1200px] mx-auto w-[95%] md:w-[90%] grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="col-span-2">
          <Image
            src={project.imageUrl || "/images/project.jpg"}
            alt="project"
            width={600}
            height={600}
            style={{ objectFit: "cover", borderRadius: "1rem", width: "100%" }}
            priority
          />
          <h1 className="my-4 font-extrabold text-3xl uppercase">{title}</h1>
          <p>{description}</p>

          {project?.imgGallery?.length && (
            <div>
              <h3 className="font-extrabold text-2xl text-primary my-5">
                GALLERY
              </h3>
              <div className="flex gap-5 flex-wrap">
                {project?.imgGallery?.map((item, i) => (
                  <Image
                    key={i}
                    src={item}
                    alt="project"
                    width={200}
                    height={200}
                    style={{ objectFit: "cover", borderRadius: "1rem" }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="col-span-1 mt-5 lg:mt-0 md:justify-self-center">
          <DonateCard
            title={title}
            goal={goal}
            raised={raised}
            donations={donations}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
