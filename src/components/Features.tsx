import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRocket } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <section className="w-full flex justify-center py-4">
      <div className="w-2/4">
        <div className="text-gray-800">
          <div className="flex items-center space-x-1 text-xl  max-md:text-lg">
            <FontAwesomeIcon
              icon={faRocket}
              className="w-[20px]  max-md:w-[15px]"
            />
            <span>Features:</span>
          </div>
          <ul className="max-md:text-sm">
            <li className="space-x-1">
              <FontAwesomeIcon icon={faCheck} className="text-[#1A75BB]" />
              <span>Lightweight dummy APIs</span>
            </li>
            <li className="space-x-1">
              <FontAwesomeIcon icon={faCheck} className="text-[#1A75BB]" />
              <span>
                Supports all HTTP methods &#40;GET, PUT, POST, DELETE&#41;
              </span>
            </li>
            <li className="space-x-1">
              <FontAwesomeIcon icon={faCheck} className="text-[#1A75BB]" />
              <span>Routes for query parameters and dynamic parameters</span>
            </li>
            <li className="space-x-1">
              <FontAwesomeIcon icon={faCheck} className="text-[#1A75BB]" />
              <span>Comprehensive guide section</span>
            </li>
            <li className="space-x-1">
              <FontAwesomeIcon icon={faCheck} className="text-[#1A75BB]" />
              <span>Examples page for clear explanations</span>
            </li>
            <li className="space-x-1">
              <FontAwesomeIcon icon={faCheck} className="text-[#1A75BB]" />
              <span>Notes page for deeper insights</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
