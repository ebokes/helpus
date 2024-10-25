import Image from "next/image";
import React from "react";

interface AboutSectionProps {
  reverse?: boolean;
  imgURL: string;
  subtitle: string;
  title1?: string;
  title2?: string;
  title3?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  reverse,
  imgURL,
  subtitle,
  title1,
  title2,
  title3,
}) => {
  return (
    <div
      className={`my-[70px] flex  ${
        !!reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      } gap-5 max-w-[1200px] mx-auto w-[90%] items-center`}
    >
      <div className="flex flex-1 gap-3 flex-col ">
        <h1 className="font-extrabold text-3xl md:w-[60%] text-black">
          {title1} <span className="text-primary "> {title2} </span>
          {title3}
        </h1>
        <p className="text-black1">{subtitle}</p>
      </div>
      <div className=" flex flex-1">
        <Image
          src={imgURL}
          alt="img"
          width={600}
          height={600}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default AboutSection;
