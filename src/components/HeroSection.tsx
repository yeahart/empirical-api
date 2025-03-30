"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const HeroSection = () => {
  const [version, setVersion] = useState("");
  useEffect(() => {
    const fetchVersion = async () => {
      const response = await fetch("/api/version");
      const data = await response.json();
      setVersion(data.version);
    };

    fetchVersion();
  }, []);

  return (
    <section className="w-full flex justify-center py-4">
      <div className="w-2/4 mx-auto">
        <div className="w-full grid grid-cols-2 max-lg:grid-cols-1">
          <div>
            <h1 className="flex text-4xl max-md:text-2xl">
              <span className="text-[#1A75BB]">Em</span>pirical API
            </h1>
            <span className="text-gray-500 text-sm max-md:text-xs">
              v{version}-alpha
            </span>
            <div className="mt-2">
              <div className="flex space-x-3">
                <Link
                  href="https://github.com/yeahart/empirical-api"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-[20px]" />
                </Link>
                <span className="h-[20px] w-[1.2px] rounded-full bg-gray-200"></span>
                <Link
                  href="https://github.com/yeahart/empirical-api"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-[20px]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-2 flex items-center">
            <h1 className="text-lg text-gray-800 max-md:text-sm">
              Lightweight, diverse, and actively maintained dummy APIs for
              testing and prototyping.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
