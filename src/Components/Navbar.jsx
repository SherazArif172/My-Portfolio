import React from "react";
import { FaBars } from "react-icons/fa";

import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className=" bg-black ">
        <div className="flex justify-between items-center   ml-9  py-6">
          <h2 className="font-bold text-5xl text-purple-400">Sh.</h2>

          <div className="mt-8">
            <ul className=" flex  gap-9  text-white text-lg mr-9  ">
              <li className="cursor-pointer  flex lg:justify-center items-center gap-1 text-white hover:text-gray-300 transition duration-300 border-b-4 border-transparent hover:border-purple-400">
                <AiOutlineHome />
                <a href="/" className="styling">
                  Home
                </a>
              </li>
              <li className="cursor-pointer  flex lg:justify-center items-center gap-1 text-white hover:text-gray-300 transition duration-300 border-b-4 border-transparent hover:border-purple-400">
                <AiOutlineInfoCircle />
                <a href="about" className="styling">
                  About
                </a>
              </li>
              <li className="cursor-pointer flex lg:justify-center items-center gap-1 text-white hover:text-gray-300 transition duration-300 border-b-4 border-transparent hover:border-purple-400">
                <AiOutlineProject />
                <a href="project" className="styling">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
