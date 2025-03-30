"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  const currPath = usePathname();

  return (
    <Link href={to}>
      <div
        className={`relative after:content-[''] after:absolute 
        after:left-0 after:bottom-0 after:w-full after:h-[1px]
        after:bg-black after:scale-x-0 after:origin-left after:transition 
        after:duration-300 after:ease-in hover:after:scale-x-75 ${
          currPath == to
            ? "text-[#1A75BB] after:scale-x-75 after:bg-[#1A75BB]"
            : ""
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavLink;
