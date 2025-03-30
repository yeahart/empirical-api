import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full container mx-auto py-4">
      <div className="w-full px-4 py-2">
        <div className="flex items-center justify-center max-md:text-sm max-md:flex-wrap">
          <h3 className="text-center">
            An open-source project made with 💙 by Triple Artisan&nbsp;
          </h3>
          <div className="relative h-[25px] w-[25px] max-md:h-[20px] max-md:w-[20px]">
            <Image
              src="/TrippleArtisanOfficialLogoBlue.svg"
              alt="TA"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
