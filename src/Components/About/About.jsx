import Aboutimg from "../About/image/about (1).png";
import { FaHandPointRight } from "react-icons/fa6";

function About() {
  return (
    <div className="mt-52 grid lg:grid-cols-2">
      <div className="text-white m-auto lg:pl-20 pl-0 lg:mx-0 mx-20">
        <h1 className="text-center text-4xl  mb-16">
          Know Who <span className="text-purple-400">I'M</span>
        </h1>
        <p className="text-xl leading-9">
          Hi Everyone, I am <span className="text-purple-500">Sheraz Arif</span>{" "}
          from <span className="text-purple-500">Sargodha, Pakistan</span> . I
          am currently employed as a software developer at Juspay. I have
          completed Integrated MSc (IMSc) in Maths and Computing at BIT Mesra.
        </p>
        <p className="text-2xl leading-9 mt-7">
          Apart from coding, some other activities that I love to do!
        </p>
        <ul className="text-xl leading-9 mt-4 ml-8 ">
          <li className="flex content-center items-center">
            <FaHandPointRight className="mr-2" /> Playing Games
          </li>
          <li className="flex content-center items-center">
            {" "}
            <FaHandPointRight className="mr-2" /> Writing Tech Blogs
          </li>
          <li className="flex content-center items-center">
            <FaHandPointRight className="mr-2" />
            Travelling
          </li>
        </ul>
        <p className="text-purple-400 text-center text-xl leading-8 mt-6">
          "Strive to build things that make a difference!" <br />
          --Sheraz
        </p>
      </div>
      <div className="m-auto lg:mt-0 mt-16">
        <img src={Aboutimg} alt="" className="w-[450px]" />
      </div>
    </div>
  );
}

export default About;
