"use client";

// import { projectData } from "@/data/project-card-data";
import ProjectCard from "../home/project-card";
// import urls from "@/lib/urls";
// import useFetchData from "@/hooks/useFetchData";
import { useContext } from "react";
import { SkeletonCard } from "./skeleton-card";
import { ProjectCardDataProps } from "@/types/project";
import { DonateContext } from "@/context/donate-context";

const Projects = () => {
  // const { fetchData, data: projectsData, loading } = useFetchData();
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   fetchData(urls.getAllProject);
  // }, []);

  const { projectData, isLoading } = useContext(DonateContext) || {};

  console.log(projectData);

  return (
    <div className="my-20 max-w-[1200px] mx-auto w-[95%] md:w-[90%]">
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10 gap-x-5">
        {isLoading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          projectData?.map((item: ProjectCardDataProps) => (
            <ProjectCard
              key={item?.id}
              name={item?.name}
              targetAmount={item?.targetAmount}
              amountRaised={item?.amountRaised}
              donationCount={item?.donationCount}
              image={item?.image}
              id={item?.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
