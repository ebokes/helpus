import Link from "next/link";
import React from "react";

interface LogoProps {
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ scrolled }) => {
  return (
    <Link
      href={"/"}
      className={`${
        scrolled ? "text-black1" : "text-white1"
      } font-bold text-2xl `}
    >
      help
      <span className="text-primary">us</span>
    </Link>
  );
};

export default Logo;
