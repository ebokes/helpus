"use client";

import useFetchData from "@/hooks/useFetchData";
import urls from "@/lib/urls";
// import axios from "axios";
import React, { createContext, useEffect } from "react";

interface DonateContextProps {
  children: React.ReactNode;
}

interface ProjectData {
  description: string;
  targetAmount: number;
  amountRaised: number;
  donationCount: number;
  image: string;
  id: string;
  dateCreated: string;
  dateUpdated: string;
  createdBy: string;
}

interface DonateContextType {
  projectData: ProjectData[];
  isLoading: boolean;
}

export const DonateContext = createContext<DonateContextType | undefined>(
  undefined
);

export const DonateContextProvider = ({ children }: DonateContextProps) => {
  //   const [projectData, setProjectData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState<Error | null>(null);

  const { fetchData, data: projectData, isLoading } = useFetchData();

  useEffect(() => {
    fetchData(urls.getAllProject);
    // const fetchAllProjects = async () => {
    //   setIsLoading(true);
    //   try {
    //     const res = await axios.get(urls.getAllProject);
    //     console.log(res?.data.data);
    //     setProjectData(res?.data.data);
    //   } catch (error) {
    //     console.error(error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchAllProjects();
  }, []);

  console.log(projectData);
  const contextValue: DonateContextType = { projectData, isLoading };
  return (
    <DonateContext.Provider value={contextValue}>
      {children}
    </DonateContext.Provider>
  );
};
