import Footer from "@/components/footer/footer";

import PageHero from "@/components/page-hero";
import Projects from "@/components/projects/Projects";
import React from "react";

const ProjectsPage = () => {
  return (
    <div>
      <PageHero
        title1="our"
        title2="projects"
        subtitle="Together, We Can Make a Difference in the Lives of Those in Need"
      />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
