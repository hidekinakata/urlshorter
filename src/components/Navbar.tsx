import React from "react";
import { HiOutlineLink, HiOutlineScissors } from "react-icons/hi";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

type NavbarType = {};

const Navbar: React.FC<NavbarType> = (props) => {
  return (
    <nav
      className={
        "fixed top-0 left-0 w-full px-24 py-5 flex items-center justify-between"
      }
    >
      <Link href={"/#"}>
        <div className={"relative flex items-center "}>
          <span className={"relative h-14 block aspect-square text-4xl"}>
            <HiOutlineLink
              className={
                "absolute top-[-0rem] left-1/2 -translate-x-1/2 rotate-45"
              }
            />
            <HiOutlineScissors
              className={
                " absolute bottom-[0.1rem] left-1/2 -translate-x-1/2  -rotate-90"
              }
            />
          </span>
          <h1 className={"text-3xl font-sans font-bold"}>LinKut</h1>
        </div>
      </Link>

      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
