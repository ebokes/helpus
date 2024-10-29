"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "./logo";

const LinkData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${scrolled ? "bg-white1 shadow-md" : ""}
    "border flex justify-center items-center fixed top-0 right-0 left-0 z-[100] h-[60px] md:h-[80px]`}
    >
      <div className=" flex justify-between items-center  my-4 md:my-5 mx-auto max-w-[1200px] w-[95%] md:w-[90%] fixed top-0">
        <Logo scrolled={scrolled} />
        <div
          className={`block md:hidden 
            ${scrolled ? "text-black1" : "text-white1"}`}
        >
          {isMenuOpen ? (
            <X onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <AlignJustify onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
        <div className="hidden md:flex gap-20 items-center">
          <div className="flex gap-4 items-center">
            {LinkData.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  className={
                    isActive
                      ? "text-primary font-semibold"
                      : scrolled
                      ? "text-black1"
                      : "text-white1"
                  }
                  key={link.label}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div>
            <Button asChild>
              <Link href={"/register"}>Register</Link>
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`w-[25rem] pb-12 pt-7 shadow-lg px-8 h-screen fixed top-12 right-0 bottom-0 bg-white1 border-l-2 border-[#0000000d] z-[51] transform md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 lg:translate-x-0 `}
        >
          <div className="flex flex-col gap-4 items-center">
            {LinkData.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  className={
                    isActive ? "text-primary font-semibold" : "text-black1"
                  }
                  key={link.label}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default Navbar;
