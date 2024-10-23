"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";
import { usePathname } from "next/navigation";

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
  return (
    <div className="flex justify-between w-full items-center my-4 md:my-7">
      <Link href={"/"} className="font-bold text-xl">
        help
        <span className="text-primary">us</span>
      </Link>
      <div className="block md:hidden">
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
                className={isActive ? "text-primary" : ""}
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
            <Link href={"/auth/register"}>Register</Link>
          </Button>
        </div>
      </div>
      <div
        className={`w-[25rem] pb-12 px-8 h-screen fixed top-10 right-0 bottom-0 bg-white1 border-l-2 border-[#0000000d] z-[51] transform md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 `}
      >
        <div className="flex flex-col gap-4 items-center">
          {LinkData.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
          <div>
            <Link href={"/auth/register"}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
