import { RiHtml5Line } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandTailwind } from "react-icons/tb";

function SkillSet() {
  return (
    <div className="mb-16 text-white">
      <div className=" text-5xl text-center mt-16">
        <h1>
          Professional <span className="text-purple-400"> Skillset</span>
        </h1>
      </div>
      <div className="mt-12 flex flex-wrap justify-around">
        <div className="md:mt-0 mt-5 border border-purple-400 border-solid w-[150px] h-[130px] flex justify-center items-center text-2xl font-bold rounded-md transition-transform transform hover:-translate-y-2">
          <h1>
            <RiHtml5Line className="text-7xl" />
            Html5
          </h1>
        </div>
        <div className="md:mt-0 mt-5 border border-purple-400 border-solid w-[150px] h-[130px] flex justify-center items-center text-2xl font-bold rounded-md transition-transform transform hover:-translate-y-2">
          <h1>
            <FaCss3Alt className="text-7xl" />
            <span className="ml-4">Css</span>
          </h1>
        </div>
        <div className="md:mt-0 mt-5 border border-purple-400 border-solid w-[150px] h-[130px] flex justify-center items-center text-2xl font-bold rounded-md transition-transform transform hover:-translate-y-2">
          <h1>
            <TbBrandJavascript className="text-7xl ml-5" />
            JavaScript
          </h1>
        </div>
        <div className="md:mt-0 mt-5 border border-purple-400 border-solid w-[150px] h-[130px] flex justify-center items-center text-2xl font-bold rounded-md transition-transform transform hover:-translate-y-2">
          <h1>
            <RiReactjsFill className="text-7xl ml-2" />
            React Js
          </h1>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-around">
        <div className="md:mt-0 mt-5 border border-purple-400 border-solid w-[150px] h-[130px] flex justify-center items-center text-2xl font-bold rounded-md transition-transform transform hover:-translate-y-2">
          <h1>
            <BsBootstrap className="text-7xl ml-4" />
            Bootstrap
          </h1>
        </div>
        <div className="md:mt-0 mt-5 border border-purple-400 border-solid w-[150px] h-[130px] flex justify-center items-center text-2xl font-bold rounded-md transition-transform transform hover:-translate-y-2">
          <h1>
            <TbBrandTailwind className="text-7xl ml-5" />
            <span className="ml-4">Tailwind</span>
          </h1>
        </div>
        <div className="md:mt-0 mt-5 border border-purple-400 border-solid w-[150px] h-[130px] flex justify-center items-center text-2xl font-bold rounded-md transition-transform transform hover:-translate-y-2">
          <h1>
            <TbBrandJavascript className="text-7xl ml-5" />
            JavaScript
          </h1>
        </div>
        <div className="md:mt-0 mt-5 border border-purple-400 border-solid w-[150px] h-[130px] flex justify-center items-center text-2xl font-bold rounded-md transition-transform transform hover:-translate-y-2">
          <h1>
            <RiReactjsFill className="text-7xl ml-2" />
            React Js
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SkillSet;
