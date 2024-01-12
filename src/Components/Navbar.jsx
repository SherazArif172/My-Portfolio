import React from "react";
// import "./Navbar.css";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div className=" bg-black ">
        <div className="flex justify-between mx-7  py-6">
          <h2 className="font-bold text-5xl text-purple-400">Sh.</h2>
          <div>
            <ul className="flex gap-7 text-white text-lg mr-9">
              <li className="cursor-pointer  flex justify-center items-center gap-1 text-white hover:text-gray-300 transition duration-300 border-b-4 border-transparent hover:border-purple-400">
                <AiOutlineHome />
                <a href="/" className="styling">
                  Home
                </a>
              </li>
              <li className="cursor-pointer  flex justify-center items-center gap-1 hover:text-gray-300 transition duration-300 border-b-4 border-transparent hover:border-purple-400">
                <AiOutlineInfoCircle />
                <a href="about" className="styling">
                  About
                </a>
              </li>
              <li className="cursor-pointer flex justify-center items-center gap-1 hover:text-gray-300 transition duration-300 border-b-4 border-transparent hover:border-purple-400">
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
