"use client";
import Link from "next/link";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <section className="w-full container mx-auto">
      <div className="w-full px-4 py-2">
        <div className="w-full flex justify-between items-center h-full max-md:justify-start max-md:space-x-5">
          <Link href="/">
            <div className="relative h-[50px] w-max flex items-center px-2 max-md:h-[40px]">
              <h1 className="flex text-2xl max-md:text-xl">
                <span className="text-[#1A75BB]">Em</span>pirical API
              </h1>
            </div>
          </Link>

          <div className="flex justify-center space-x-5 capitalize max-md:space-x-3 max-md:text-base">
            <NavLink to="/examples">Examples</NavLink>
            <NavLink to="/notes">Notes</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
